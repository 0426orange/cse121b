const targetDateInput = document.getElementById('target-date');
const startButton = document.getElementById('start-timer');
const countdownDisplay = document.getElementById('countdown');

let countdownInterval;

startButton.addEventListener('click', () => {
    const targetDate = new Date(targetDateInput.value).getTime();

    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    countdownInterval = setInterval(updateCountdown, 1000, targetDate);
    updateCountdown(targetDate);
});

function updateCountdown(targetDate) {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = 'Event has started!';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
