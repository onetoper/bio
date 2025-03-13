const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

// Воспроизведение/пауза
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
    }
});

// Обновление полосы прогресса
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
});

// Перемотка
seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Отображение общей длительности
audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
});

// Форматирование времени (минуты:секунды)
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}