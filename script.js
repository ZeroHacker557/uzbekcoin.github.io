let clickCount = 0;
const maxClicks = 100;
let cooldown = false;

document.getElementById('coin').addEventListener('click', () => {
    if (cooldown) return;

    clickCount++;
    displayMessage('KOT');

    if (clickCount % 10 === 0) {
        displayImageAndSound();
    }

    if (clickCount >= maxClicks) {
        cooldown = true;
        setTimeout(() => {
            clickCount = 0;
            cooldown = false;
        }, 60000); // 1 minute cooldown
    }
});

function displayMessage(text) {
    const message = document.createElement('div');
    message.id = 'message';
    message.textContent = text;
    message.style.top = `${Math.random() * 80 + 10}%`;
    message.style.left = `${Math.random() * 80 + 10}%`;
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 1000); // message disappears after 1 second
}

function displayImageAndSound() {
    const image = document.createElement('img');
    image.src = 'bonus-image.png';
    image.className = 'centered-image';
    document.body.appendChild(image);

    const audio = new Audio('bonus-sound.mp3');
    audio.play();

    setTimeout(() => {
        image.remove();
    }, 1000); // image disappears after 1 second
}

document.getElementById('cash-out-button').addEventListener('click', () => {
    document.getElementById('cash-out-form').classList.toggle('hidden');
});

document.getElementById('submit-button').addEventListener('click', () => {
    const cardNumber = document.getElementById('card-number').value;
    if (cardNumber) {
        alert('Sizda mablag yetarli emas maksimal coinlar 1m bo\'lishi kerak!');
    }
});
