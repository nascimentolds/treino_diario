document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const daySelection = document.getElementById('day-selection');
    const workoutDisplay = document.getElementById('workout-display');
    const workoutHeader = document.getElementById('workout-header');
    const planNameIndicator = document.getElementById('plan-name-indicator');
    const workoutDayTitle = document.getElementById('workout-day-title');
    const workoutControls = document.getElementById('workout-controls');
    const startButtonContainer = document.getElementById('start-button-container');
    const startWorkoutBtn = document.getElementById('start-workout-btn');
    const activeWorkoutView = document.getElementById('active-workout-view');
    const currentExerciseNameEl = document.getElementById('current-exercise-name');
    const totalTimeEl = document.getElementById('total-time');
    const pauseResumeBtn = document.getElementById('pause-resume-btn');
    const nextExerciseBtn = document.getElementById('next-exercise-btn');
    const stopBtn = document.getElementById('stop-btn');
    const menuBtn = document.getElementById('menu-btn');
    const sidenav = document.getElementById('sidenav');
    const sidenavOverlay = document.getElementById('sidenav-overlay');
    const closeSidenavBtn = document.getElementById('close-sidenav-btn');
    const menuThemeBtn = document.getElementById('menu-theme-btn');
    const menuHistoryBtn = document.getElementById('menu-history-btn');
    const menuSettingsBtn = document.getElementById('menu-settings-btn');
    const themeToggleIcon = menuThemeBtn.querySelector('.material-icons');
    const desktopMenuThemeBtn = document.getElementById('desktop-menu-theme-btn');
    const desktopMenuHistoryBtn = document.getElementById('desktop-menu-history-btn');
    const desktopMenuSettingsBtn = document.getElementById('desktop-menu-settings-btn');
    const desktopThemeIcon = desktopMenuThemeBtn.querySelector('.material-icons');
    const historyOverlay = document.getElementById('history-overlay');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const historyList = document.getElementById('history-list');
    const settingsOverlay = document.getElementById('settings-overlay');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const planList = document.getElementById('plan-list');
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
    let workoutData = {};
    let selectedDay = null;
    let workoutQueue = [];
    let currentStepIndex = -1;
    let isWorkoutRunning = false;
    let isPaused = false;
    let workoutHistory = [];
    let totalTimeInterval = null;
    let totalSeconds = 0;
    let exerciseTimerInterval = null;
    let exerciseSecondsRemaining = 0;
    let exerciseInitialDuration = 0;
    const BeepSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');

    // --- Funções do Menu ---
    function openSidenav() {
        sidenav.classList.add('active');
        sidenavOverlay.classList.add('active');
    }
    function closeSidenav() {
        sidenav.classList.remove('active');
        sidenavOverlay.classList.remove('active');
    }

    // --- Funções de Tema ---
    function applyTheme(theme) {
        const iconName = theme === 'dark' ? 'light_mode' : 'dark_mode';
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        themeToggleIcon.textContent = iconName;
        desktopThemeIcon.textContent = iconName;
    }
    function toggleTheme() {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    }
    
    // --- Funções de Seleção de Plano e Histórico ---
    function setActivePlan(planId) {
        if (!TODOS_OS_PLANOS[planId]) return;
        activePlanId = planId;
        workoutData = TODOS_OS_PLANOS[planId].dias;
        localStorage.setItem('activePlanId', planId);
        displayWorkout(getInitialDay());
    }
    function loadActivePlan() {
        let savedPlanId = localStorage.getItem('activePlanId');
        if (!savedPlanId || !TODOS_OS_PLANOS[savedPlanId]) {
            savedPlanId = Object.keys(TODOS_OS_PLANOS)[0];
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
            if (plan.id === activePlanId) li.classList.add('active');
            li.innerHTML = `<h3>${plan.nome}</h3><p>${plan.descricao}</p>`;
            planList.appendChild(li);
        }
    }
    function openSettings() { renderPlanSelection(); settingsOverlay.classList.add('active'); }
    function closeSettings() { settingsOverlay.classList.remove('active'); }
    function saveHistory() { localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory)); }
    function loadHistory() {
        const savedHistory = localStorage.getItem('workoutHistory');
        if (savedHistory) workoutHistory = JSON.parse(savedHistory);
    }
    function renderHistory() {
        historyList.innerHTML = '';
        if (workoutHistory.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nenhum treino registrado.</p>';
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
        const confirmed = confirm('Tem certeza que deseja apagar este registro?');
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
        
        planNameIndicator.textContent = TODOS_OS_PLANOS[activePlanId].nome;
        workoutHeader.classList.remove('hidden');

        if (!workout || !workout.components) {
            workoutDayTitle.textContent = "Dia de Descanso";
            workoutDisplay.innerHTML = `<div class="welcome-message"><span class="material-icons welcome-icon">self_improvement</span><h2>Aproveite para descansar!</h2><p>O descanso é fundamental.</p></div>`;
            startButtonContainer.classList.add('hidden');
            workoutControls.classList.add('hidden');
            return;
        }
        
        workoutDayTitle.textContent = workout.title;
        workout.components.forEach(component => {
            const card = document.createElement('div');
            card.className = 'workout-card';
            let titleText = component.name;
            if(component.sets > 1) titleText += ` (${component.sets}x)`;
            else if(component.rounds) titleText += ` (${component.rounds} Rounds)`;
            card.innerHTML = `<h3>${titleText}</h3>`;
            const list = document.createElement('ul');
            list.className = 'exercise-list';
            component.exercises.forEach((ex) => {
                const item = document.createElement('li');
                item.className = 'exercise-item';
                item.innerHTML = `<span class="exercise-name">${ex.name} ${ex.note ? `(${ex.note})` : ''}</span><span class="exercise-detail">${ex.value || ''}</span>`;
                list.appendChild(item);
                if (ex.rest && ex.rest > 0) {
                    const restItem = document.createElement('li');
                    restItem.className = 'exercise-item rest-item';
                    restItem.innerHTML = `<span class="exercise-name"><span class="material-icons">timer</span> Descanso Rápido</span><span class="exercise-detail">${ex.rest}s</span>`;
                    list.appendChild(restItem);
                }
            });
            if (component.rest && component.rest > 0 && component.sets > 1) {
                const mainRestItem = document.createElement('li');
                mainRestItem.className = 'exercise-item rest-item main-rest-item';
                mainRestItem.innerHTML = `<span class="exercise-name"><span class="material-icons">hourglass_empty</span> Descanso entre Séries</span><span class="exercise-detail">${component.rest}s</span>`;
                list.appendChild(mainRestItem);
            }
            card.appendChild(list);
            workoutDisplay.appendChild(card);
        });
        
        resetControlsToInitial();
    }

    function buildWorkoutQueue(dayKey) {
        const workout = workoutData[dayKey];
        workoutQueue = [];
        if (!workout || !workout.components) return;
        let exerciseIdCounter = 0;
        workout.components.forEach(component => {
            if (component.type === 'tabata_circuit') {
                for (let round = 0; round < component.rounds; round++) {
                    const exerciseForRound = component.exercises[round % component.exercises.length];
                    workoutQueue.push({ name: exerciseForRound.name, type: 'time', value: 20, setInfo: `(Round ${round + 1}/${component.rounds})`, id: `ex-${exerciseIdCounter++}` });
                    if (round < component.rounds - 1) {
                        workoutQueue.push({ name: 'Descanso Tabata', type: 'rest', value: 10 });
                    }
                }
            } else { 
                for (let set = 1; set <= component.sets; set++) {
                    component.exercises.forEach((exercise) => {
                        const step = { ...exercise, id: `ex-${exerciseIdCounter++}`, setInfo: `(Set ${set}/${component.sets})` };
                        workoutQueue.push(step);
                        if (exercise.rest) { workoutQueue.push({ type: 'rest', value: exercise.rest, name: 'Pausa Rápida'}); }
                    });
                    if (component.rest > 0 && set < component.sets) {
                        workoutQueue.push({ type: 'rest', value: component.rest, name: `Descanso do ${component.name}`});
                    }
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
            const newEntry = { date: new Date().toLocaleDateString('pt-BR'), dayName: workoutDayTitle.textContent, duration: formatTime(totalSeconds) };
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
        if (isPaused) { handlePauseResume(); }
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
        if (isPaused) { handlePauseResume(); }
    }

    function skipCurrentStep() {
        if (!isWorkoutRunning) return;
        timerOverlay.classList.add('hidden');
        nextStep();
    }
    
    function closeTimerAndPause() {
        if (!isWorkoutRunning) return;
        if (!isPaused) { handlePauseResume(); }
        timerOverlay.classList.add('hidden');
        nextExerciseBtn.classList.remove('hidden');
    }
    
    // FUNÇÕES DE CONTROLE CORRIGIDAS
    function resetControlsToInitial() {
        workoutControls.classList.remove('hidden');
        startButtonContainer.classList.remove('hidden');
        activeWorkoutView.classList.add('hidden');
        document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
    }

    function updateControlsForRunning() {
        startButtonContainer.classList.add('hidden');
        activeWorkoutView.classList.remove('hidden');
    }

    function updateCurrentExerciseUI(step) {
        document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
        currentExerciseNameEl.textContent = step.name;
        if (step.id) {
            const allItems = document.querySelectorAll('.exercise-item');
            const matchingItem = Array.from(allItems).find(item => {
                const nameSpan = item.querySelector('.exercise-name');
                return nameSpan && nameSpan.textContent.includes(step.name);
            });
            if(matchingItem) {
                matchingItem.classList.add('current');
                matchingItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // --- Event Listeners ---
    menuBtn.addEventListener('click', openSidenav);
    closeSidenavBtn.addEventListener('click', closeSidenav);
    sidenavOverlay.addEventListener('click', closeSidenav);
    const handleThemeClick = (e) => { e.preventDefault(); toggleTheme(); };
    const handleHistoryClick = (e) => { e.preventDefault(); openHistory(); closeSidenav(); };
    const handleSettingsClick = (e) => { e.preventDefault(); openSettings(); closeSidenav(); };
    menuThemeBtn.addEventListener('click', handleThemeClick);
    desktopMenuThemeBtn.addEventListener('click', handleThemeClick);
    menuHistoryBtn.addEventListener('click', handleHistoryClick);
    desktopMenuHistoryBtn.addEventListener('click', handleHistoryClick);
    menuSettingsBtn.addEventListener('click', handleSettingsClick);
    desktopMenuSettingsBtn.addEventListener('click', handleSettingsClick);

    daySelection.addEventListener('click', (e) => {
        if (e.target.classList.contains('day-btn')) displayWorkout(e.target.dataset.day);
    });
    startWorkoutBtn.addEventListener('click', startWorkout);
    pauseResumeBtn.addEventListener('click', handlePauseResume);
    nextExerciseBtn.addEventListener('click', nextStep);
    stopBtn.addEventListener('click', () => stopWorkout(true));
    closeHistoryBtn.addEventListener('click', closeHistory);
    closeSettingsBtn.addEventListener('click', closeSettings);
    pauseResumeTimerBtn.addEventListener('click', handlePauseResume);
    restartTimerBtn.addEventListener('click', restartCurrentTimer);
    exitWorkoutBtn.addEventListener('click', closeTimerAndPause);
    skipStepBtn.addEventListener('click', skipCurrentStep);
    historyList.addEventListener('click', (e) => {
        const deleteButton = e.target.closest('.delete-history-btn');
        if (deleteButton) deleteHistoryItem(parseInt(deleteButton.dataset.index, 10));
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
    loadTheme();
    loadHistory();
    loadActivePlan();
});