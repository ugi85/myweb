/**
 * UgiTech - Website Content & Data Structure
 * Seluruh konten teks, daftar layanan, portofolio, dan profil tim
 * dapat disesuaikan di file ini tanpa mengubah komponen UI.
 */

export const siteConfig = {
  brand: {
    name: "Warung Bang Ugi",
    tagline: "Jasa Software & Teknologi (Web, Mobile, Automasi & IoT)",
    logoIcon: "/logo-warung.png",
    logoBanner: "/logo-text.png",
    founderTitle: "Principal Systems Engineer & Owner",
    location: "Bogor, Indonesia (Remote-Friendly)",
    availability: "Tersedia untuk Proyek Baru (Q1/Q2)",
  },
  contact: {
    whatsappNumber: "6289613835657", // Ganti dengan nomor WhatsApp aktif (tanpa tanda + atau spasi)
    email: "lapan5dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    telegram: "https://t.me",
    workingHours: "Senin - Sabtu: 08:30 - 18:00 WIB",
  },
  navigation: [
    { label: "Layanan", href: "#layanan" },
    { label: "Kapasitas Tim", href: "#tim" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Cara Kerja", href: "#alur-kerja" },
    { label: "Kontak", href: "#kontak" },
  ],
  hero: {
    badge: "Personal Agility + On-Demand Squad Support",
    headline: {
      accent: "Kecepatan Eksekusi Personal,",
      normal: "Skalabilitas Tim Spesialis.",
    },
    subheadline:
      "Bermitra langsung dengan Principal Engineer tanpa perantara birokrasi berbelit. Solusi rekayasa perangkat lunak modern, integrasi automasi, hingga sistem IoT terpadu dari konsep sampai implementasi produksi.",
    stats: [
      { label: "Tahun Pengalaman", value: "8+" },
      { label: "Proyek Sukses Selesai", value: "45+" },
      { label: "Ketersediaan Uptime", value: "99.9%" },
      { label: "Respon Diskusi Awal", value: "< 2 Jam" },
    ],
    highlights: [
      {
        title: "Direct Principal Access",
        desc: "Diskusi arsitektur teknis langsung dengan pembuat keputusan tanpa perantara account manager.",
      },
      {
        title: "Scalable Tech Squad",
        desc: "Fleksibel menggandeng jaringan engineer senior terpercaya saat proyek membutuhkan kapasitas lebih.",
      },
      {
        title: "Transparent & Pragmatic",
        desc: "Fokus pada kode yang rapi, arsitektur handal, estimasi realistis, dan nilai bisnis nyata.",
      },
    ],
  },
  services: [
    {
      id: "web-dashboard",
      title: "Web & Internal Dashboard",
      shortDesc:
        "Sistem web modern, portal administrasi, back-office, hingga Progressive Web App (PWA) berkinerja tinggi dengan kemampuan offline-first.",
      icon: "LayoutDashboard",
      deliverables: [
        "Sistem monitoring operasional & analitik bisnis",
        "Portal administrasi kustom (Custom CMS & ERP Mini)",
        "Progressive Web App (PWA) dengan offline storage",
        "Arsitektur frontend modern (Vue 3 / React / Tailwind)",
        "Desain UI responsif, cepat, dan ramah pengguna",
      ],
      tags: ["Vue 3", "React", "Tailwind CSS", "TypeScript", "REST API", "PWA"],
      popularBadge: "Paling Banyak Diminati",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      shortDesc:
        "Aplikasi Android & iOS kustom yang dioptimalkan untuk kebutuhan operasional lapangan, sales canvassing, pelacakan armada, dan automasi.",
      icon: "Smartphone",
      deliverables: [
        "Aplikasi mobile multiplatform (Flutter / Native)",
        "Sistem pencatatan offline & auto-sync background",
        "Integrasi GPS telemetry, barcode scanner & camera",
        "Push notification instan via Firebase (FCM)",
        "Dukungan publishing ke Google Play Store & App Store",
      ],
      tags: ["Flutter", "Dart", "Android", "iOS", "SQLite", "Firebase"],
      popularBadge: null,
    },
    {
      id: "custom-automation",
      title: "Custom Automation & API Integration",
      shortDesc:
        "Jembatani sistem yang terpisah, otomatisasi alur kerja manual berulang, integrasi payment gateway, dan sinkronisasi database tanpa hambatan.",
      icon: "Cpu",
      deliverables: [
        "Integrasi RESTful & GraphQL API antar sistem pihak ketiga",
        "Otomatisasi proses rekonsiliasi data dan pelaporan",
        "Integrasi Payment Gateway, WhatsApp Bot, & Notifikasi",
        "Optimasi database (PostgreSQL, MySQL, Redis)",
        "Worker background berkinerja tinggi dengan antrean BullMQ/RabbitMQ",
      ],
      tags: ["Node.js", "Golang", "PostgreSQL", "Redis", "Webhooks", "Docker"],
      popularBadge: null,
    },
    {
      id: "iot-hardware",
      title: "IoT & Hardware Prototyping",
      shortDesc:
        "Rekayasa sistem Internet of Things menyeluruh: mulai dari integrasi mikrokontroler sensor di lapangan hingga dashboard telemetri real-time di cloud.",
      icon: "Radio",
      deliverables: [
        "Firmware mikrokontroler sensor (ESP32, STM32, Arduino)",
        "Protokol komunikasi industri (MQTT, WebSockets, Modbus RS485)",
        "Desain arsitektur gateway & telemetri hemat daya",
        "Dashboard visualisasi grafik real-time & multi-tenant",
        "Sistem deteksi anomali & alert instan (Telegram / WA / Email)",
      ],
      tags: ["ESP32", "MQTT", "Modbus", "WebSockets", "InfluxDB", "Grafana"],
      popularBadge: "Solusi Spesialis",
    },
  ],
  teamModel: {
    sectionBadge: "Model Kerja Kolaboratif",
    headline: "Solo Agility, Team Scalability",
    subheadline:
      "Mengapa memilih antara freelancer individual yang terbatas kapasitasnya atau agensi besar yang mahal dan birokratis jika Anda bisa mendapatkan keunggulan keduanya?",
    advantages: [
      {
        icon: "ShieldCheck",
        title: "Single Point of Contact",
        desc: "Anda hanya berkomunikasi langsung dengan saya sebagai Technical Lead. Tidak ada distorsi pesan dari sales ke programmer.",
      },
      {
        icon: "Users2",
        title: "On-Demand Squad",
        desc: "Saat proyek membutuhkan sprint intensif, desainer UI/UX, atau QA automation, rekan spesialis senior saya langsung bergabung.",
      },
      {
        icon: "Coins",
        title: "Cost-Effective & Zero Overhead",
        desc: "Anda membayar untuk keahlian teknis nyata, bukan biaya sewa kantor mewah atau manajemen berjenjang agensi tradisional.",
      },
      {
        icon: "Zap",
        title: "Eksekusi Cepat & Fleksibel",
        desc: "Pengambilan keputusan teknis berlangsung seketika tanpa approval berbelit. Sprint mingguan dengan demo terukur.",
      },
    ],
    principal: {
      name: "Bang Ugi (Sugiyono, S.Kom.)",
      role: "Founder & Principal Systems Engineer",
      experience: "8+ Tahun di Industri Rekayasa Perangkat Lunak & IoT",
      avatar: "/logo-warung.png",
      bio: "Praktisi arsitektur perangkat lunak dengan pengalaman membangun sistem telemetri IoT industri, aplikasi web mission-critical, dan backend terdistribusi. Berfokus pada keandalan sistem, clean code, serta efektivitas bisnis.",
      specialties: [
        "System Architecture & Cloud Ops",
        "Vue 3, React & Modern Web Frontend",
        "Golang, Node.js & Distributed Backend",
        "Embedded Firmware (ESP32, MQTT, Modbus)",
        "Database Architecture & Performance Tuning",
      ],
      status: "Direct Lead",
    },
    collaborators: [
      {
        name: "Rian Ardiansyah",
        role: "UI/UX & Frontend Specialist",
        experience: "6 Tahun Pengalaman",
        skills: ["Figma", "Design Systems", "Tailwind CSS", "Vue 3", "Micro-Interactions"],
        badge: "Design & UX Partner",
        status: "On-Demand Squad",
        bio: "Spesialis dalam merancang antarmuka dashboard kompleks agar intuitif, nyaman dipakai staf operasional, dan memiliki estetika modern.",
      },
      {
        name: "Budi Santoso, M.Kom.",
        role: "Backend & Cloud Architect",
        experience: "7 Tahun Pengalaman",
        skills: ["Golang", "Kubernetes", "PostgreSQL", "AWS / GCP", "High Concurrency"],
        badge: "Infrastructure Partner",
        status: "On-Demand Squad",
        bio: "Ahli dalam merancang arsitektur microservices dan pipeline data berkecepatan tinggi dengan fokus uptime 99.9% dan keamanan data.",
      },
      {
        name: "Kevin Pratama",
        role: "Mobile App & QA Specialist",
        experience: "5 Tahun Pengalaman",
        skills: ["Flutter", "Kotlin", "Offline Storage", "CI/CD Mobile", "Automated Testing"],
        badge: "Mobile Partner",
        status: "On-Demand Squad",
        bio: "Berpengalaman menggarap aplikasi mobile lapangan offline-first yang tahan banting digunakan di berbagai perangkat Android & iOS.",
      },
      {
        name: "Dimas Suryo",
        role: "Firmware & Hardware Electronics",
        experience: "6 Tahun Pengalaman",
        skills: ["PCB Design", "LoRaWAN", "Altium", "Sensor Interfacing", "Power Management"],
        badge: "Hardware Partner",
        status: "On-Demand Squad",
        bio: "Membantu desain skematik PCB kustom, pemilihan sensor industri yang tahan cuaca ekstrem, dan optimasi efisiensi baterai IoT.",
      },
    ],
  },
  portfolio: {
    categories: [
      { id: "all", label: "Semua Proyek" },
      { id: "web", label: "Web & Dashboard" },
      { id: "mobile", label: "Mobile App" },
      { id: "iot", label: "IoT & Hardware" },
    ],
    items: [
      {
        id: "smart-agro",
        title: "Smart Greenhouse: Monitoring Telemetri & Irigasi Presisi",
        clientType: "Agrikultur Modern / Hidroponik",
        category: "iot",
        scale: "Team Collaboration (3 Eng.)",
        badgeColor: "emerald",
        summary:
          "Sistem telemetri sensor terpadu untuk monitoring suhu, kelembaban, EC, dan pH nutrisi dengan kontrol solenoid valve otomatis.",
        problem:
          "Perkebunan hidroponik skala 2 hektar sering mengalami penurunan mutu panen akibat keterlambatan deteksi fluktuasi suhu dan kepekatan pupuk cair yang dicek manual satu kali sehari.",
        solution:
          "Merancang node sensor wireless berbasis ESP32 dan LoRaWAN yang mengirimkan data tiap 3 menit ke gateway lokal, visualisasi real-time di web dashboard, serta aktuasi otomatis valve pendingin saat suhu melampaui batas toleransi.",
        results: [
          "Efisiensi konsumsi air & pupuk cair meningkat hingga 35%",
          "Respon anomali suhu menjadi instan dengan alert otomatis ke Telegram manajemen",
          "Tingkat keberhasilan panen stabil di atas 94% sepanjang musim kemarau",
        ],
        stack: ["ESP32", "LoRaWAN", "Vue 3", "Node.js", "PostgreSQL", "MQTT", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800",
        date: "2024",
      },
      {
        id: "logitrack-fleet",
        title: "LogiTrack: Sistem ERP & Telemetri Fleet Truk Distribusi",
        clientType: "Logistik & Ekspedisi Antar-Kota",
        category: "web",
        scale: "Team Collaboration (2 Eng.)",
        badgeColor: "blue",
        summary:
          "Platform terpusat pelacakan 120+ armada truk, pemantauan konsumsi BBM, digitalisasi surat jalan, dan estimasi waktu sampai (ETA).",
        problem:
          "Pencatatan surat jalan masih mengandalkan kertas fisik, sering terjadi selisih klaim solar, dan tim pusat kesulitan mengetahui status muatan secara real-time.",
        solution:
          "Membangun portal web internal berbasis role-based access control (Admin, Dispatcher, Gudang) terintegrasi dengan modul GPS tracker dan integrasi upload dokumen instan via PWA.",
        results: [
          "Waktu proses administrasi surat jalan terpangkas dari 4 jam menjadi 15 menit",
          "Penyusutan solar berkurang 18% berkat verifikasi rute & geofencing",
          "Transparansi status pengiriman ke klien B2B meningkat signifikan",
        ],
        stack: ["Vue 3", "Vite", "Golang", "PostgreSQL", "Redis", "Docker", "Mapbox GL"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        date: "2024",
      },
      {
        id: "sales-pulse",
        title: "SalesPulse: Field Order & CRM Offline-First Canvasser",
        clientType: "Distributor FMCG & Retail",
        category: "mobile",
        scale: "Solo Project (Principal Lead)",
        badgeColor: "amber",
        summary:
          "Aplikasi mobile multiplatform yang memungkinkan 40+ sales canvasser mencatat order dan tagihan toko ritel di area tanpa sinyal seluler.",
        problem:
          "Sales sering masuk ke area pelosok pasar tradisional dengan blank spot sinyal internet, menyebabkan order tertunda dicatat hingga sore hari dan stok gudang tidak sinkron.",
        solution:
          "Aplikasi Flutter dengan basis data lokal SQLite terenkripsi. Seluruh transaksi dicatat secara instan offline, dan otomatis tersinkronisasi ke server pusat saat mendeteksi sinyal internet.",
        results: [
          "Zero data loss transaksi di lapangan berkat auto-reconciliation engine",
          "Kecepatan penyiapan barang di gudang meningkat 2.5x karena order masuk bertahap",
          "Laporan omset harian tersedia secara real-time tepat pukul 17:00",
        ],
        stack: ["Flutter", "Dart", "SQLite", "Node.js REST API", "Firebase FCM", "Tailwind (Web Admin)"],
        image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&q=80&w=800",
        date: "2023",
      },
      {
        id: "fin-auto",
        title: "FinAuto: Worker Rekonsiliasi Otomatis Multi-Payment Gateway",
        clientType: "Fintech & E-Commerce Enabler",
        category: "web",
        scale: "Solo Project (Principal Lead)",
        badgeColor: "purple",
        summary:
          "Sistem background automation yang mencocokkan ribuan transaksi harian dari Midtrans, Xendit, dan mutasi bank BCA/Mandiri secara presisi.",
        problem:
          "Tim akuntansi menghabiskan 3 hari penuh setiap akhir bulan hanya untuk mencocokkan baris mutasi bank dengan bukti pembayaran pelanggan di Excel.",
        solution:
          "Engine automasi microservice dengan BullMQ worker yang secara berkala menarik statement mutasi, melakukan pencocokan fuzzy matching terhadap invoice ID, dan menghasilkan laporan selisih secara otomatis.",
        results: [
          "Waktu tutup buku bulanan berkurang dari 3 hari menjadi 12 menit",
          "Tingkat akurasi pencocokan mencapai 99.8% dengan audit log lengkap",
          "Notifikasi instan jika terdeteksi selisih nominal pembayaran",
        ],
        stack: ["Node.js", "TypeScript", "PostgreSQL", "BullMQ", "Redis", "ExcelJS", "Docker"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        date: "2023",
      },
      {
        id: "energy-sense",
        title: "EnergySense: Sub-Metering Energi Listrik 3-Fasa Industri",
        clientType: "Manufaktur Tekstil & Pabrik",
        category: "iot",
        scale: "Team Collaboration (2 Eng.)",
        badgeColor: "emerald",
        summary:
          "Pemantauan konsumsi daya mesin tenun, beban puncak kVAh, dan faktor daya (cos phi) berbasis Modbus RS485 & WebSockets.",
        problem:
          "Pabrik kerap terkena denda penalti kVARh PLN akibat beban induktif tidak terkontrol dan kerusakan motor listrik yang terlambat diidentifikasi.",
        solution:
          "Pemasangan power meter digital yang dihubungkan ke ESP32 Gateway via Modbus RS485. Data dikirim setiap 5 detik ke server lokal, memvisualisasikan heatmap konsumsi dan mendeteksi lonjakan anomali arus.",
        results: [
          "Denda penalti PLN berhasil dihilangkan sepenuhnya dalam 2 bulan pertama",
          "Deteksi dini korsleting dan aus bearing motor sebelum terjadi kebakaran/down",
          "Menghemat tagihan listrik operasional pabrik rata-rata 14% per bulan",
        ],
        stack: ["ESP32", "Modbus RTU RS485", "WebSockets", "InfluxDB", "Vue 3", "Chart.js"],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        date: "2024",
      },
      {
        id: "klinik-q",
        title: "KlinikQ: Sistem Reservasi Pasien & Rekam Medis Elektronik (RME)",
        clientType: "Fasilitas Kesehatan Pratama",
        category: "mobile",
        scale: "Team Collaboration (3 Eng.)",
        badgeColor: "blue",
        summary:
          "Integrasi aplikasi mobile pasien untuk nomor antrean live terhubung langsung dengan web portal dokter dan rekam medis elektronik terstandar Kemenkes.",
        problem:
          "Ruang tunggu klinik sering membludak karena jam praktek dokter tidak menentu, serta pencatatan riwayat resep masih manual dalam berkas map fisik.",
        solution:
          "Membangun aplikasi mobile untuk pasien memilih jadwal dan memantau estimasi jam panggil nomor antrean dari rumah, dilengkapi portal web dokter yang cepat untuk mengisi rekam medis.",
        results: [
          "Waktu tunggu fisik pasien di klinik berkurang rata-rata 60 menit",
          "Riwayat diagnosa dan alergi obat pasien dapat diakses dokter dalam hitungan detik",
          "Pencetakan surat rujukan dan struk apotek terotomasi",
        ],
        stack: ["Flutter", "Vue 3", "Tailwind CSS", "Laravel API", "MySQL", "AWS Cloud"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        date: "2023",
      },
    ],
  },
  workflow: {
    sectionBadge: "Metodologi Kerja",
    headline: "Alur Kerja Terstruktur & Transparan",
    subheadline:
      "Tanpa kejutan biaya tersembunyi atau kode yang ditinggalkan tanpa dokumentasi. Setiap tahap direncanakan dengan objektif yang jelas dan demo berkala.",
    steps: [
      {
        step: "01",
        title: "Discovery & Analisis Kebutuhan",
        desc: "Diskusi mendalam 1-on-1 untuk membedah problem inti bisnis Anda, batasan anggaran, timeline yang diharapkan, serta arsitektur teknis paling tepat.",
        deliverable: "Technical Scope Summary & Ringkasan Solusi",
      },
      {
        step: "02",
        title: "Proposal Teknis & Estimasi Transparan",
        desc: "Penyusunan dokumen proposal terperinci: mencakup arsitektur sistem, rincian deliverables, milestone pengerjaan mingguan, dan estimasi biaya tanpa markup tersembunyi.",
        deliverable: "Dokumen Kontrak Kerja, Roadmap, & Kesepakatan SLA",
      },
      {
        step: "03",
        title: "Development & Sprint Review Mingguan",
        desc: "Pengembangan aktif menggunakan standard clean code. Anda mendapatkan update status setiap minggu melalui staging URL yang bisa dicoba langsung.",
        deliverable: "Akses Staging Server, Git Repository, & Demo Mingguan",
      },
      {
        step: "04",
        title: "Deployment, Handover & Garansi",
        desc: "Peluncuran sistem ke production cloud (atau instalasi hardware IoT), serah terima seluruh source code lengkap, dokumentasi operasional, dan masa garansi bug fixes.",
        deliverable: "Source Code 100% Hak Klien, Dokumentasi & Garansi",
      },
    ],
  },
  faq: [
    {
      q: "Bagaimana jika proyek saya membutuhkan kapasitas tim yang lebih besar?",
      a: "Saya memiliki jaringan On-Demand Squad—rekan-rekan senior engineer, UI/UX designer, dan hardware specialist yang sudah terbiasa bekerja satu ritme dengan saya. Kapasitas tim dapat diskalakan secara fleksibel sesuai kompleksitas proyek tanpa Anda harus repot merekrut.",
    },
    {
      q: "Apakah seluruh hak cipta dan source code menjadi milik saya?",
      a: "Tentu saja. Seluruh source code, kredensial cloud, dokumentasi, dan aset desain diserahkan 100% kepada Anda setelah proyek selesai dan serah terima dilakukan.",
    },
    {
      q: "Bagaimana skema pembayaran yang diberlakukan?",
      a: "Umumnya berbasis Milestone atau Termin (misalnya: DP 30% saat mulai, 40% setelah uji coba staging selesai, dan 30% setelah deployment production). Tersedia pula skema bulanan (Retainer / Dedicated Lead) untuk pendampingan berkelanjutan.",
    },
    {
      q: "Apakah disediakan masa garansi dan dukungan pasca-peluncuran?",
      a: "Setiap proyek sudah mencakup garansi perbaikan bug gratis selama 30 hingga 90 hari setelah serah terima (tergantung skala kontrak), dengan opsi perpanjangan maintenance berkala.",
    },
  ],
  projectTypes: [
    { id: "web-dashboard", label: "Web Application / Internal Dashboard" },
    { id: "mobile-app", label: "Mobile App (Android / iOS)" },
    { id: "iot-hardware", label: "IoT & Hardware Prototyping" },
    { id: "custom-automation", label: "Automasi Sistem & Integrasi API" },
    { id: "consultation", label: "Konsultasi Arsitektur / Audit Kode" },
  ],
  budgetRanges: [
    { id: "under-15m", label: "Di bawah Rp 15 Juta" },
    { id: "15m-30m", label: "Rp 15 Juta - Rp 30 Juta" },
    { id: "30m-60m", label: "Rp 30 Juta - Rp 60 Juta" },
    { id: "above-60m", label: "Di atas Rp 60 Juta" },
    { id: "custom", label: "Fleksibel / Sesuai Rekomendasi Teknis" },
  ],
};

/**
 * Helper function to generate formatted WhatsApp link with automatic pre-filled template
 */
export function generateWhatsAppLink(formData) {
  const phone = siteConfig.contact.whatsappNumber;
  const projectTypeLabel =
    siteConfig.projectTypes.find((p) => p.id === formData.projectType)?.label ||
    formData.projectType ||
    "-";
  const budgetLabel =
    siteConfig.budgetRanges.find((b) => b.id === formData.budget)?.label ||
    formData.budget ||
    "-";

  const messageLines = [
    `Halo Tim ${siteConfig.brand.name}, saya ingin berkonsultasi mengenai rencana proyek:`,
    ``,
    `*Nama:* ${formData.name || "-"}`,
    `*Instansi / Bisnis:* ${formData.company || "-"}`,
    `*Jenis Kebutuhan:* ${projectTypeLabel}`,
    `*Estimasi Budget:* ${budgetLabel}`,
    ``,
    `*Ringkasan Kebutuhan:*`,
    `${formData.notes || "Belum ada catatan detail"}`,
    ``,
    `Mohon info ketersediaan jadwal untuk diskusi lebih lanjut. Terima kasih!`,
  ];

  const encodedMessage = encodeURIComponent(messageLines.join("\n"));
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function generateDirectWhatsAppLink(customSubject = "Diskusi Proyek Baru") {
  const phone = siteConfig.contact.whatsappNumber;
  const text = encodeURIComponent(
    `Halo ${siteConfig.brand.name}, saya ingin mendiskusikan kebutuhan solusi teknologi (${customSubject}). Apakah ada waktu luang untuk berdiskusi?`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
