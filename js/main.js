import { TODOS_OS_PLANOS } from './data/planos.js';
import * as state from './modules/state.js';
import * as storage from './modules/storage.js';
import * as ui from './modules/ui.js';
import * as workout from './modules/workoutService.js';

function handleThemeClick(e) {
    e.preventDefault();
    const currentTheme = ui.DOM.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    storage.saveTheme(newTheme);
    ui.applyTheme(newTheme);
}

function handleHistoryClick(e) {
    e.preventDefault();
    ui.renderHistory(state.getState().workoutHistory);
    ui.toggleOverlay(ui.DOM.historyOverlay, true);
    ui.toggleSidenav(false);
}

function handleSettingsClick(e) {
    e.preventDefault();
    ui.renderPlanSelection(state.getState().activePlanId);
    ui.toggleOverlay(ui.DOM.settingsOverlay, true);
    ui.toggleSidenav(false);
}

function handleDaySelection(e) {
    if (e.target.classList.contains('day-btn')) {
        workout.selectDay(e.target.dataset.day);
    }
}

function handlePlanSelection(e) {
    const planItem = e.target.closest('.plan-item');
    if (planItem) {
        const newPlanId = planItem.dataset.planId;
        state.setActivePlanId(newPlanId);
        storage.saveActivePlan(newPlanId);
        workout.selectDay(state.getState().selectedDay);
        ui.toggleOverlay(ui.DOM.settingsOverlay, false);
    }
}

function handleDeleteHistoryItem(e) {
    const deleteButton = e.target.closest('.delete-history-btn');
    if (deleteButton) {
        const index = parseInt(deleteButton.dataset.index, 10);
        if (confirm('Tem certeza que deseja apagar este registro?')) {
            const currentHistory = state.getState().workoutHistory;
            const updatedHistory = currentHistory.filter((_, i) => i !== index);
            state.setWorkoutHistory(updatedHistory);
            storage.saveHistory(updatedHistory);
            ui.renderHistory(updatedHistory);
        }
    }
}

function getInitialDay() {
    const dayIndex = new Date().getDay();
    const dayMap = ['segunda', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'segunda'];
    return dayMap[dayIndex];
}

function addEventListeners() {
    ui.DOM.menuBtn.addEventListener('click', () => ui.toggleSidenav(true));
    ui.DOM.closeSidenavBtn.addEventListener('click', () => ui.toggleSidenav(false));
    ui.DOM.sidenavOverlay.addEventListener('click', () => ui.toggleSidenav(false));
    
    ui.DOM.menuThemeBtn.addEventListener('click', handleThemeClick);
    ui.DOM.desktopMenuThemeBtn.addEventListener('click', handleThemeClick);
    ui.DOM.menuHistoryBtn.addEventListener('click', handleHistoryClick);
    ui.DOM.desktopMenuHistoryBtn.addEventListener('click', handleHistoryClick);
    ui.DOM.menuSettingsBtn.addEventListener('click', handleSettingsClick);
    ui.DOM.desktopMenuSettingsBtn.addEventListener('click', handleSettingsClick);

    ui.DOM.daySelection.addEventListener('click', handleDaySelection);
    ui.DOM.planList.addEventListener('click', handlePlanSelection);

    ui.DOM.startWorkoutBtn.addEventListener('click', workout.startWorkout);
    ui.DOM.pauseResumeBtn.addEventListener('click', workout.togglePause);
    ui.DOM.nextExerciseBtn.addEventListener('click', workout.nextStep);
    ui.DOM.stopBtn.addEventListener('click', () => workout.stopWorkout(true));
    
    ui.DOM.pauseResumeTimerBtn.addEventListener('click', workout.togglePause);
    ui.DOM.restartTimerBtn.addEventListener('click', workout.restartCurrentTimer);
    ui.DOM.skipStepBtn.addEventListener('click', workout.skipCurrentStep);
    ui.DOM.exitWorkoutBtn.addEventListener('click', workout.exitTimedStepView);

    ui.DOM.closeHistoryBtn.addEventListener('click', () => ui.toggleOverlay(ui.DOM.historyOverlay, false));
    ui.DOM.closeSettingsBtn.addEventListener('click', () => ui.toggleOverlay(ui.DOM.settingsOverlay, false));
    ui.DOM.historyList.addEventListener('click', handleDeleteHistoryItem);

    ui.DOM.closeDemoModalBtn.addEventListener('click', ui.closeDemoModal);
    ui.DOM.demoModalOverlay.addEventListener('click', (e) => {
        if (e.target === ui.DOM.demoModalOverlay) {
            ui.closeDemoModal();
        }
    });

    ui.DOM.workoutDisplay.addEventListener('click', (e) => {
        const demoButton = e.target.closest('.demo-btn');
        if (demoButton) {
            const title = demoButton.dataset.title;
            const gifUrl = demoButton.dataset.gifUrl;
            ui.openDemoModal(title, gifUrl);
        }
    });
}

function init() {
    const savedTheme = storage.loadTheme();
    const savedHistory = storage.loadHistory();
    const defaultPlanId = Object.keys(TODOS_OS_PLANOS)[0];
    const savedPlanId = storage.loadActivePlan(defaultPlanId);
    
    state.setActivePlanId(savedPlanId);
    state.setWorkoutHistory(savedHistory);
    state.setState({ selectedDay: getInitialDay() });

    ui.applyTheme(savedTheme);
    workout.selectDay(state.getState().selectedDay);

    addEventListeners();
}

document.addEventListener('DOMContentLoaded', init);