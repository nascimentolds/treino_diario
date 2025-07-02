// js/modules/storage.js

const THEME_KEY = 'theme';
const HISTORY_KEY = 'workoutHistory';
const ACTIVE_PLAN_KEY = 'activePlanId';

// --- Theme ---
export function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
}

// --- History ---
export function saveHistory(history) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function loadHistory() {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
}

// --- Active Plan ---
export function saveActivePlan(planId) {
    localStorage.setItem(ACTIVE_PLAN_KEY, planId);
}

export function loadActivePlan(defaultPlanId) {
    return localStorage.getItem(ACTIVE_PLAN_KEY) || defaultPlanId;
}