import { TODOS_OS_PLANOS } from '../data/planos.js';
import * as state from './state.js';
import * as ui from './ui.js';
import * as storage from './storage.js';
import * as audio from './audio.js';

const PREPARATION_TIME = 3;
const TOAST_TRIGGER_SECONDS = 5;

function startPreparationPhase(step) {
    const { timers } = state.getState();
    if (timers.exerciseTimerInterval) clearInterval(timers.exerciseTimerInterval);
    if (timers.prepInterval) clearInterval(timers.prepInterval);

    let prepTimeRemaining = PREPARATION_TIME;
    ui.setupTimerForPreparation(step, prepTimeRemaining);

    const prepInterval = setInterval(() => {
        if (state.getState().isPaused) return;

        prepTimeRemaining--;
        ui.updatePreparationTimer(prepTimeRemaining, PREPARATION_TIME);
        audio.playPrepBeep();

        if (prepTimeRemaining <= 0) {
            clearInterval(prepInterval);
            startExecutionPhase(step);
        }
    }, 1000);

    state.setState({ timers: { ...timers, prepInterval } });
}

function startExecutionPhase(step) {
    const { timers } = state.getState();
    audio.playGoBeep();
    ui.setupTimerForExecution(step);

    state.setState({
        exerciseInitialDuration: step.value,
        exerciseSecondsRemaining: step.value,
    });
    
    const tick = () => {
        if (state.getState().isPaused) return;
        
        let { exerciseSecondsRemaining } = state.getState();
        ui.updateTimerDisplay(exerciseSecondsRemaining, step.value);
        
        if (exerciseSecondsRemaining === TOAST_TRIGGER_SECONDS) {
            const { workoutQueue, currentStepIndex } = state.getState();
            const nextStepIndex = currentStepIndex + 1;
            if (nextStepIndex < workoutQueue.length) {
                const nextStep = workoutQueue[nextStepIndex];
                ui.showNextExerciseToast(nextStep.name);
            }
        }
        
        if (exerciseSecondsRemaining <= 0) {
            clearInterval(state.getState().timers.exerciseTimerInterval);
            audio.playGoBeep();
            ui.setTimerOverlayVisible(false);
            ui.hideNextExerciseToast();
            nextStep();
        } else {
            state.setState({ exerciseSecondsRemaining: exerciseSecondsRemaining - 1 });
        }
    };

    tick();
    const exerciseTimerInterval = setInterval(tick, 1000);
    state.setState({ timers: { ...timers, exerciseTimerInterval } });
}

function buildWorkoutQueue(dayKey) {
    const { activePlanId } = state.getState();
    const workout = TODOS_OS_PLANOS[activePlanId].dias[dayKey];
    const queue = [];
    if (!workout || !workout.components) return queue;

    let exerciseIdCounter = 0;
    workout.components.forEach((component, index) => {
        const sets = component.sets || 1;
        const rounds = component.rounds || 1;

        if (component.type === 'tabata_circuit') {
            for (let round = 1; round <= rounds; round++) {
                const exerciseForRound = component.exercises[(round - 1) % component.exercises.length];
                queue.push({ name: exerciseForRound.name, type: 'time', value: 20, setInfo: `(Round ${round}/${rounds})`, id: `ex-${exerciseIdCounter++}` });
                if (round < rounds) {
                    queue.push({ name: 'Descanso Tabata', type: 'rest', value: 10 });
                }
            }
        } else {
            for (let set = 1; set <= sets; set++) {
                component.exercises.forEach((exercise) => {
                    const step = { ...exercise, id: `ex-${exerciseIdCounter++}`, setInfo: `(Set ${set}/${sets})` };
                    queue.push(step);
                    if (exercise.rest) { queue.push({ type: 'rest', value: exercise.rest, name: 'Pausa Rápida' }); }
                });
                if (component.rest > 0 && set < sets) {
                    queue.push({ type: 'rest', value: component.rest, name: `Descanso do ${component.name}` });
                }
            }
        }
        if (component.restAfter > 0 && index < workout.components.length - 1) {
            queue.push({ type: 'rest', value: component.restAfter, name: 'Descanso entre Blocos' });
        }
    });
    return queue;
}

function startTotalTimer() {
    const { timers } = state.getState();
    if (timers.totalTimeInterval) clearInterval(timers.totalTimeInterval);
    
    const newInterval = setInterval(() => {
        const { isPaused } = state.getState();
        if (!isPaused) {
            let { totalSeconds } = state.getState();
            totalSeconds++;
            state.setState({ totalSeconds });
            ui.DOM.totalTimeEl.textContent = ui.formatTime(totalSeconds);
        }
    }, 1000);
    state.setState({ timers: { ...timers, totalTimeInterval: newInterval }});
}

export function selectDay(dayKey) {
    state.resetWorkoutState();
    state.setState({ selectedDay: dayKey });
    const { activePlanId } = state.getState();
    ui.renderWorkout(activePlanId, dayKey);
}

export function startWorkout() {
    const { selectedDay } = state.getState();
    const queue = buildWorkoutQueue(selectedDay);
    if (queue.length === 0) {
        alert("Não há exercícios para este dia.");
        return;
    }
    
    const startTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    state.setState({ 
        workoutQueue: queue, 
        isWorkoutRunning: true, 
        isPaused: false,
        currentStepIndex: -1, 
        totalSeconds: 0, 
        workoutStartTime: startTime 
    });

    startTotalTimer();
    ui.updateControlsForRunning();
    nextStep();
}

export function stopWorkout(save = true) {
    const { totalSeconds, workoutHistory, activePlanId, selectedDay, workoutStartTime } = state.getState();
    if (save && totalSeconds > 5) {
        const plan = TODOS_OS_PLANOS[activePlanId];
        const newEntry = {
            date: new Date().toLocaleDateString('pt-BR'),
            planName: plan.nome,
            workoutTitle: plan.dias[selectedDay].title,
            duration: ui.formatTime(totalSeconds),
            startTime: workoutStartTime,
            endTime: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        const updatedHistory = [newEntry, ...workoutHistory];
        state.setWorkoutHistory(updatedHistory);
        storage.saveHistory(updatedHistory);
    }
    
    state.resetWorkoutState();
    ui.setTimerOverlayVisible(false);
    ui.hideNextExerciseToast();
    ui.resetControlsToInitial();
}

function finishWorkout() {
    const { totalSeconds } = state.getState();
    const finalTime = ui.formatTime(totalSeconds);
    stopWorkout(true);
    setTimeout(() => alert(`Treino Concluído em ${finalTime}!`), 100);
}

export function nextStep() {
    const { isWorkoutRunning, isPaused } = state.getState();
    if (!isWorkoutRunning) return;

    if (isPaused) {
        state.setState({ isPaused: false });
        ui.togglePauseUI(false);
    }

    let { currentStepIndex, workoutQueue } = state.getState();
    currentStepIndex++;
    state.setState({ currentStepIndex });

    if (currentStepIndex >= workoutQueue.length) {
        finishWorkout();
        return;
    }

    const step = workoutQueue[currentStepIndex];
    ui.updateCurrentExerciseUI(step);

    const isTimedStep = step.type === 'time' || step.type === 'rest';
    ui.DOM.nextExerciseBtn.classList.toggle('hidden', isTimedStep);
    if (isTimedStep) {
        startPreparationPhase(step);
    }
}

export function togglePause() {
    const { isWorkoutRunning, workoutQueue, currentStepIndex } = state.getState();
    if (!isWorkoutRunning) return;

    let { isPaused } = state.getState();
    isPaused = !isPaused;
    state.setState({ isPaused });
    ui.togglePauseUI(isPaused);

    if (!isPaused) {
        if (currentStepIndex >= 0 && currentStepIndex < workoutQueue.length) {
            const currentStep = workoutQueue[currentStepIndex];
            if (currentStep.type === 'time' || currentStep.type === 'rest') {
                ui.setTimerOverlayVisible(true);
            }
        }
    }
}

export function restartCurrentTimer() {
    const { exerciseInitialDuration } = state.getState();
    state.setState({ exerciseSecondsRemaining: exerciseInitialDuration });
    if(state.getState().isPaused) {
        togglePause();
    }
}

export function skipCurrentStep() {
    const { timers } = state.getState();
    if(timers.prepInterval) clearInterval(timers.prepInterval);
    if(timers.exerciseTimerInterval) clearInterval(timers.exerciseTimerInterval);
    ui.setTimerOverlayVisible(false);
    ui.hideNextExerciseToast();
    nextStep();
}

export function exitTimedStepView() {
    if (!state.getState().isPaused) {
        togglePause();
    }
    ui.setTimerOverlayVisible(false);
    ui.hideNextExerciseToast();
    ui.DOM.nextExerciseBtn.classList.remove('hidden');
}