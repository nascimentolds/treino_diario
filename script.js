document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const appTitle = document.getElementById('app-title');
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
    
    // History elements
    const historyBtn = document.getElementById('history-btn');
    const historyOverlay = document.getElementById('history-overlay');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const historyList = document.getElementById('history-list');

    // Settings elements
    const settingsBtn = document.getElementById('settings-btn');
    const settingsOverlay = document.getElementById('settings-overlay');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const planList = document.getElementById('plan-list');

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
    const pauseResumeTimerBtn = document.getElementById('pause-resume-timer-btn');
    const restartTimerBtn = document.getElementById('restart-timer-btn');
    const exitWorkoutBtn = document.getElementById('exit-workout-btn');
    const skipStepBtn = document.getElementById('skip-step-btn');

    // --- State ---
    let activePlanId = '';
    let workoutData = {}; // Agora é dinâmico, baseado no plano ativo
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
    const BeepSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');

    // --- Funções de Seleção de Plano ---
    function setActivePlan(planId) {
        if (!TODOS_OS_PLANOS[planId]) return;

        activePlanId = planId;
        workoutData = TODOS_OS_PLANOS[planId].dias; // Define os dados do treino atual
        localStorage.setItem('activePlanId', planId); // Salva a escolha do usuário

        appTitle.textContent = TODOS_OS_PLANOS[planId].nome;

        // Atualiza a exibição com o treino do dia do novo plano
        displayWorkout(getInitialDay());
    }

    function loadActivePlan() {
        let savedPlanId = localStorage.getItem('activePlanId');
        if (!savedPlanId || !TODOS_OS_PLANOS[savedPlanId]) {
            savedPlanId = Object.keys(TODOS_OS_PLANOS)[0]; // Pega o primeiro plano como padrão
        }
        setActivePlan(savedPlanId);
    }

    function renderPlanSelection() {
        planList.innerHTML = '';
        for (const planId in TODOS_OS_PLANOS) {
            const plan = TODOS_OS_PLANOS[planId];
            const li = document.createElement('li');
            li.className = 'plan-item';
            li.dataset.planId = plan.id;
            if (plan.id === activePlanId) {
                li.classList.add('active');
            }
            li.innerHTML = `<h3>${plan.nome}</h3><p>${plan.descricao}</p>`;
            planList.appendChild(li);
        }
    }

    function openSettings() {
        renderPlanSelection();
        settingsOverlay.classList.add('active');
    }

    function closeSettings() {
        settingsOverlay.classList.remove('active');
    }


    // --- Funções de Histórico ---
    function saveHistory() { localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory)); }
    function loadHistory() {
        const savedHistory = localStorage.getItem('workoutHistory');
        if (savedHistory) workoutHistory = JSON.parse(savedHistory);
    }
    function renderHistory() {
        historyList.innerHTML = '';
        if (workoutHistory.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nenhum treino registrado ainda.</p>';
            return;
        }
        workoutHistory.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'history-item';
            li.innerHTML = `<div class="history-info"><strong>${item.dayName}</strong><span>${item.date}</span></div><div class="history-duration">${item.duration}</div><button class="delete-history-btn" data-index="${index}"><span class="material-icons">delete_outline</span></button>`;
            historyList.appendChild(li);
        });
    }
    function deleteHistoryItem(index) {
        const confirmed = confirm('Tem certeza que deseja apagar este registro? Esta ação não pode ser desfeita.');
        if (confirmed) {
            workoutHistory.splice(index, 1);
            saveHistory();
            renderHistory();
        }
    }
    function openHistory() { renderHistory(); historyOverlay.classList.add('active'); }
    function closeHistory() { historyOverlay.classList.remove('active'); }

    // --- Funções Principais de Treino ---
    function formatTime(seconds) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    }

    function displayWorkout(dayKey) {
        if (isWorkoutRunning) stopWorkout(false);
        selectedDay = dayKey;
        
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.day-btn[data-day="${dayKey}"]`);
        if(activeBtn) activeBtn.classList.add('active');
        
        const workout = workoutData[dayKey];
        workoutDisplay.innerHTML = '';

        if (!workout || !workout.components) {
            workoutDayTitle.textContent = "Dia de Descanso";
            workoutDisplay.innerHTML = `<div class="welcome-message"><span class="material-icons welcome-icon">self_improvement</span><h2>Aproveite para descansar!</h2><p>O descanso é fundamental para a recuperação e crescimento muscular.</p></div>`;
            startWorkoutBtn.classList.add('hidden');
            return;
        }
        
        workoutDayTitle.textContent = workout.title;
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
        if (!workout || !workout.components) return;

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
                    } else { workoutQueue.push(step); }
                    if (exercise.rest) { workoutQueue.push({ type: 'rest', value: exercise.rest, name: 'Pausa Rápida'}); }
                });
                if (component.rest > 0 && set < component.sets) {
                    workoutQueue.push({ type: 'rest', value: component.rest, name: `Descanso do ${component.name}`});
                }
            }
        });
    }

    function startWorkout() {
        buildWorkoutQueue(selectedDay);
        if (workoutQueue.length === 0) {
            alert("Não há exercícios para este dia.");
            return;
        }
        isWorkoutRunning = true; isPaused = false; currentStepIndex = -1; totalSeconds = 0;
        startTotalTimer();
        updateControlsForRunning();
        nextStep();
    }
    
    function stopWorkout(save = true) {
        if (save && totalSeconds > 5) {
            const newEntry = {
                date: new Date().toLocaleDateString('pt-BR'),
                dayName: TODOS_OS_PLANOS[activePlanId].dias[selectedDay].title,
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
        clearInterval(exerciseTimerInterval);
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
        const mainIcon = pauseResumeBtn.querySelector('.material-icons');
        const timerIcon = pauseResumeTimerBtn.querySelector('.material-icons');
        const newIcon = isPaused ? 'play_arrow' : 'pause';
        mainIcon.textContent = newIcon;
        timerIcon.textContent = newIcon;
        pauseIndicator.classList.toggle('hidden', !isPaused);

        if (!isPaused && isWorkoutRunning) {
            const currentStep = workoutQueue[currentStepIndex];
            if (currentStep && (currentStep.type === 'time' || currentStep.type === 'rest')) {
                startExerciseTimer(currentStep, true);
            }
        }
    }

    function startExerciseTimer(step, isResuming = false) {
        clearInterval(exerciseTimerInterval);
        if (!isResuming) {
            exerciseInitialDuration = step.value;
            exerciseSecondsRemaining = step.value;
        }
        timerInstruction.textContent = step.type === 'rest' ? 'DESCANSO' : 'EXERCÍCIO';
        timerExerciseName.textContent = step.name;
        timerOverlay.classList.remove('hidden');
        if (isPaused) handlePauseResume();
        
        const updateClock = () => {
            if (isPaused) return;
            timerClock.textContent = formatTime(exerciseSecondsRemaining);
            const progressOffset = ((exerciseInitialDuration - exerciseSecondsRemaining) / exerciseInitialDuration) * ringCircumference;
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

    function restartCurrentTimer() {
        if (!isWorkoutRunning) return;
        exerciseSecondsRemaining = exerciseInitialDuration;
        if (isPaused) handlePauseResume();
    }

    function skipCurrentStep() {
        if (!isWorkoutRunning) return;
        timerOverlay.classList.add('hidden');
        nextStep();
    }
    
    function closeTimerAndPause() {
        if (!isWorkoutRunning) return;
        if (!isPaused) handlePauseResume();
        timerOverlay.classList.add('hidden');
        nextExerciseBtn.classList.remove('hidden');
    }

    function resetControlsToInitial() {
        startWorkoutBtn.classList.add('hidden');
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
        if (e.target.classList.contains('day-btn')) displayWorkout(e.target.dataset.day);
    });

    startWorkoutBtn.addEventListener('click', startWorkout);
    pauseResumeBtn.addEventListener('click', handlePauseResume);
    nextExerciseBtn.addEventListener('click', nextStep);
    stopBtn.addEventListener('click', () => stopWorkout(true));
    historyBtn.addEventListener('click', openHistory);
    closeHistoryBtn.addEventListener('click', closeHistory);
    settingsBtn.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    pauseResumeTimerBtn.addEventListener('click', handlePauseResume);
    restartTimerBtn.addEventListener('click', restartCurrentTimer);
    exitWorkoutBtn.addEventListener('click', closeTimerAndPause);
    skipStepBtn.addEventListener('click', skipCurrentStep);

    historyList.addEventListener('click', (e) => {
        const deleteButton = e.target.closest('.delete-history-btn');
        if (deleteButton) {
            deleteHistoryItem(parseInt(deleteButton.dataset.index, 10));
        }
    });

    planList.addEventListener('click', (e) => {
        const planItem = e.target.closest('.plan-item');
        if (planItem) {
            setActivePlan(planItem.dataset.planId);
            closeSettings();
        }
    });

    // --- Initial state ---
    function getInitialDay() {
        const dayMap = [ 'segunda', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'segunda' ];
        const todayIndex = new Date().getDay();
        return dayMap[todayIndex];
    }
    loadHistory();
    loadActivePlan();
});