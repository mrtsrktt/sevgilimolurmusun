// URL'den parametreleri al
const urlParams = new URLSearchParams(window.location.search);
const name = (urlParams.get('name') || 'Sevgilim').trim();
const from = (urlParams.get('from') || '').trim();
const message = (urlParams.get('msg') || '').trim();

// İsmi sayfaya yerleştir
const nameEl = document.getElementById('name');
const fromEl = document.getElementById('fromText');
const messageEl = document.getElementById('customMessage');

nameEl.textContent = name;
fromEl.textContent = from ? `Sevgiyle, ${from}` : '';
messageEl.textContent = message || '';

// Sayfa elementleri
const questionPage = document.getElementById('questionPage');
const celebrationPage = document.getElementById('celebrationPage');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsBox = document.getElementById('buttonsBox');
const fireworksLayer = document.getElementById('fireworksLayer');
const confettiLayer = document.getElementById('confettiLayer');

let fireworksTimer = null;
let confettiTimer = null;
let lastPos = { x: null, y: null };

const noPhrases = [
    'HAYIR (Yakalamaya Çalış!)',
    'HAYIR (Bence deneme 😄)',
    'HAYIR (Nereye dokunuyorsun?)',
    'HAYIR (Kaçıyorum!)',
    'HAYIR (Acele et!)',
    'HAYIR (Beni yakalayamazsın)',
    'HAYIR (Hadi bakalım)',
    'HAYIR (Çok yaklaştın!)',
    'HAYIR (Şaka şaka 😅)',
    'HAYIR (Yine mi?)',
    'HAYIR (Üzgünüm 😜)',
    'HAYIR (Kaçış modunda)'
];

// NO butonuna kaçma mantığı
let escapeCount = 0;
const maxEscapes = 10;

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function getSafePosition(containerRect, btnRect, avoidPoints) {
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    let best = { x: Math.random() * maxX, y: Math.random() * maxY, score: -Infinity };

    for (let i = 0; i < 18; i++) {
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        let minDist = Infinity;

        avoidPoints.forEach((p) => {
            const dx = x - p.x;
            const dy = y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            minDist = Math.min(minDist, dist);
        });

        let lastDist = 0;
        if (lastPos.x !== null && lastPos.y !== null) {
            const dx = x - lastPos.x;
            const dy = y - lastPos.y;
            lastDist = Math.sqrt(dx * dx + dy * dy);
        }

        const score = minDist + lastDist * 0.6;

        if (score > best.score) {
            best = { x, y, score };
        }
    }

    return { x: clamp(best.x, 0, maxX), y: clamp(best.y, 0, maxY) };
}

function escapeButton(pointerX, pointerY) {
    escapeCount++;

    const containerRect = buttonsBox.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    const avoidPoints = [
        {
            x: yesRect.left - containerRect.left + yesRect.width / 2,
            y: yesRect.top - containerRect.top + yesRect.height / 2
        }
    ];

    if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        avoidPoints.push({
            x: pointerX - containerRect.left,
            y: pointerY - containerRect.top
        });
    }

    const pos = getSafePosition(containerRect, btnRect, avoidPoints);
    lastPos = { x: pos.x, y: pos.y };

    const phrase = noPhrases[escapeCount % noPhrases.length];
    noBtn.textContent = phrase;

    noBtn.classList.add('escaping');
    noBtn.style.left = `${pos.x}px`;
    noBtn.style.top = `${pos.y}px`;
    const tilt = (Math.random() * 14 - 7).toFixed(1);
    noBtn.style.transform = `rotate(${tilt}deg)`;

    if (escapeCount > maxEscapes) {
        const scale = Math.max(0.3, 1 - (escapeCount - maxEscapes) * 0.05);
        noBtn.style.transform = `rotate(${tilt}deg) scale(${scale})`;

        if (scale < 0.5) {
            yesBtn.style.transform = 'scale(1.15)';
            yesBtn.style.boxShadow = '0 18px 36px rgba(233, 30, 99, 0.35)';
        }
    }
}

noBtn.addEventListener('mouseenter', function() {
    escapeButton();
});

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    const touch = e.touches[0];
    escapeButton(touch.clientX, touch.clientY);
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    escapeButton();
});

buttonsBox.addEventListener('pointermove', function(e) {
    const btnRect = noBtn.getBoundingClientRect();
    const dx = e.clientX - (btnRect.left + btnRect.width / 2);
    const dy = e.clientY - (btnRect.top + btnRect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {
        escapeButton(e.clientX, e.clientY);
    }
});

// YES butonuna tıklandığında
yesBtn.addEventListener('click', function() {
    questionPage.classList.add('hidden');
    celebrationPage.classList.remove('hidden');
    window.scrollTo(0, 0);
    startFireworks();
    startConfetti();
});

// Sayfa yüklendiğinde animasyon
window.addEventListener('load', function() {
    setTimeout(() => {
        noBtn.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 100);
});

// Responsive için container yüksekliğini ayarla
function adjustContainerHeight() {
    const windowHeight = window.innerHeight;
    const minHeight = 150;
    const maxHeight = Math.min(360, windowHeight * 0.55);

    buttonsBox.style.minHeight = `${minHeight}px`;
    buttonsBox.style.maxHeight = `${maxHeight}px`;
}

adjustContainerHeight();
window.addEventListener('resize', adjustContainerHeight);

function createFirework(side) {
    if (!fireworksLayer) return;

    const firework = document.createElement('div');
    firework.className = `firework ${side}`;
    const top = 40 + Math.random() * 220;
    firework.style.top = `${top}px`;

    const offset = 4 + Math.random() * 18;
    if (side === 'left') {
        firework.style.left = `${offset}%`;
    } else {
        firework.style.right = `${offset}%`;
    }

    const sparkCount = 16 + Math.floor(Math.random() * 8);
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = `spark ${i % 2 === 0 ? 'alt' : ''}`.trim();
        const angle = Math.random() * Math.PI * 2;
        const distance = 70 + Math.random() * 70;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        spark.style.setProperty('--x', `${x}px`);
        spark.style.setProperty('--y', `${y}px`);
        firework.appendChild(spark);
    }

    fireworksLayer.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 1300);
}

function startFireworks() {
    if (fireworksTimer) return;
    fireworksTimer = setInterval(() => {
        createFirework('left');
        createFirework('right');
    }, 550);
}

function createConfettiPiece() {
    if (!confettiLayer) return;
    const confetti = document.createElement('div');
    const size = 6 + Math.random() * 10;
    confetti.className = `confetti ${Math.random() > 0.7 ? 'circle' : ''}`.trim();
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size + 4}px`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = ['#ff4fa1', '#ffd166', '#ff8fab', '#c7f9cc', '#ffb3d9', '#ff6b6b'][Math.floor(Math.random() * 6)];
    confetti.style.animationDuration = `${2 + Math.random() * 1.2}s, ${0.8 + Math.random() * 0.8}s`;
    confettiLayer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2800);
}

function startConfetti() {
    if (confettiTimer) return;
    confettiTimer = setInterval(() => {
        for (let i = 0; i < 12; i++) {
            createConfettiPiece();
        }
    }, 450);
}
