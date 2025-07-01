document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const workoutData = {
        segunda: { title: "Full Body – Força e Resistência", components: [ { type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, exercises: [ { name: 'Agachamento livre', type: 'reps', value: '15 reps' }, { name: 'Flexão de braço', type: 'reps', value: '10-15 reps' }, { name: 'Afundo alternado', type: 'reps', value: '10 reps/perna' }, { name: 'Prancha', type: 'time', value: 45 } ]}, { type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, exercises: [ { name: 'Agachamento sumô', type: 'reps', value: '15 reps' }, { name: 'Flexão diamante', type: 'reps', value: '10 reps' }, { name: 'Elevação de pernas deitado', type: 'reps', value: '15 reps' }, { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps' } ]}, { type: 'finalizador', name: 'Finalizador (Opcional)', sets: 2, rest: 30, exercises: [ { name: 'Burpee', type: 'time', value: 30 }, { name: 'Agachamento com salto', type: 'time', value: 30 } ]} ] },
        terca: { title: "HIIT + Core", components: [ { type: 'circuito', name: 'Bloco 1 HIIT', sets: 4, rest: 60, exercises: [ { name: 'Polichinelo', type: 'time', value: 30, rest: 15 }, { name: 'Agachamento com salto', type: 'time', value: 30, rest: 15 }, { name: 'Corrida estacionária', type: 'time', value: 30, rest: 15 }, { name: 'Mountain climbers', type: 'time', value: 30, rest: 0 } ]}, { type: 'core-block', name: 'Core', sets: 3, rest: 45, exercises: [ { name: 'Canivete abdominal', type: 'reps', value: '15 reps' }, { name: 'Abdominal bicicleta', type: 'reps', value: '20 reps' }, { name: 'Prancha', type: 'time', value: 60 } ]}, { type: 'finalizador', name: 'Final', sets: 1, rest: 0, exercises: [ { name: 'Burpee', type: 'time', value: 30 }, { name: 'Abdominal infra', type: 'reps', value: '20 reps' }, { name: 'Sprint no lugar', type: 'time', value: 20 } ]} ] },
        quarta: { title: "Superior + Core", components: [ { type: 'circuito', name: 'Circuito A', sets: 3, rest: 60, exercises: [ { name: 'Flexão tradicional', type: 'reps', value: '10-15 reps' }, { name: 'Remada com elástico', type: 'reps', value: '12 reps' }, { name: 'Elevação frontal com elástico', type: 'reps', value: '12 reps' }, { name: 'Prancha', type: 'time', value: 45 } ]}, { type: 'circuito', name: 'Circuito B', sets: 3, rest: 60, exercises: [ { name: 'Flexão com toque no ombro', type: 'reps', value: '12 reps' }, { name: 'Abdominal canivete', type: 'reps', value: '15 reps' }, { name: 'Superman', type: 'reps', value: '15 reps' }, { name: 'Prancha lateral', type: 'time', value: 30, note: 'por lado' } ]}, { type: 'finalizador', name: 'Finalizador', sets: 2, rest: 0, exercises: [ { name: 'Sprint no lugar', type: 'time', value: 30 }, { name: 'Burpee', type: 'time', value: 30 } ]} ] },
        quinta: { title: "HIIT + Core (Intenso)", components: [ { type: 'circuito', name: 'Tabata', sets: 1, rest: 60, exercises: [ { name: 'Agachamento com salto (Tabata)', type: 'tabata', value: '4 min' }, { name: 'Corrida estacionária (Tabata)', type: 'tabata', value: '4 min' }, { name: 'Flexão (Tabata)', type: 'tabata', value: '4 min' }, { name: 'Burpee (Tabata)', type: 'tabata', value: '4 min' }, ]}, { type: 'core-block', name: 'Core Blaster', sets: 2, rest: 60, exercises: [ { name: 'Prancha', type: 'time', value: 60 }, { name: 'Elevação de pernas', type: 'reps', value: '20 reps' }, { name: 'Abdominal cruzado', type: 'reps', value: '20 reps' }, { name: 'Prancha com toque no ombro', type: 'reps', value: '20 reps' } ]} ] },
        sexta: { title: "Inferior + Abdômen", components: [ { type: 'circuito', name: 'Circuito Pernas', sets: 3, rest: 60, exercises: [ { name: 'Agachamento isométrico', type: 'time', value: 45 }, { name: 'Afundo estacionário', type: 'reps', value: '10 reps/perna' }, { name: 'Elevação de panturrilha', type: 'reps', value: '20 reps' }, { name: 'Ponte de glúteo', type: 'reps', value: '15 reps' } ]}, { type: 'core-block', name: 'Core', sets: 3, rest: 60, exercises: [ { name: 'Abdominal infra', type: 'reps', value: '15 reps' }, { name: 'Prancha lateral c/ elevação', type: 'time', value: 30, note: 'por lado' }, { name: 'Abdominal com pés elevados', type: 'reps', value: '20 reps' }, { name: 'Prancha com braço estendido', type: 'time', value: 45 } ]}, { type: 'finalizador', name: 'Finalizador (Opcional)', sets: 1, rest: 0, exercises: [ { name: 'Sprint parado', type: 'time', value: 30 }, { name: 'Canivete abdominal', type: 'reps', value: '15 reps' }, { name: 'Burpee', type: 'time', value: 30 } ]} ] }
    };

    // --- DOM Elements ---
    const daySelection = document.getElementById('day-selection');
    const workoutDisplay = document.getElementById('workout-display');
    const workoutDayTitle = document.getElementById('workout-day-title');
    const startWorkoutBtn = document.getElementById('start-workout-btn');
    const workoutControls = document.getElementById('workout-controls');
    const currentExerciseNameEl = document.getElementById('current-exercise-name');
    const totalTimeEl = document.getElementById('total-time');
    const pauseResumeBtn = document.getElementById('pause-resume-btn');
    const nextExerciseBtn = document.getElementById('next-exercise-btn');
    const stopBtn = document.getElementById('stop-btn');
    
    // Timer elements
    const timerOverlay = document.getElementById('timer-overlay');
    const timerInstruction = document.getElementById('timer-instruction');
    const timerExerciseName = document.getElementById('timer-exercise-name');
    const timerClock = document.getElementById('timer-clock');
    const progressRing = document.getElementById('progress-ring');
    const ringRadius = progressRing.r.baseVal.value;
    const ringCircumference = 2 * Math.PI * ringRadius;
    progressRing.style.strokeDasharray = `${ringCircumference} ${ringCircumference}`;
    const pauseIndicator = document.getElementById('pause-indicator');
    const skipTimerBtn = document.getElementById('skip-timer-btn');
    const BeepSound = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU2LjQwLjEwMQAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAABWUDQyAAAAAAAAAAAAAAAIAAAAbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW//uEMN4ADkFrgAAAAAAAAAAAAAAAAAAAAAAAADgAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uEMV4ADkFrgAAAAAAAAAAAAAAAAAAAAAAAADgAAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'); // Simple beep sound

    // --- Elementos do Histórico ---
    const historyBtn = document.getElementById('history-btn');
    const historyOverlay = document.getElementById('history-overlay');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const historyList = document.getElementById('history-list');

    // --- State ---
    let selectedDay = null;
    let workoutQueue = [];
    let currentStepIndex = -1;
    let isWorkoutRunning = false;
    let isPaused = false;
    let workoutHistory = [];
    
    // Timers
    let totalTimeInterval = null;
    let totalSeconds = 0;
    let exerciseTimerInterval = null;
    let exerciseSecondsRemaining = 0;
    let exerciseInitialDuration = 0;

    // --- Funções de Histórico ---
    function saveHistory() {
        localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
    }

    function loadHistory() {
        const savedHistory = localStorage.getItem('workoutHistory');
        if (savedHistory) {
            workoutHistory = JSON.parse(savedHistory);
        }
    }

    function renderHistory() {
        historyList.innerHTML = '';
        if (workoutHistory.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nenhum treino registrado ainda.</p>';
            return;
        }
        workoutHistory.forEach(item => {
            const li = document.createElement('li');
            li.className = 'history-item';
            li.innerHTML = `<div class="history-info"><strong>${item.dayName}</strong><span>${item.date}</span></div><div class="history-duration">${item.duration}</div>`;
            historyList.appendChild(li);
        });
    }

    function openHistory() {
        renderHistory();
        historyOverlay.classList.add('active'); // Ativa a animação
    }

    function closeHistory() {
        historyOverlay.classList.remove('active'); // Desativa a animação
    }

    // --- Funções Principais (com modificações) ---
    function formatTime(seconds) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    }

    function displayWorkout(dayKey) {
        if (!workoutData[dayKey]) return;
        selectedDay = dayKey;
        if (isWorkoutRunning) stopWorkout(false);
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.day === dayKey));
        const workout = workoutData[dayKey];
        workoutDayTitle.textContent = workout.title;
        workoutDisplay.innerHTML = '';
        workout.components.forEach(component => {
            const card = document.createElement('div');
            card.className = 'workout-card';
            let titleText = `${component.name} ${component.sets > 1 ? `(${component.sets}x)` : ''}`;
            card.innerHTML = `<h3>${titleText}</h3>`;
            const list = document.createElement('ul');
            list.className = 'exercise-list';
            component.exercises.forEach(ex => {
                const item = document.createElement('li');
                item.className = 'exercise-item';
                item.innerHTML = `<span class="exercise-name">${ex.name} ${ex.note ? `(${ex.note})` : ''}</span><span class="exercise-detail">${ex.value}</span>`;
                list.appendChild(item);
            });
            card.appendChild(list);
            workoutDisplay.appendChild(card);
        });
        resetControlsToInitial();
        startWorkoutBtn.classList.remove('hidden');
    }

    function buildWorkoutQueue(dayKey) {
        const workout = workoutData[dayKey];
        workoutQueue = [];
        let exerciseIdCounter = 0;
        workout.components.forEach(component => {
            for (let set = 1; set <= component.sets; set++) {
                component.exercises.forEach((exercise) => {
                    const step = { ...exercise, id: `ex-${exerciseIdCounter++}`, setInfo: `(Set ${set}/${component.sets})` };
                    if (exercise.type === 'tabata') {
                        for (let i = 0; i < 8; i++) {
                           workoutQueue.push({ ...step, name: `${exercise.name}`, type: 'time', value: 20, setInfo: `(Round ${i+1}/8)` });
                           if (i < 7) workoutQueue.push({ type: 'rest', value: 10, name: 'Descanso Tabata'});
                        }
                    } else {
                        workoutQueue.push(step);
                    }
                    if (exercise.rest) {
                        workoutQueue.push({ type: 'rest', value: exercise.rest, name: 'Pausa Rápida'});
                    }
                });
                if (component.rest > 0 && set < component.sets) {
                    workoutQueue.push({ type: 'rest', value: component.rest, name: `Descanso do ${component.name}`});
                }
            }
        });
    }

    function startWorkout() {
        buildWorkoutQueue(selectedDay);
        if (workoutQueue.length === 0) return;
        isWorkoutRunning = true;
        isPaused = false;
        currentStepIndex = -1;
        totalSeconds = 0;
        startTotalTimer();
        updateControlsForRunning();
        nextStep();
    }
    
    function stopWorkout(save = true) {
        if (save && totalSeconds > 0) {
            const newEntry = {
                date: new Date().toLocaleDateString('pt-BR'),
                dayName: workoutData[selectedDay].title,
                duration: formatTime(totalSeconds)
            };
            workoutHistory.unshift(newEntry);
            saveHistory();
        }
        isWorkoutRunning = false;
        clearInterval(totalTimeInterval);
        clearInterval(exerciseTimerInterval);
        timerOverlay.classList.add('hidden');
        resetControlsToInitial();
    }

    function finishWorkout() {
        const finalTime = formatTime(totalSeconds);
        stopWorkout(true);
        alert(`Treino Concluído em ${finalTime}!`);
    }
    
    function startTotalTimer() {
        totalTimeEl.textContent = '00:00';
        totalTimeInterval = setInterval(() => {
            if (!isPaused) {
                totalSeconds++;
                totalTimeEl.textContent = formatTime(totalSeconds);
            }
        }, 1000);
    }

    function nextStep() {
        if (!isWorkoutRunning) return;
        currentStepIndex++;
        if (currentStepIndex >= workoutQueue.length) {
            finishWorkout();
            return;
        }
        const step = workoutQueue[currentStepIndex];
        updateCurrentExerciseUI(step);
        if (step.type === 'time' || step.type === 'rest') {
            nextExerciseBtn.classList.add('hidden');
            startExerciseTimer(step);
        } else {
            nextExerciseBtn.classList.remove('hidden');
        }
    }
    
    function handlePauseResume() {
        isPaused = !isPaused;
        const icon = pauseResumeBtn.querySelector('.material-icons');
        icon.textContent = isPaused ? 'play_arrow' : 'pause';
        pauseIndicator.classList.toggle('hidden', !isPaused);
    }

    function startExerciseTimer(step) {
        clearInterval(exerciseTimerInterval);
        exerciseInitialDuration = step.value;
        exerciseSecondsRemaining = step.value;
        timerInstruction.textContent = step.type === 'rest' ? 'DESCANSO' : 'EXERCÍCIO';
        timerExerciseName.textContent = step.name;
        timerOverlay.classList.remove('hidden');
        pauseIndicator.classList.add('hidden');
        isPaused = false;
        pauseResumeBtn.querySelector('.material-icons').textContent = 'pause';

        const updateClock = () => {
            if (isPaused) return;
            timerClock.textContent = formatTime(exerciseSecondsRemaining);
            const progressOffset = ( (exerciseInitialDuration - exerciseSecondsRemaining) / exerciseInitialDuration) * ringCircumference;
            progressRing.style.strokeDashoffset = ringCircumference - progressOffset;
            if (exerciseSecondsRemaining <= 0) {
                clearInterval(exerciseTimerInterval);
                BeepSound.play();
                timerOverlay.classList.add('hidden');
                nextStep();
            }
            exerciseSecondsRemaining--;
        };
        updateClock();
        exerciseTimerInterval = setInterval(updateClock, 1000);
    }
    
    function skipTimer() {
        clearInterval(exerciseTimerInterval);
        timerOverlay.classList.add('hidden');
        nextStep();
    }

    function resetControlsToInitial() {
        startWorkoutBtn.classList.remove('hidden');
        workoutControls.classList.add('hidden');
        document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
    }

    function updateControlsForRunning() {
        startWorkoutBtn.classList.add('hidden');
        workoutControls.classList.remove('hidden');
    }

    function updateCurrentExerciseUI(step) {
        document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
        currentExerciseNameEl.textContent = step.name;
        if (step.id) {
            const allItems = document.querySelectorAll('.exercise-item');
            const matchingItem = Array.from(allItems).find(item => item.querySelector('.exercise-name').textContent.startsWith(step.name));
            if(matchingItem) matchingItem.classList.add('current');
        }
    }

    // --- Event Listeners ---
    daySelection.addEventListener('click', (e) => {
        if (e.target.classList.contains('day-btn')) {
            displayWorkout(e.target.dataset.day);
        }
    });

    startWorkoutBtn.addEventListener('click', startWorkout);
    pauseResumeBtn.addEventListener('click', handlePauseResume);
    nextExerciseBtn.addEventListener('click', nextStep);
    stopBtn.addEventListener('click', () => stopWorkout(true));
    skipTimerBtn.addEventListener('click', skipTimer);
    
    // Listeners do Histórico
    historyBtn.addEventListener('click', openHistory);
    closeHistoryBtn.addEventListener('click', closeHistory);

    // --- Initial state ---
    loadHistory();
    displayWorkout('segunda');
});