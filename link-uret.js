const nameInput = document.getElementById('nameInput');
const fromInput = document.getElementById('fromInput');
const msgInput = document.getElementById('msgInput');
const linkOutput = document.getElementById('linkOutput');
const shortOutput = document.getElementById('shortOutput');
const copyBtn = document.getElementById('copyBtn');
const shortBtn = document.getElementById('shortBtn');
const shortHint = document.getElementById('shortHint');
const generateBtn = document.getElementById('generateBtn');
const addListBtn = document.getElementById('addListBtn');
const exportBtn = document.getElementById('exportBtn');
const clearBtn = document.getElementById('clearBtn');
const listBody = document.getElementById('listBody');

const STORAGE_KEY = 'solm_orders';

function getBaseUrl() {
    const base = new URL('./', window.location.href);
    return base.toString();
}

function buildLink() {
    const name = nameInput.value.trim();
    const from = fromInput.value.trim();
    const msg = msgInput.value.trim();

    const finalUrl = new URL(getBaseUrl());

    if (name) finalUrl.searchParams.set('name', name);
    if (from) finalUrl.searchParams.set('from', from);
    if (msg) finalUrl.searchParams.set('msg', msg);

    linkOutput.value = finalUrl.toString();
    shortOutput.value = '';
}

[nameInput, fromInput, msgInput].forEach((input) => {
    input.addEventListener('input', buildLink);
});

generateBtn.addEventListener('click', () => {
    buildLink();
    linkOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

copyBtn.addEventListener('click', async () => {
    linkOutput.select();
    linkOutput.setSelectionRange(0, linkOutput.value.length);

    try {
        await navigator.clipboard.writeText(linkOutput.value);
        copyBtn.textContent = 'Kopyalandı';
        setTimeout(() => {
            copyBtn.textContent = 'Kopyala';
        }, 1200);
    } catch (err) {
        document.execCommand('copy');
    }
});

shortBtn.addEventListener('click', async () => {
    const longUrl = linkOutput.value.trim();
    if (!longUrl) return;

    shortBtn.textContent = 'Üretiliyor...';

    try {
        const endpoint = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`;
        const res = await fetch(endpoint, { method: 'GET' });
        if (!res.ok) throw new Error('is.gd error');
        const data = await res.json();
        if (!data.shorturl) throw new Error('no shorturl');
        shortOutput.value = data.shorturl;
        shortHint.textContent = 'Kısa link hazır.';
    } catch (err) {
        shortHint.textContent = 'Kısa link otomatik üretilemedi. Yeni sekmede açılıyor.';
        window.open(`https://is.gd/create.php?url=${encodeURIComponent(longUrl)}`, '_blank');
    } finally {
        shortBtn.textContent = 'Kısa Link';
    }
});

function loadOrders() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch (err) {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function renderOrders() {
    const orders = loadOrders();
    listBody.innerHTML = '';

    if (orders.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="6">Henüz kayıt yok.</td>';
        listBody.appendChild(row);
        return;
    }

    orders.forEach((order) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="tag">${order.date}</span></td>
            <td>${order.name || '-'}</td>
            <td>${order.from || '-'}</td>
            <td>${order.msg || '-'}</td>
            <td><button class="mini-btn" data-action="copy" data-id="${order.id}">Kopyala</button></td>
            <td><button class="mini-btn" data-action="remove" data-id="${order.id}">Sil</button></td>
        `;
        listBody.appendChild(row);
    });
}

addListBtn.addEventListener('click', () => {
    const link = linkOutput.value.trim();
    if (!link) return;

    const orders = loadOrders();
    const now = new Date();
    const date = now.toLocaleString('tr-TR');

    orders.unshift({
        id: `${now.getTime()}`,
        name: nameInput.value.trim(),
        from: fromInput.value.trim(),
        msg: msgInput.value.trim(),
        link,
        date
    });

    saveOrders(orders);
    renderOrders();
});

listBody.addEventListener('click', async (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;

    const orders = loadOrders();
    const order = orders.find((o) => o.id === id);
    if (!order) return;

    if (action === 'copy') {
        try {
            await navigator.clipboard.writeText(order.link);
            target.textContent = 'Kopyalandı';
            setTimeout(() => {
                target.textContent = 'Kopyala';
            }, 1000);
        } catch (err) {
            const temp = document.createElement('input');
            temp.value = order.link;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
        }
    }

    if (action === 'remove') {
        const updated = orders.filter((o) => o.id !== id);
        saveOrders(updated);
        renderOrders();
    }
});

exportBtn.addEventListener('click', () => {
    const orders = loadOrders();
    if (orders.length === 0) return;

    const header = ['tarih', 'isim', 'gonderen', 'mesaj', 'link'];
    const rows = orders.map((o) => [
        o.date,
        o.name || '',
        o.from || '',
        o.msg || '',
        o.link || ''
    ]);

    const csv = [header, ...rows]
        .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sevgilimolurmusun-siparisler.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});

clearBtn.addEventListener('click', () => {
    saveOrders([]);
    renderOrders();
});

buildLink();
renderOrders();
