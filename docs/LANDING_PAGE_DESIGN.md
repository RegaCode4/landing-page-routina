# Routina Landing Page

**Fase 21A · 18 November 2026 · siap ditinjau pemilik.** Buka halaman `Routina Landing Page` dalam [dokumen FigCraft website](../design/Routina%20Landing%20Page.figcraft). Mulai dari flow desktop atau pilih ukuran perangkat. Setiap frame utama memuat perjalanan lengkap sampai footer. [Pratinjau hero](../design/hero-preview.webp)

## Konsep dan keputusan editorial

Judul “Make every day count.” muncul di sisi kiri hero desktop. Di sisi kanan, dashboard Home menutupi sebagian Kalender di depan bidang Ember berbentuk muka jam. Bingkai kobalt, sudut pandang berlawanan, dan posisi Home di depan mengikuti foto dua ponsel yang diberikan saat review. Shell Android dibuat dari layer FigCraft. Isi layar berasal dari desain aplikasi Routina.

Tujuh gambar Finorix dalam folder referensi menjadi acuan untuk kontras hero gelap, kartu fitur dengan cuplikan produk, jeda antarseksi, FAQ, dan pengulangan CTA di akhir. Pada Routina, bagian tengah mengikuti urutan keputusan pengguna dari merencanakan jadwal, menjalani rutinitas, hingga membaca progres pribadi. Angka diberi konteks demo. Copy website menggunakan bahasa Inggris mengikuti brief. UI di dalam ponsel mempertahankan bahasa Indonesia.

## Frame dan QA responsif

| Frame | Ukuran desain (px) | Hasil review |
| --- | --- | --- |
| `WEB_01_Desktop_1440` | 1440 × 7756 | Navigasi penuh, hero dua kolom, dua kartu besar dan empat kartu pendukung sebaris, lima layar galeri terlihat. [Render](../design/review/layout-1440.webp) |
| `WEB_02_Tablet_768` | 768 × 8197 | Menu ringkas, ponsel di bawah copy hero, kartu pendukung dua kolom, spotlight dan unduhan bertumpuk. [Render](../design/review/layout-768.webp) |
| `WEB_03_Mobile_390` | 390 × 10110 | CTA bertumpuk, fitur dan metrik menjadi satu kolom, galeri memperlihatkan sebagian layar berikutnya. [Render](../design/review/layout-390.webp) |
| `WEB_04_Mobile_320_Check` | 320 × 10118 | Seluruh section termuat. Dua ponsel berada di bawah label platform. Tombol galeri dipadatkan, metadata tetap terbaca, dan checksum terbagi empat baris. [Render](../design/review/layout-320.webp) |

Tujuh frame pendukung membentuk pustaka desain.

| Frame | Isi |
| --- | --- |
| `WEB_00_Design_System` | Palet, pasangan font, heading, dan token |
| `WEB_05_Hero_Detail` | Komposisi hero pada skala desktop |
| `WEB_06_Feature_Cards` | Kartu fitur, kartu unggulan dengan preview, dan metrik pribadi |
| `WEB_07_Phone_Mockups` | Tujuh layar produk dalam shell netral, serta Home dan Kalender dalam shell hero biru |
| `WEB_08_FAQ_States` | Pertanyaan tertutup, jawaban terbuka, dan fokus keyboard |
| `WEB_09_Download_States` | Dua keluarga CTA, kartu kandidat, dan dua ukuran panel verifikasi |
| `WEB_10_Navigation_States` | Header, footer, dan menu ringkas beserta tujuan tiap breakpoint |

## Struktur halaman

| Bagian | Isi dan tindakan |
| --- | --- |
| 01 · Navigation | Logo Routina, Home, Features, How it works, Screenshots, FAQ, serta Download for Android. Menu ringkas membuka navigasi yang sama. |
| 02 · Hero | “Make every day count.” disertai informasi offline dan Android 7.0+. Preview Android APK menuju bagian kandidat. Explore features menuju grid fitur. |
| 03 · Product Overview | Tiga manfaat berupa merencanakan waktu, mengendalikan tenggat, dan membangun rutinitas. |
| 04 · Main Features | Kalender dan To-Do memakai preview asli. Empat kartu lain menjelaskan rutinitas, Smart Scheduling, statistik, dan pengingat lokal. |
| 05 · Smart Scheduling | Jam aktif, jadwal, tenggat, dan estimasi durasi menjadi dasar saran. Contoh slot belajar 15.00–15.45 memperlihatkan langkah persetujuan. Produk memvalidasi ulang jadwal saat saran disetujui. |
| 06 · Routine Tracking | Log contoh membedakan waktu aktual belajar 24 menit, target belajar 30 menit, serta progres olahraga dua dari tiga sesi. |
| 07 · Productivity Statistics | Contoh mingguan menunjukkan 21 dari 29 aktivitas selesai, 72,4% penyelesaian, dan dua dari tiga target rutinitas. Pilihan periode aplikasi mencakup hari, minggu, dan bulan. |
| 08 · Privacy & Offline | Database lokal, penggunaan offline tanpa akun, ekspor backup manual terenkripsi dengan kata sandi, serta lokasi penyimpanan pilihan pengguna. Klaim enkripsi berlaku pada file backup. |
| 09 · App Screenshots | Home, Calendar, To-Do List, Routines, Statistics. Judul galeri memberi tahu pembaca bahwa layar menampilkan data contoh. |
| 10 · How It Works | Sesudah publikasi, unduh APK resmi, ikuti installer serta pemeriksaan keamanan Android, lalu atur jam aktif dan agenda. |
| 11 · Download | Status kandidat, tombol Coming soon nonaktif, versi, build, byte, OS minimum, panel SHA-256, dan status release notes. |
| 12 · FAQ | Delapan jawaban membahas produk, harga, offline, akun, instalasi, backup, update, dan iOS. Harga publik belum diumumkan. Pengujian upgrade signed dan iOS native masih tertunda. |
| 13 · Final CTA | Ajakan singkat dengan satu mockup Statistik yang terpotong secara editorial. CTA kembali ke informasi kandidat. |
| 14 · Footer | Routina by Rega Code, lima anchor halaman, serta slot Privacy Policy, Terms of Use, Release Notes, dan Contact berlabel pending. |

## Sistem visual dan komponen

| Peran | Nilai | Pemakaian |
| --- | --- | --- |
| Ink / Cream | `#171717` / `#F5F2E9` | Hero, permukaan baca, dan teks utama |
| Ember | `#EE613E` | Aksen judul, dial, dan CTA utama. Identitas launcher/splash telah disetujui pemilik dalam fase branding. |
| Blue / Yellow / Coral | `#537BFF` / `#FFE65B` / `#FF8C82` | Aksen produk. Warna pendamping dipakai terbatas pada ilustrasi serta layar aplikasi. |
| Pendukung | `#FFFFFF`, `#55544D`, `#D7D3C8` | Permukaan kartu, body sekunder, dan pemisah |
| Fokus | `#182C73` | Outline fokus 3 px yang terlihat di atas Ember dan Cream |
| Permukaan editorial | `#262521`, `#F3DE85`, `#E5EBFF`, `#ED7957` | Galeri, log rutinitas, statistik, unduhan |

Bricolage Grotesque dipakai untuk judul, paragraf, dan tombol. Space Mono membedakan waktu, versi dan label kecil. Ukuran judul hero dari desktop ke layar sempit adalah 94, 68, 60 dan 51 px. Judul section umumnya 58, 45, 40 dan 35 px. Body utama 16–22 px dengan line-height sekitar 1,4. Label pendamping 11 px selalu mendapat keterangan yang lebih besar bila informasinya menentukan tindakan.

Margin isi pada 1440, 768, dan ponsel masing-masing 80, 44, dan 20 px. Jarak grid 24, 18, dan 14 px. Mayoritas radius kartu 15–24 px dan tombol utama tinggi 50 px dengan radius 25 px. Gunakan garis dalam 1 px untuk pemisah. Outline pekat dan bayangan offset terutama berasal dari UI produk di dalam ponsel.

Ada **12 keluarga komponen** yang dapat digunakan ulang. Header dan responsive menu mengelola navigasi. Primary CTA dan secondary CTA memiliki state default, hover, focus, active, dan disabled. Feature card, feature highlight, statistics card, dan section heading mengatur konten editorial. Phone mockup menampung layar asli dalam shell netral atau kobalt. FAQ accordion, download information card, dan footer melengkapi halaman. Dokumen berisi 30 master komponen, dua set varian tombol, empat text styles, dan satu koleksi dengan sepuluh warna serta delapan boolean FAQ.

## Aset dan provenance

Folder [aset desain](../design/assets/) bersifat mandiri. Ketujuh PNG layar diekspor oleh FigCraft pada 1,5× dari frame 390 × 844, menghasilkan 585 × 1266 px. Bingkai ponsel, tombol, tipografi, dan layout website dapat diedit. Untuk mengubah isi screenshot, revisi sumber aplikasi melalui fase tersendiri dan ganti isi aperture pada master perangkat.

| Aset website | Frame aplikasi asli | Peran |
| --- | --- | --- |
| [home.png](../design/assets/home.png) | `SC04_Home_Default` · 175 | Hero depan dan galeri |
| [calendar.png](../design/assets/calendar.png) | `SC05_Calendar_Month` · 1535 | Hero belakang, fitur kalender, galeri |
| [tasks.png](../design/assets/tasks.png) | `SC11_Todo_Default` · 5428 | Fitur tugas dan galeri |
| [routines.png](../design/assets/routines.png) | `SC14_Routines_Default` · 6958 | Referensi log dan galeri |
| [statistics.png](../design/assets/statistics.png) | `SC22_Stats_Week` · 9438 | Referensi KPI, galeri, CTA penutup |
| [scheduling.png](../design/assets/scheduling.png) | `SC17_Smart_Default` · 8138 | Referensi editorial dan master perangkat |
| [timer.png](../design/assets/timer.png) | `SC16_Timer_Idle` · 7053 | Referensi timer dan master perangkat |
| [routina-icon-ember.svg](../design/assets/routina-icon-ember.svg), [mark.png](../design/assets/mark.png) | `BRAND_Icon_Final` · 14762 | Master vektor resmi dan raster 128 px |
| [Font dan lisensi](../design/assets/fonts/) | Keluarga Bricolage Grotesque dan Space Mono dari proyek Routina | Self-host pada fase website, sertakan OFL masing-masing |

Sumber visual aplikasi adalah `Personal Planner - Flutter UI Design.figcraft`, termasuk halaman `12 · Branding & Launch`, ikon final dan `BRAND_Splash_Final` (14756). Perilaku dan status publikasi diperiksa terhadap `PRD.md`, `DESIGN.md`, `docs/FIGCRAFT_SCREEN_MAP.md`, `docs/BRANDING.md`, `docs/RELEASE_READINESS.md`, `docs/ANDROID_DISTRIBUTION.md`, `docs/ANDROID_RELEASE_CANDIDATE.md`, dan `docs/LANDING_PAGE_DISTRIBUTION.md` pada proyek Flutter di direktori sebelah.

## Interaksi, aksesibilitas dan batas QA

- Keempat flow mempunyai anchor internal untuk navigasi dan CTA. Menu tablet/ponsel memakai overlay dengan aksi tutup. Panel checksum dapat ditutup melalui tombol, klik di luar panel, atau Escape. Tidak ada aksi prototipe yang membuka URL eksternal.
- Delapan pertanyaan memakai nilai boolean independen. Jawaban terbuka menambah tinggi daftar melalui auto layout. Pertanyaan pertama terbuka pada tampilan awal. State FAQ terpilih memperlihatkan tanda minus. Pertanyaan mendukung klik, Enter, dan Space pada prototipe. State visual fokus dicontohkan di pustaka.
- Galeri menyimpan kelima perangkat dalam kontainer clip dengan overflow horizontal. Pada 768, 390, dan 320 px, tombol tujuan memberi alternatif terhadap geser. Halaman di luar galeri mengikuti lebar frame.
- QA dilakukan pada raster keempat ukuran dan geometri dokumen. Seluruh 56 section ditemukan. Semua target interaksi menunjuk node yang ada. Kotak teks berada dalam batas parent di keempat frame utama. Uji buka FAQ update pada 320 px memperbesar tinggi halaman sebesar 111 px dan menutupnya mengembalikan tinggi awal.
- Rasio pasangan warna terhitung sebesar 16,02:1 untuk Ink/Cream, 5,48:1 untuk Ink/Ember, 6,79:1 untuk teks sekunder/Cream, dan 8,23:1 untuk label terang/charcoal. Angka metrik, teks penjelas, dan state pending tetap dapat dimengerti tanpa membedakan warna.
- Pada fase Astro, uji zoom teks 200%, navigasi Tab, fokus sesudah menutup menu, pembacaan screen reader, dan sentuhan pada perangkat. Validasi ini memerlukan implementasi browser. Pertahankan target interaktif minimal 44 × 44 CSS px dan gunakan offset anchor agar header sticky tidak menutup judul.

## Handoff implementasi Astro setelah persetujuan

Gunakan root website ini untuk halaman statis Astro. Pecah layout per bagian dengan komponen bersama bagi CTA, perangkat, kartu fitur, FAQ, dan metadata rilis. Salin teks sebagai HTML yang bisa dipilih. Gunakan satu h1, heading berurutan, landmark semantik, anchor bernama, dan skip link. Susun grid dengan media query sekitar 600 dan 1100 px sebagai titik awal untuk menguji lebar di antara empat frame. Biarkan tinggi section mengikuti isi, termasuk ketika teks membesar.

Gunakan anchor untuk navigasi, disclosure native untuk FAQ dan checksum, serta overflow-x dengan scroll snap untuk galeri. JavaScript minimal cukup untuk menu dan manajemen fokus bila diperlukan. Gunakan focus-visible dan reduced-motion. Sediakan alt yang menyebut layar dan fungsinya, sembunyikan dial dan chrome ponsel dari pembaca layar, serta tampilkan isi penting setiap ilustrasi juga sebagai teks. Pertahankan prioritas unduh untuk visual hero dan lazy-load layar di bawah fold. Pilih ukuran gambar responsif dari master. Sajikan font lokal dengan lisensi yang tersedia.

### Aktivasi unduhan

| Field kandidat privat | Nilai yang telah diverifikasi dari dokumen RC |
| --- | --- |
| Penerbit / application ID | Rega Code / `com.regacode.routina` |
| Versi / kode | 1.0.0 / 1 |
| Minimum | Android 7.0 / API 24 |
| Ukuran | 64.321.176 byte, sekitar 61,34 MiB |
| SHA-256 APK | `c625d6afc34034258aa00fae7b241f8f2f7f5df234af18f7c335a1d90dcb5e1e` |

Selama kandidat privat, CTA aktif di hero dan header hanya menuju detail preview. Kontrol file berlabel Coming soon tetap disabled. Release notes dan tujuan footer menunggu URL asli.

Sebelum aktivasi, pemilik menyetujui distribusi dan melengkapi gerbang rilis Android, termasuk bukti upgrade signed yang masih tertunda. Ambil versi, build, minimum OS, ABI, ukuran, dan checksum dari artefak final yang sama. Cocokkan signature dengan register pemilik. Siapkan catatan versi, tanggal publikasi nyata, kontak dan dokumen privasi. Verifikasi kembali byte dan SHA-256 dari URL HTTPS resmi yang immutable. Setelah bukti cocok, aktifkan unduhan atas tindakan pengguna dengan label Download APK for Android dan sediakan file checksum. Tampilkan checksum sebagai satu nilai yang dapat disalin walau desain melipatnya menjadi empat baris.

### Keputusan pemilik yang masih terbuka

1. Persetujuan desain website, termasuk copy Inggris, hero kobalt dan perlakuan warna Ember untuk website.
2. Harga atau pernyataan publik mengenai biaya penggunaan.
3. Domain resmi, kontak, kebijakan privasi, syarat penggunaan, serta tujuan release notes.
4. Persetujuan dan tanggal publikasi Android dengan metadata final. Ketersediaan iOS menunggu bukti pengujian serta keputusan rilis platform tersebut.
