const orderForm = document.getElementById('orderForm');
const fileHint = document.getElementById('fileHint');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutSummary = document.getElementById('checkoutSummary');
const cancelCheckout = document.getElementById('cancelCheckout');
const confirmCheckout = document.getElementById('confirmCheckout');
const checkoutToast = document.getElementById('checkoutToast');

const priceMap = {
    'Dede–Torun Buluşması': 349,
    'Anne ve Çocukluk Doğum Günü': 379,
    'Çocukluğunla Doğum Günü': 399,
    'Cumhuriyet Bayramı Kutlaması': 299,
    'Zamanı Geri Sar': 329,
    'Yanımda Kalsaydın': 349,
    'Gelecekteki Çocuğunuz': 429,
    'Anneler Günü Anısı': 359,
    'Babalar Günü Sürprizi': 359,
    'Sevgililer Günü Mesajı': 319
};

function formatPrice(value) {
    return `₺${value}`;
}

function closeModal() {
    checkoutModal.classList.remove('open');
    checkoutModal.setAttribute('aria-hidden', 'true');
}

function openModal() {
    checkoutModal.classList.add('open');
    checkoutModal.setAttribute('aria-hidden', 'false');
}

if (orderForm) {
    const fileInput = orderForm.querySelector('input[type="file"]');

    if (fileInput && fileHint) {
        fileInput.addEventListener('change', () => {
            const count = fileInput.files ? fileInput.files.length : 0;
            fileHint.textContent = count > 0 ? `${count} fotoğraf seçildi.` : 'Henüz fotoğraf seçilmedi.';
        });
    }

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const product = formData.get('product');
        const message = formData.get('message');
        const delivery = formData.get('delivery');
        const fullname = formData.get('fullname');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const photoCount = fileInput && fileInput.files ? fileInput.files.length : 0;
        const price = priceMap[product] || 0;

        checkoutSummary.innerHTML = `
            <div class="summary-row"><span>Ürün</span><strong>${product}</strong></div>
            <div class="summary-row"><span>Fotoğraf sayısı</span><strong>${photoCount} adet</strong></div>
            <div class="summary-row"><span>Videoda yazı</span><strong>${message}</strong></div>
            <div class="summary-row"><span>Teslim tarihi</span><strong>${delivery || 'Belirtilmedi'}</strong></div>
            <div class="summary-row"><span>Ad Soyad</span><strong>${fullname}</strong></div>
            <div class="summary-row"><span>Telefon</span><strong>${phone}</strong></div>
            <div class="summary-row"><span>E-posta</span><strong>${email}</strong></div>
            <div class="summary-total"><span>Toplam</span><strong>${formatPrice(price)}</strong></div>
        `;

        openModal();
    });
}

if (cancelCheckout) {
    cancelCheckout.addEventListener('click', closeModal);
}

if (checkoutModal) {
    checkoutModal.addEventListener('click', (event) => {
        if (event.target === checkoutModal) {
            closeModal();
        }
    });
}

if (confirmCheckout) {
    confirmCheckout.addEventListener('click', () => {
        closeModal();
        checkoutToast.classList.add('show');
        setTimeout(() => {
            checkoutToast.classList.remove('show');
        }, 2400);
        if (orderForm) {
            orderForm.reset();
            if (fileHint) fileHint.textContent = 'Henüz fotoğraf seçilmedi.';
        }
    });
}