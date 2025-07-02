const BeepSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
BeepSound.volume = 0.5;

export function playPrepBeep() {
    BeepSound.currentTime = 0;
    BeepSound.play().catch(error => console.error("Erro ao tocar o som de preparação:", error));
}

export function playGoBeep() {
    BeepSound.currentTime = 0;
    BeepSound.play().catch(error => console.error("Erro ao tocar o som de início:", error));
}