# Sevgilim Olur musun? 💕

Sevgililer Günü'ne özel interaktif dijital sürpriz projesi.

## 🚀 Özellikler

- ✅ İsme özel kişiselleştirme
- ✅ Eğlenceli "NO" butonu kaçma animasyonu
- ✅ Romantik kutlama sayfası
- ✅ WhatsApp sipariş entegrasyonu
- ✅ Tam responsive (mobil uyumlu)
- ✅ Modern ve şık tasarım

## 📱 Kullanım

### URL Parametresi ile İsim Ekleme:

```
https://sevgilimolurmusun.vercel.app?name=Ayşe
https://sevgilimolurmusun.vercel.app?name=Zeynep
https://sevgilimolurmusun.vercel.app?name=Elif
```

### Örnek Linkler:

- Ayşe için: `?name=Ayşe`
- Fatma için: `?name=Fatma`
- Merve için: `?name=Merve`

## 🌐 Vercel'e Deploy

### Yöntem 1: Vercel CLI (Hızlı)

```bash
# Vercel CLI'yi yükle (ilk seferlik)
npm i -g vercel

# Proje klasörüne git
cd sevgilimolurmusun

# Deploy et
vercel

# Production'a deploy
vercel --prod
```

### Yöntem 2: GitHub + Vercel (Önerilen)

1. GitHub'da yeni repo oluştur
2. Bu dosyaları repo'ya yükle:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/KULLANICI_ADI/sevgilimolurmusun.git
git push -u origin main
```
3. Vercel.com'a git
4. "Import Project" → GitHub repo'yu seç
5. Deploy!

### Yöntem 3: Drag & Drop

1. vercel.com'a git
2. "Add New Project"
3. Klasörü sürükle-bırak
4. Deploy!

## 💰 Fiyatlandırma

- Temel fiyat: **299 TL**
- WhatsApp: +90 533 021 0935

## 📊 Sipariş İşleyişi

1. Müşteri WhatsApp'tan yazar
2. Sevgilinin adını söyler
3. 299 TL ödeme yapar (İyzico/Havale)
4. Özel link gönderilir: `?name=İsim`
5. Müşteri linki sevgilisine atar

## 🎨 Özelleştirme

### Renkleri Değiştirme (style.css):

```css
/* Ana renk */
background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 50%, #ffd4e8 100%);

/* Buton rengi */
background: linear-gradient(135deg, #ff6b9d 0%, #e91e63 100%);
```

### Metinleri Değiştirme (index.html):

```html
<p class="main-question">Bu sevgililer gününde<br>Sevgilim olur musun? ❤️</p>
```

### WhatsApp Numarasını Değiştirme (index.html):

```html
<a href="https://wa.me/905330210935?text=...">
```

## 📈 Pazarlama Önerileri

### Instagram Story İçeriği:
```
1. "Sevgililer Günü'ne 11 gün kaldı! 💕"
2. Demo video (NO butonunun kaçması)
3. "Sadece 299 TL! DM'den sipariş ver"
4. "İsme özel hazırlanıyor! 🎁"
5. "Son günler! Kaçırma! ⏰"
```

### Hashtag'ler:
```
#sevgililergünü #sevgiliyesürpriz #dijitalsürpriz 
#14şubat #valentinesday #sevgililergünühediyesi
```

## 🔧 Teknik Detaylar

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- Framework yok (hafif ve hızlı)
- Vercel ile otomatik deploy
- Sınırsız kullanıcı desteği
- Mobil-first responsive design

## 📞 Destek

WhatsApp: +90 533 021 0935

---

Made with ❤️ for Valentine's Day 2026
