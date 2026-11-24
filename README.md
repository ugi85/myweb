# UgiTech - Personal-led Tech & IoT Consultancy Website

Website statis (Single Page Application) modern, responsif, dan siap produksi untuk layanan jasa rekayasa perangkat lunak, automasi sistem, dan solusi IoT.

## 🚀 Fitur Utama

- **Model Bisnis Personal-led + On-Demand Squad:** Menampilkan kombinasi keunggulan *Personal Agility* (komunikasi langsung dengan Principal Engineer tanpa birokrasi) dan *Team Scalability* (dukungan kolaborator senior spesialis on-demand).
- **Tech Stack Modern:** Vue 3 (Composition API `<script setup>`), Vite, Tailwind CSS, dan icon set `lucide-vue-next`.
- **Desain Dark Slate & Glowing Tech Accents:** Tampilan estetis bernuansa rekayasa sistem dengan palet warna dark slate `#090d16`, emerald `#10b981`, dan sky/cyan `#0ea5e9`.
- **Sentralisasi Data (`src/data/siteData.js`):** Seluruh konten teks, kontak, daftar layanan, profil tim, studi kasus portofolio, dan FAQ dipisahkan rapi di satu file data sehingga dapat diperbarui tanpa menyentuh kode komponen UI.
- **Portofolio Filterable & Modal Studi Kasus:** Filter kategori (Web & Dashboard, Mobile App, IoT & Hardware) dan popup modal interaktif untuk melihat tantangan masalah, arsitektur solusi, metrik hasil, dan tech stack.
- **Formulir Interaktif Direct WhatsApp:** Pengunjung dapat memilih jenis proyek dan estimasi anggaran, lalu submit langsung membuka chat WhatsApp dengan template pesan rapi tanpa perlu backend server database.
- **Responsive & Siap Deploy:** 100% responsif di layar mobile, tablet, dan desktop. Siap di-build menjadi file statis HTML/CSS/JS untuk hosting di Cloudflare Pages, Vercel, Netlify, atau GitHub Pages.

---

## 📁 Struktur Direktori

```
myWeb/
├── index.html                  # HTML entry point dengan custom fonts & meta SEO
├── package.json                # Project dependencies & build scripts
├── vite.config.js              # Konfigurasi Vite & path alias (@/ -> ./src)
├── tailwind.config.js          # Konfigurasi Tailwind CSS (warna brand, dark mode)
├── postcss.config.js           # Konfigurasi PostCSS & Autoprefixer
├── src/
│   ├── main.js                 # Inisialisasi Vue 3 app
│   ├── style.css               # Tailwind directives & custom scrollbar/glow classes
│   ├── App.vue                 # Root layout & orkestrasi modal/floating button
│   ├── data/
│   │   └── siteData.js         # Sumber data utama (Layanan, Tim, Portofolio, FAQ, Kontak)
│   └── components/
│       ├── Navbar.vue          # Sticky header glassmorphism + mobile drawer
│       ├── HeroSection.vue     # Headline, stats counter, live telemetry preview
│       ├── ServicesSection.vue # Grid layanan utama & deliverables
│       ├── TeamModelSection.vue# Model kerja solo agility + on-demand squad
│       ├── PortfolioSection.vue# Portofolio interaktif dengan filter kategori
│       ├── PortfolioModal.vue  # Modal detail studi kasus (Problem, Solution, Impact)
│       ├── WorkflowSection.vue # Alur kerja 4 langkah & accordion FAQ
│       ├── ContactSection.vue  # Form inquiry proyek terhubung WhatsApp & kontak langsung
│       └── Footer.vue          # Navigasi cepat, profil ringkas, & dynamic copyright
```

---

## 🛠️ Panduan Menjalankan Proyek

### 1. Instalasi Dependensi
Jalankan perintah berikut di terminal:
```bash
npm install
```

### 2. Menjalankan Server Development (Lokal)
```bash
npm run dev
```
Buka browser di alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### 3. Build untuk Deployment (File Statis)
```bash
npm run build
```
Hasil build berupa file statis HTML, JS, dan CSS yang teroptimasi akan berada di folder `dist/`.

### 4. Preview Hasil Build Lokal
```bash
npm run preview
```

---

## ⚙️ Cara Kustomisasi Data & Kontak

Buka file **`src/data/siteData.js`**:
1. **Nomor WhatsApp:** Ubah nilai `siteConfig.contact.whatsappNumber` ke nomor WhatsApp aktif Anda (gunakan format internasional tanpa tanda `+`, contoh: `6281234567890`).
2. **Email & Profil Sosial:** Sesuaikan nilai `email`, `github`, dan `linkedin` di `siteConfig.contact`.
3. **Profil Principal & Tim:** Ubah nama, deskripsi, foto, dan keahlian di objek `siteConfig.teamModel`.
4. **Layanan & Portofolio:** Tambah atau modifikasi studi kasus di `siteConfig.services` dan `siteConfig.portfolio.items`.

---

## 🌐 Panduan Deployment

### A. Cloudflare Pages / Vercel
1. Hubungkan repository GitHub ke Cloudflare Pages atau Vercel.
2. Atur pengaturan build:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Klik **Deploy**.

### B. GitHub Pages
1. Pastikan `base: './'` sudah diatur di `vite.config.js` jika ingin menggunakan relative path.
2. Push folder `dist/` ke branch `gh-pages` atau gunakan GitHub Actions.
