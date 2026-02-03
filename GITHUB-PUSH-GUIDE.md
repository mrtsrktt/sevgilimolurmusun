# 🚀 GITHUB'A YÜKLEME TALİMATLARI

## ✅ Git Hazır! Şimdi GitHub'a Yükle

### ADIM 1: GitHub'da Yeni Repo Oluştur

1. https://github.com/mrtsrktt sayfana git
2. Sağ üstte **"New"** (veya **"+"**) butonuna tıkla
3. Repository ayarları:
   ```
   Repository name: valentine-surprise-2026
   Description: Sevgililer Günü Dijital Sürpriz 💕
   Public ✅ (ya da Private)
   ❌ Initialize this repository with a README seçme!
   ```
4. **"Create repository"** tıkla

---

### ADIM 2: Terminal'de Bu Komutları Çalıştır

GitHub repo'yu oluşturduktan sonra:

```bash
cd sevgilimolurmusun

git remote add origin https://github.com/mrtsrktt/valentine-surprise-2026.git

git push -u origin main
```

**NOT:** GitHub şifre istemez artık, **Personal Access Token** gerekir.

---

### Eğer Token İsterse (Şifre Kabul Etmezse):

#### Token Oluşturma:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. "Generate new token"
4. Scope: `repo` seç
5. Token'ı kopyala (bir daha göremezsin!)

#### Token ile Push:
```bash
git push -u origin main

# Username: mrtsrktt
# Password: [TOKEN'INI BURAYA YAPIŞTIR]
```

---

### ADIM 3: Push Başarılı! Şimdi Vercel'e Deploy Et

1. https://vercel.com/login → Giriş yap
2. **"Add New Project"** tıkla
3. **"Import Git Repository"**
4. **"mrtsrktt/valentine-surprise-2026"** seç
5. Ayarlar:
   ```
   Framework Preset: Other
   Build Command: (boş bırak)
   Output Directory: (boş bırak ya da "./")
   ```
6. **"Deploy"** tıkla!

---

## 🎯 DEPLOYMENT SONRASI

Deploy bitince:

```
✅ Production Link: https://valentine-surprise-2026.vercel.app
✅ Test Link: ?name=Ayşe
✅ Vercel otomatik HTTPS ekler
```

### Custom Domain Ekle (Opsiyonel):
- Vercel → Settings → Domains
- `sevgilimolurmusun.com` gibi

---

## 🔧 SORUN GİDERME

### "Authentication failed" Hatası:
→ Personal Access Token kullan (yukarıda anlatıldı)

### "Repository already exists":
```bash
git remote remove origin
git remote add origin https://github.com/mrtsrktt/valentine-surprise-2026.git
git push -u origin main
```

### Vercel "Build Failed":
→ Sorun yok! Static site olduğu için build'e gerek yok
→ Settings → General → Framework Preset → "Other" seç

---

## 📱 İLK TEST

Deploy sonrası hemen test et:

```
https://valentine-surprise-2026.vercel.app
https://valentine-surprise-2026.vercel.app?name=Ayşe
https://valentine-surprise-2026.vercel.app?name=Zeynep
```

---

## 💡 GÜNCELLEMELER

Her değişiklik için:

```bash
cd sevgilimolurmusun
# Dosyaları düzenle
git add .
git commit -m "Renkleri değiştirdim"
git push
```

→ Vercel otomatik deploy eder! (5-10 saniye)

---

## 🎉 HAZIRSIN!

Link'i aldıktan sonra:
1. ✅ Instagram story hazırla
2. ✅ WhatsApp status paylaş
3. ✅ TikTok video çek
4. ✅ İyzico hesabını aç

**İyi satışlar! 💰💕**

---

Sorun olursa bana yaz!
