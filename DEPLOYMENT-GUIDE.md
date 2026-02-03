# 🚀 VERCEL'E DEPLOY ETME REHBERİ

## ⚡ EN HIZLI YÖNTEM: Vercel CLI

### 1. Vercel CLI'yi Yükle (İlk Seferlik)
```bash
npm i -g vercel
```

### 2. Vercel'e Giriş Yap
```bash
vercel login
```
- Email adresini gir
- Email'den onay linkine tıkla

### 3. Proje Klasörüne Git
```bash
cd sevgilimolurmusun
```

### 4. Deploy Et!
```bash
vercel
```
- Enter tuşuna bas (her soru için)
- Deploy linki gelecek!

### 5. Production'a Deploy
```bash
vercel --prod
```

**✅ BİTTİ! Link hazır!**

---

## 🌐 ALTERNATİF: GitHub ile Deploy (Daha Profesyonel)

### Adım 1: GitHub'da Repo Oluştur
1. github.com'a git
2. "New repository" tıkla
3. İsim: `sevgilimolurmusun`
4. "Create repository"

### Adım 2: Dosyaları GitHub'a Yükle
```bash
cd sevgilimolurmusun
git init
git add .
git commit -m "Sevgililer Günü projesi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/sevgilimolurmusun.git
git push -u origin main
```

### Adım 3: Vercel'e Bağla
1. vercel.com/login → Giriş yap
2. "Add New Project"
3. "Import Git Repository"
4. GitHub repo'nu seç
5. "Deploy"

**✅ Otomatik deploy aktif! Her git push otomatik deploy olur.**

---

## 📱 EN KOLAY: Drag & Drop

### Basit Yöntem:
1. vercel.com'a git
2. "Add New Project"
3. `sevgilimolurmusun` klasörünü sürükle-bırak
4. Deploy!

**✅ 30 saniyede biter!**

---

## 🎯 DEPLOY SONRASI

### Link Aldın! Şimdi Ne Yapmalısın?

1. **Test Et:**
   ```
   https://sevgilimolurmusun.vercel.app
   https://sevgilimolurmusun.vercel.app?name=Ayşe
   https://sevgilimolurmusun.vercel.app?name=Zeynep
   ```

2. **Custom Domain Ekle (Opsiyonel):**
   - Vercel panelinde: Settings → Domains
   - Kendi domain'ini ekleyebilirsin

3. **İlk Paylaşımı Yap:**
   - Instagram Story
   - WhatsApp Status
   - TikTok video

---

## 💡 SIPARISSLERI NASIL YÖNETECEKSIN?

### Manuel Yöntem (İlk Günler):
```
1. Müşteri WhatsApp'tan yazar: "Adı Ayşe"
2. Sen link oluşturursun: ...?name=Ayşe
3. İyzico'dan ödeme linki gönderirsin
4. Ödeme gelince → Özel linki gönderirsin
```

### Link Oluşturma Örnekleri:
```
Ayşe için:
https://sevgilimolurmusun.vercel.app?name=Ayşe

Zeynep için:
https://sevgilimolurmusun.vercel.app?name=Zeynep

Mehmet için:
https://sevgilimolurmusun.vercel.app?name=Mehmet
```

---

## 📊 PAZARLAMA PLANI

### İlk Gün (Bugün):
- ✅ Deploy yap
- ✅ Test et
- ✅ Demo video çek
- ✅ İlk Instagram story paylaş

### İkinci Gün:
- ✅ 5 story paylaş
- ✅ WhatsApp status
- ✅ TikTok video
- ✅ İyzico hesabını aktifleştir

### Üçüncü Gün:
- ✅ İlk siparişleri topla
- ✅ Müşteri yorumları paylaş
- ✅ Reklam ver (opsiyonel)

---

## 🎨 ÖZELLEŞTİRME

### Renkleri Değiştirmek İstersen:
`style.css` dosyasını düzenle:
```css
/* Arka plan rengi */
background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 50%, #ffd4e8 100%);

/* Ana renk */
color: #e91e63;
```

### Metinleri Değiştirmek İstersen:
`index.html` dosyasını düzenle:
```html
<p class="main-question">
  Bu sevgililer gününde<br>
  Sevgilim olur musun? ❤️
</p>
```

Değişiklik yaptıktan sonra:
```bash
git add .
git commit -m "Renkleri değiştirdim"
git push
```
→ Otomatik deploy olur!

---

## 🆘 SORUN GİDERME

### "Deploy Failed" Hatası:
```bash
# Dosyaları kontrol et
ls -la

# Tekrar dene
vercel --prod
```

### WhatsApp Butonu Çalışmıyor:
- Telefon numarasını kontrol et: `+905330210935`
- URL encode edilmiş mi?

### Sayfa Yüklenmiyor:
- Vercel dashboard'dan "Deployments" kontrol et
- Son deploy başarılı mı?

---

## 📞 DESTEK

Sorun yaşarsan:
- Vercel documentation: docs.vercel.com
- WhatsApp: +90 533 021 0935

---

## 🎯 SON KONTROL LİSTESİ

Deployment öncesi:
- ✅ Tüm dosyalar hazır
- ✅ WhatsApp numarası doğru
- ✅ Fiyat doğru (299 TL)
- ✅ Vercel hesabı açık

Deployment sonrası:
- ✅ Link çalışıyor
- ✅ İsim parametresi çalışıyor
- ✅ NO butonu kaçıyor
- ✅ YES butonu kutlama gösteriyor
- ✅ WhatsApp butonu açılıyor
- ✅ Mobilde test edildi

---

**HAZIRSIN! İyi satışlar! 💰💕**
