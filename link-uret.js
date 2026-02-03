const nameInput = document.getElementById('nameInput');
const fromInput = document.getElementById('fromInput');
const msgInput = document.getElementById('msgInput');
const linkOutput = document.getElementById('linkOutput');
const copyBtn = document.getElementById('copyBtn');

function buildLink() {
    const name = nameInput.value.trim();
    const from = fromInput.value.trim();
    const msg = msgInput.value.trim();

    const baseUrl = new URL('.', window.location.href);
    const finalUrl = new URL(baseUrl);

    finalUrl.searchParams.delete('name');
    finalUrl.searchParams.delete('from');
    finalUrl.searchParams.delete('msg');

    if (name) finalUrl.searchParams.set('name', name);
    if (from) finalUrl.searchParams.set('from', from);
    if (msg) finalUrl.searchParams.set('msg', msg);

    linkOutput.value = finalUrl.toString();
}

[nameInput, fromInput, msgInput].forEach((input) => {
    input.addEventListener('input', buildLink);
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

buildLink();
