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

if (from) {
    fromEl.textContent = `Sevgiyle, ${from}`;
} else {
    fromEl.textContent = '';
}

if (message) {
    messageEl.textContent = message;
} else {
    messageEl.textContent = '';
}

// Sayfa elementleri
const questionPage = document.getElementById('questionPage');
const celebrationPage = document.getElementById('celebrationPage');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// NO butonuna kaçma mantığı
let escapeCount = 0;
const maxEscapes = 10; // 10 denemeden sonra NO butonu küçülmeye başlar

noBtn.addEventListener('mouseenter', function() {
    escapeButton();
});

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    escapeButton();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    escapeButton();
});

function escapeButton() {
    escapeCount++;
    
    // Container boyutlarını al
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    
    // Buton boyutlarını al
    const btnRect = noBtn.getBoundingClientRect();
    
    // Rastgele pozisyon hesapla (container içinde)
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    
    // Negatif değerleri önle
    randomX = Math.max(0, randomX);
    randomY = Math.max(0, randomY);
    
    // Butonu absolute konuma getir ve hareket ettir
    noBtn.classList.add('escaping');
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Her denemede butonu biraz küçült
    if (escapeCount > maxEscapes) {
        const scale = Math.max(0.3, 1 - (escapeCount - maxEscapes) * 0.05);
        noBtn.style.transform = `scale(${scale})`;
        
        // Çok küçüldüyse YES butonunu büyüt
        if (scale < 0.5) {
            yesBtn.style.transform = 'scale(1.2)';
            yesBtn.style.animation = 'pulse 0.5s infinite';
        }
    }
}

// YES butonuna tıklandığında
yesBtn.addEventListener('click', function() {
    celebrate();
    
    // Kutlama sayfasını göster
    questionPage.classList.add('hidden');
    celebrationPage.classList.remove('hidden');
    
    // Sayfayı en üste kaydır
    window.scrollTo(0, 0);
});

function celebrate() {
    // Basit bir kutlama efekti - daha gelişmiş yapılabilir
    document.body.style.animation = 'none';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 10);
}

// Sayfa yüklendiğinde animasyon
window.addEventListener('load', function() {
    // Başlangıç animasyonu
    setTimeout(() => {
        noBtn.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }, 100);
});

// Responsive için container yüksekliğini ayarla
function adjustContainerHeight() {
    const buttonsContainer = document.querySelector('.buttons');
    const windowHeight = window.innerHeight;
    const minHeight = 150;
    const maxHeight = Math.min(300, windowHeight * 0.4);
    
    buttonsContainer.style.minHeight = minHeight + 'px';
    buttonsContainer.style.maxHeight = maxHeight + 'px';
}

adjustContainerHeight();
window.addEventListener('resize', adjustContainerHeight);
