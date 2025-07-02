import { TODOS_OS_PLANOS } from '../data/planos.js';

export const DOM = {
    body: document.body,
    sidenav: document.getElementById('sidenav'),
    sidenavOverlay: document.getElementById('sidenav-overlay'),
    menuBtn: document.getElementById('menu-btn'),
    closeSidenavBtn: document.getElementById('close-sidenav-btn'),
    menuThemeBtn: document.getElementById('menu-theme-btn'),
    desktopMenuThemeBtn: document.getElementById('desktop-menu-theme-btn'),
    menuHistoryBtn: document.getElementById('menu-history-btn'),
    desktopMenuHistoryBtn: document.getElementById('desktop-menu-history-btn'),
    menuSettingsBtn: document.getElementById('menu-settings-btn'),
    desktopMenuSettingsBtn: document.getElementById('desktop-menu-settings-btn'),
    daySelection: document.getElementById('day-selection'),
    workoutDisplay: document.getElementById('workout-display'),
    workoutHeader: document.getElementById('workout-header'),
    planNameIndicator: document.getElementById('plan-name-indicator'),
    workoutDayTitle: document.getElementById('workout-day-title'),
    workoutControls: document.getElementById('workout-controls'),
    startButtonContainer: document.getElementById('start-button-container'),
    startWorkoutBtn: document.getElementById('start-workout-btn'),
    activeWorkoutView: document.getElementById('active-workout-view'),
    currentExerciseNameEl: document.getElementById('current-exercise-name'),
    totalTimeEl: document.getElementById('total-time'),
    pauseResumeBtn: document.getElementById('pause-resume-btn'),
    nextExerciseBtn: document.getElementById('next-exercise-btn'),
    stopBtn: document.getElementById('stop-btn'),
    historyOverlay: document.getElementById('history-overlay'),
    closeHistoryBtn: document.getElementById('close-history-btn'),
    historyList: document.getElementById('history-list'),
    settingsOverlay: document.getElementById('settings-overlay'),
    closeSettingsBtn: document.getElementById('close-settings-btn'),
    planList: document.getElementById('plan-list'),
    timerOverlay: document.getElementById('timer-overlay'),
    timerContent: document.querySelector('.timer-content'),
    timerInstruction: document.getElementById('timer-instruction'),
    timerExerciseName: document.getElementById('timer-exercise-name'),
    timerClock: document.getElementById('timer-clock'),
    progressRing: document.getElementById('progress-ring'),
    pauseIndicator: document.getElementById('pause-indicator'),
    pauseResumeTimerBtn: document.getElementById('pause-resume-timer-btn'),
    restartTimerBtn: document.getElementById('restart-timer-btn'),
    exitWorkoutBtn: document.getElementById('exit-workout-btn'),
    skipStepBtn: document.getElementById('skip-step-btn'),
    nextExerciseToast: document.getElementById('next-exercise-toast'),
    toastExerciseName: document.getElementById('toast-exercise-name'),
    demoModalOverlay: document.getElementById('demo-modal-overlay'),
    closeDemoModalBtn: document.getElementById('close-demo-modal-btn'),
    demoModalTitle: document.getElementById('demo-modal-title'),
    demoModalGif: document.getElementById('demo-modal-gif'),
};

export function showNextExerciseToast(exerciseName) {
    if (DOM.nextExerciseToast) {
        DOM.toastExerciseName.textContent = exerciseName;
        DOM.nextExerciseToast.classList.add('visible');
    }
}

export function hideNextExerciseToast() {
    if (DOM.nextExerciseToast) {
        DOM.nextExerciseToast.classList.remove('visible');
    }
}

export function openDemoModal(title, gifUrl) {
    DOM.demoModalTitle.textContent = title;
    DOM.demoModalGif.src = gifUrl;
    DOM.demoModalOverlay.classList.remove('hidden');
}

export function closeDemoModal() {
    DOM.demoModalOverlay.classList.add('hidden');
}

export function setTimerOverlayVisible(visible) {
    DOM.timerOverlay.classList.toggle('hidden', !visible);
}

function setTimerAppearance(mode, instruction) {
    DOM.timerContent.classList.toggle('prepare', mode === 'prepare');
    DOM.timerInstruction.textContent = instruction;
}

function updateProgressRing(progress) {
    const ring = DOM.progressRing;
    const radius = ring.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - progress * circumference;
    ring.style.strokeDashoffset = offset;
}

export function setupTimerForPreparation(step, prepTime) {
    setTimerAppearance('prepare', 'PREPARE-SE');
    DOM.timerExerciseName.textContent = step.name;
    DOM.timerClock.textContent = prepTime;
    updateProgressRing(1);
    setTimerOverlayVisible(true);
}

export function setupTimerForExecution(step) {
    const instruction = step.type === 'rest' ? 'DESCANSO' : 'EXERCÍCIO';
    setTimerAppearance('execute', instruction);
}

export function updateTimerDisplay(seconds, initialDuration) {
    DOM.timerClock.textContent = formatTime(seconds);
    const progress = initialDuration > 0 ? (seconds / initialDuration) : 0;
    updateProgressRing(progress);
}

export function updatePreparationTimer(seconds, totalSeconds) {
    DOM.timerClock.textContent = seconds;
    const progress = totalSeconds > 0 ? (seconds / totalSeconds) : 0;
    updateProgressRing(progress);
}

export function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

export function applyTheme(theme) {
    const iconName = theme === 'dark' ? 'light_mode' : 'dark_mode';
    DOM.body.classList.toggle('dark-theme', theme === 'dark');
    if (DOM.menuThemeBtn) DOM.menuThemeBtn.querySelector('.material-icons').textContent = iconName;
    if (DOM.desktopMenuThemeBtn) DOM.desktopMenuThemeBtn.querySelector('.material-icons').textContent = iconName;
}

export function renderWorkout(activePlanId, dayKey) {
    const plan = TODOS_OS_PLANOS[activePlanId];
    if (!plan) {
        console.error(`Plano com ID "${activePlanId}" não encontrado.`);
        return;
    }
    const workout = plan.dias[dayKey];

    DOM.planNameIndicator.textContent = plan.nome;
    DOM.workoutHeader.classList.remove('hidden');
    DOM.workoutDisplay.innerHTML = '';
    
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.day === dayKey);
    });

    if (!workout || !workout.components) {
        DOM.workoutDayTitle.textContent = "Dia de Descanso";
        DOM.workoutDisplay.innerHTML = `<div class="welcome-message"><span class="material-icons welcome-icon">self_improvement</span><h2>Aproveite para descansar!</h2><p>O descanso é fundamental.</p></div>`;
        DOM.workoutControls.classList.add('hidden');
        return;
    }

    DOM.workoutDayTitle.textContent = workout.title;
    workout.components.forEach(component => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        let titleText = component.name;
        if(component.sets > 1) titleText += ` (${component.sets}x)`;
        else if(component.rounds) titleText += ` (${component.rounds} Rounds)`;
        
        const exerciseList = component.exercises.map(ex => {
            const demoButton = ex.demoGif
                ? `<button class="header-btn demo-btn" title="Ver demonstração" data-title="${ex.name}" data-gif-url="${ex.demoGif}">
                       <span class="material-icons" style="font-size: 24px;">smart_display</span>
                   </button>`
                : '<div style="width: 44px; height: 44px;"></div>';

            let itemHTML = `<li class="exercise-item">
                                <div style="flex-grow: 1;">
                                    <span class="exercise-name">${ex.name} ${ex.note ? `(${ex.note})` : ''}</span>
                                    <span class="exercise-detail" style="display: block;">${ex.value || ''}</span>
                                </div>
                                ${demoButton}
                            </li>`;

            if (ex.rest && ex.rest > 0) {
                itemHTML += `<li class="exercise-item rest-item">
                                <span class="exercise-name"><span class="material-icons">timer</span> Descanso Rápido</span>
                                <span class="exercise-detail">${ex.rest}s</span>
                            </li>`;
            }
            return itemHTML;
        }).join('');

        let mainRestHTML = '';
        if (component.rest > 0 && component.sets > 1) {
            mainRestHTML = `<li class="exercise-item rest-item main-rest-item">
                                <span class="exercise-name"><span class="material-icons">hourglass_empty</span> Descanso entre Séries</span>
                                <span class="exercise-detail">${component.rest}s</span>
                            </li>`;
        }
        
        card.innerHTML = `<h3>${titleText}</h3><ul class="exercise-list">${exerciseList}${mainRestHTML}</ul>`;
        DOM.workoutDisplay.appendChild(card);
    });

    resetControlsToInitial();
}

export function renderPlanSelection(activePlanId) {
    DOM.planList.innerHTML = Object.values(TODOS_OS_PLANOS).map(plan => `
        <li class="plan-item ${plan.id === activePlanId ? 'active' : ''}" data-plan-id="${plan.id}">
            <h3>${plan.nome}</h3>
            <p>${plan.descricao}</p>
        </li>
    `).join('');
}

export function renderHistory(history) {
    if (history.length === 0) {
        DOM.historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nenhum treino registrado.</p>';
        return;
    }
    DOM.historyList.innerHTML = history.map((item, index) => `
        <div class="history-card">
            <button class="delete-history-btn" data-index="${index}"><span class="material-icons">delete_forever</span></button>
            <div class="history-card-header">
                <strong>${item.workoutTitle}</strong>
                <span>${item.planName}</span>
            </div>
            <div class="history-card-details">
                <div class="detail-item"><span>Data</span><strong>${item.date}</strong></div>
                <div class="detail-item"><span>Duração</span><strong>${item.duration}</strong></div>
                <div class="detail-item"><span>Início</span><strong>${item.startTime}</strong></div>
                <div class="detail-item"><span>Término</span><strong>${item.endTime}</strong></div>
            </div>
        </div>
    `).join('');
}

export function updateCurrentExerciseUI(step) {
    document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
    DOM.currentExerciseNameEl.textContent = step.name;

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

export function togglePauseUI(isPaused) {
    const icon = isPaused ? 'play_arrow' : 'pause';
    DOM.pauseResumeBtn.querySelector('.material-icons').textContent = icon;
    DOM.pauseResumeTimerBtn.querySelector('.material-icons').textContent = icon;
    DOM.pauseIndicator.classList.toggle('hidden', !isPaused);
}

export function resetControlsToInitial() {
    DOM.workoutControls.classList.remove('hidden');
    DOM.startButtonContainer.classList.remove('hidden');
    DOM.activeWorkoutView.classList.add('hidden');
    document.querySelectorAll('.exercise-item.current').forEach(el => el.classList.remove('current'));
}

export function updateControlsForRunning() {
    DOM.startButtonContainer.classList.add('hidden');
    DOM.activeWorkoutView.classList.remove('hidden');
    DOM.workoutControls.classList.remove('hidden');
}

export function toggleOverlay(overlay, show) {
    overlay.classList.toggle('active', show);
}

export function toggleSidenav(show) {
    DOM.sidenav.classList.toggle('active', show);
    DOM.sidenavOverlay.classList.toggle('active', show);
}