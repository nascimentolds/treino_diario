// js/modules/state.js

/**
 * @typedef {Object} WorkoutStep
 * @property {string} name
 * @property {'time' | 'reps' | 'rest'} type
 * @property {number|string} value
 * @property {string} [id]
 * @property {string} [setInfo]
 * @property {number} [rest]
 */

const state = {
    activePlanId: '',
    selectedDay: null,
    isWorkoutRunning: false,
    isPaused: false,
    workoutQueue: [],
    currentStepIndex: -1,
    workoutHistory: [],
    totalSeconds: 0,
    exerciseSecondsRemaining: 0,
    exerciseInitialDuration: 0,
    workoutStartTime: null,
    timers: {
        totalTimeInterval: null,
        exerciseTimerInterval: null,
    }
};

export function getState() {
    return { ...state };
}

export function setState(newState) {
    Object.assign(state, newState);
}

// Funções "setter" específicas para maior clareza e controle
export function setActivePlanId(planId) {
    state.activePlanId = planId;
}

export function setWorkoutHistory(history) {
    state.workoutHistory = history;
}

export function resetWorkoutState() {
    state.isWorkoutRunning = false;
    state.isPaused = false;
    state.currentStepIndex = -1;
    state.totalSeconds = 0;
    state.workoutQueue = [];
    if (state.timers.totalTimeInterval) clearInterval(state.timers.totalTimeInterval);
    if (state.timers.exerciseTimerInterval) clearInterval(state.timers.exerciseTimerInterval);
}