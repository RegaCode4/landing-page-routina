# Routina Landing Page

**Desain final · implementasi Astro · 19 November 2026.** Buka halaman `Routina Landing Page` dalam [dokumen FigCraft website](../design/Routina%20Landing%20Page.figcraft). Website statis menyajikan 14 bagian di `/en/` dan `/id/`. Alamat `/` mengarah ke versi Inggris. [Pratinjau hero](../design/hero-preview.webp)

## Konsep dan keputusan editorial

Komposisi hero mengikuti frame desktop, tablet, dan mobile Tagihin. Judul “Make every day count.”, deskripsi, dan CTA rata tengah pada bidang putih. Di bawahnya, mockup Home dan Kalender berada di tengah bidang gradasi ubin selebar frame. Gradasi memakai ekspor visual `Untitled blend.html` dengan palet yang juga tercantum di `Untitled blend.css`. Hero memakai gambar transparan dua ponsel yang diberikan pemilik. Satu master FigCraft mengatur gambar Home dan Kalender untuk keempat ukuran serta frame detail hero.

Tujuh gambar Finorix dalam folder referensi menjadi acuan untuk kartu fitur dengan cuplikan produk, jeda antarseksi, FAQ, dan pengulangan CTA di akhir. Pada Routina, bagian tengah mengikuti urutan keputusan pengguna dari merencanakan jadwal, menjalani rutinitas, hingga membaca progres pribadi. Angka diberi konteks demo. Copy website menggunakan bahasa Inggris mengikuti brief. UI di dalam ponsel mempertahankan bahasa Indonesia.

## Frame dan QA responsif

Tepi atas bidang ubin membaur ke putih melalui gradasi vertikal di belakang mockup. Tinggi transisi 145 px pada desktop, 120 px pada tablet, 76 px pada ponsel, dan 86 px pada studi animasi. Ujung atasnya putih penuh dan ujung bawahnya transparan.

| Frame | Ukuran desain (px) | Hasil review |
| --- | --- | --- |
| `WEB_01_Desktop_1440` | 1440 × 7844 | Navigasi penuh, hero terpusat di atas mockup, dua kartu besar dan empat kartu pendukung sebaris, lima layar galeri terlihat. [Render](../design/review/layout-1440.webp) |
| `WEB_02_Tablet_768` | 768 × 8187 | Menu ringkas, ponsel di bawah copy hero, kartu pendukung dua kolom, spotlight dan unduhan bertumpuk. [Render](../design/review/layout-768.webp) |
| `WEB_03_Mobile_390` | 390 × 10060 | CTA bertumpuk, fitur dan metrik menjadi satu kolom, galeri memperlihatkan sebagian layar berikutnya. [Render](../design/review/layout-390.webp) |
| `WEB_04_Mobile_320_Check` | 320 × 10082 | Seluruh section termuat. Dua ponsel berada di bawah label platform. Tombol galeri dipadatkan, metadata tetap terbaca, dan checksum terbagi empat baris. [Render](../design/review/layout-320.webp) |

Delapan frame pendukung membentuk pustaka desain.

| Frame | Isi |
| --- | --- |
| `WEB_00_Design_System` | Palet, pasangan font, heading, dan token |
| `WEB_05_Hero_Detail` | Komposisi hero pada skala desktop |
| `WEB_06_Feature_Cards` | Kartu fitur, kartu unggulan dengan preview, dan metrik pribadi |
| `WEB_07_Phone_Mockups` | Tujuh layar produk dalam shell netral, serta master gambar hero dua ponsel biru |
| `WEB_08_FAQ_States` | Pertanyaan tertutup, jawaban terbuka, dan fokus keyboard |
| `WEB_09_Download_States` | Dua keluarga CTA, kartu kandidat, dan dua ukuran panel verifikasi |
| `WEB_10_Navigation_States` | Header, footer, dan menu ringkas beserta tujuan tiap breakpoint |
| `WEB_11_Control_and_image_states` | Empat varian tombol dengan empat state per varian, serta fallback gambar, loading dan ready dalam area berasio tetap |

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
| Ink / Cream | `#171717` / `#F5F2E9` | Judul hero, permukaan baca, dan teks utama |
| Ember | `#EE613E` | CTA utama dan warna gradasi hero. Identitas launcher/splash telah disetujui pemilik dalam fase branding. |
| Blue / Yellow / Coral | `#537BFF` / `#FFE65B` / `#FF8C82` | Aksen produk. Warna pendamping dipakai terbatas pada ilustrasi serta layar aplikasi. |
| Pendukung | `#FFFFFF`, `#55544D`, `#D7D3C8` | Permukaan kartu, body sekunder, dan pemisah |
| Fokus | `#182C73` | Outline fokus 3 px yang terlihat di atas Ember dan Cream |
| Permukaan editorial | `#262521`, `#F3DE85`, `#E5EBFF`, `#ED7957` | Galeri, log rutinitas, statistik, unduhan |

Bricolage Grotesque dipakai untuk judul, paragraf, dan tombol. Space Mono membedakan waktu, versi dan label kecil. Ukuran judul hero dari desktop ke layar sempit adalah 74, 66, 52 dan 47 px. Judul section umumnya 58, 45, 40 dan 35 px. Body utama 16–22 px dengan line-height sekitar 1,4. Label pendamping 11 px selalu mendapat keterangan yang lebih besar bila informasinya menentukan tindakan.

Grid FigCraft menggunakan 12 kolom desktop, 8 tablet, dan 4 ponsel. Margin acuan 80, 40, dan 16 px dengan gutter 24, 16, dan 8 px. Grid dapat diaktifkan untuk inspeksi. Kartu fitur memakai radius 16 atau 24 px. Tombol utama setinggi 48 px dengan radius 24 px, padding horizontal 24 px, dan jarak antartombol hero 8 px. Gunakan garis dalam 1 px untuk pemisah. Outline pekat dan bayangan offset terutama berasal dari UI produk di dalam ponsel.

Halaman memakai **12 keluarga komponen inti** yang dapat digunakan ulang. Header dan responsive menu mengelola navigasi. Primary CTA dan secondary CTA memiliki state default, hover, focus, active, dan disabled. Feature card, feature highlight, statistics card, dan section heading mengatur konten editorial. Phone mockup mencakup shell netral untuk layar tunggal serta master PNG untuk pasangan ponsel pada hero. FAQ accordion, download information card, dan footer melengkapi halaman. Dokumen berisi 40 master komponen termasuk pustaka kontrol tambahan, empat set varian tombol, empat text styles, dan satu koleksi dengan sepuluh warna serta delapan boolean FAQ.

## Aset dan provenance

Untuk implementasi Astro, gunakan [varian WebP browser](../design/assets/web/) dan [logo SVG](../design/assets/routina-icon-ember.svg). Sediakan `srcset` dan `sizes` untuk mockup (800w, 1447w) serta latar hero (768w, 1440w) agar browser memilih satu ukuran per gambar. Tujuh screenshot menggunakan WebP lossless 585 × 1266 px. Tetapkan dimensi intrinsik pada gambar untuk menjaga ruang selama pemuatan. PNG di tabel berikut adalah master desain. Render halaman penuh dan animasi pada folder review hanya untuk peninjauan desain.

Folder [aset desain](../design/assets/) bersifat mandiri. Ketujuh PNG layar diekspor oleh FigCraft pada 1,5× dari frame 390 × 844, menghasilkan 585 × 1266 px. Hero menggunakan PNG komposit berasio 1447:1087. Pertahankan transparansi dan rasio saat mengatur ukurannya. Untuk mengganti visual hero di semua ukuran, ganti layer gambar pada master di `WEB_07_Phone_Mockups`. Master layar tunggal menggunakan ekspor aplikasi pada aperture terpisah.

| Aset website | Frame aplikasi asli | Peran |
| --- | --- | --- |
| [hero-blend.png](../design/assets/hero-blend.png) | SVG dari `Untitled blend.html` · raster 1440 × 966 px | Bidang visual penuh di belakang mockup, gunakan pemotongan tengah |
| [mockupphone.png](../design/assets/mockupphone.png) | PNG transparan dari pemilik · 1447 × 1087 px | Gambar hero desktop, tablet, ponsel, dan frame detail |
| [home.png](../design/assets/home.png) | `SC04_Home_Default` · 175 | Referensi Home dan galeri |
| [calendar.png](../design/assets/calendar.png) | `SC05_Calendar_Month` · 1535 | Fitur kalender dan galeri |
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
- QA dilakukan pada raster keempat ukuran dan geometri dokumen. Seluruh 56 section ditemukan. Semua target interaksi menunjuk node yang ada. Kotak teks berada dalam batas parent di keempat frame utama. Uji buka FAQ update pada 320 px memperbesar tinggi halaman sebesar 112 px dan menutupnya mengembalikan tinggi awal.
- Rasio pasangan warna terhitung sebesar 16,02:1 untuk Ink/Cream, 5,48:1 untuk Ink/Ember, 6,79:1 untuk teks sekunder/Cream, dan 8,23:1 untuk label terang/charcoal. Angka metrik, teks penjelas, dan state pending tetap dapat dimengerti tanpa membedakan warna.
- Pada fase Astro, uji zoom teks 200%, navigasi Tab, fokus sesudah menutup menu, pembacaan screen reader, dan sentuhan pada perangkat. Validasi ini memerlukan implementasi browser. Pertahankan target interaktif minimal 44 × 44 CSS px dan gunakan offset anchor agar header sticky tidak menutup judul.

## Contoh animasi section

Buka halaman `Routina · Motion Studies` dalam dokumen FigCraft, lalu pilih salah satu dari tiga flow melalui **Present**. Ketiganya memakai kanvas studi 460 px. [Pratinjau animasi berdampingan](../design/review/section-motion.webp)

| Flow | Gerakan yang bisa dicoba | Acuan di `portfolio-master/src/components/` |
| --- | --- | --- |
| `Motion · Hero` | Dua baris judul muncul dari bawah batas barisnya. Setelah jeda awal 240 ms, baris pertama naik selama 420 ms, lalu baris “day count.” menyusul setelah jeda 90 ms. Mockup dari pemilik tetap terlihat. Tekan Replay untuk mengulang. | `views/expertise.tsx` mengungkap teks per baris dengan mask dan stagger. |
| `Motion · Smart Scheduling` | Tiga frasa pada “Find time for what matters.” berubah dari abu-abu ke Cream secara berurutan, masing-masing 350 ms. Kartu slot dan persetujuan tetap diam agar contoh jadwal dapat dibaca. | `typography/text-reveal.tsx` menyalakan kata mengikuti progres scroll. Studi memakai tiga frasa dan pemicu waktu. |
| `Motion · App Screenshots` | Next screen, drag, atau panah kanan memindahkan layar berikutnya ke tengah selama 480 ms. Gunakan Previous atau panah kiri untuk mundur. Dari Statistik, Replay gallery kembali ke Home. | `views/works.tsx` menggerakkan track secara horizontal saat section desktop dipin. Studi memakai navigasi manual. |

Gerakan merupakan opsi untuk review Fase 21A. Pratinjau WebP menggerakkan galeri otomatis agar ketiga contoh dapat dibandingkan. Dalam flow FigCraft, pembaca sendiri menentukan kapan galeri bergerak. Untuk implementasi dengan reduced motion, tampilkan langsung judul dalam keadaan akhir dan pindahkan galeri ke layar pilihan tanpa transisi.

## Penerapan RULESDESIGN v0.1

Pada frame utama, menu ponsel menggunakan wrapper 48 × 48 px dengan ikon 24 px. FAQ memakai tinggi pertanyaan 64–72 px serta jawaban yang mengikuti isi. Body jawaban menggunakan line-height 24 px pada ponsel dan 28 px pada layar yang lebih lebar. Label membantu membedakan aksi utama, aksi pendukung dan status kandidat.

Pustaka Button memuat Primary, Outline, Text, dan Destructive dalam keadaan Default, Hover, Pressed, dan Disabled. Destructive hanya contoh pustaka. Pada contoh Product image, Try again menampilkan status loading kemudian preview dalam kontainer dengan rasio yang sama. Transisi itu merupakan simulasi FigCraft. Pada implementasi website, gunakan hasil pemuatan aset untuk menentukan status dan sembunyikan aksi retry selama permintaan berlangsung. Acuan istilah komponen adalah [UI Guideline Button](https://www.uiguideline.com/components/button).

## Handoff implementasi Astro setelah persetujuan

Gunakan root website ini untuk halaman statis Astro. Pecah layout per bagian dengan komponen bersama bagi CTA, perangkat, kartu fitur, FAQ, dan metadata rilis. Salin teks sebagai HTML yang bisa dipilih. Gunakan satu h1, heading berurutan, landmark semantik, anchor bernama, dan skip link. Susun grid dengan media query sekitar 600 dan 1100 px sebagai titik awal untuk menguji lebar di antara empat frame. Biarkan tinggi section mengikuti isi, termasuk ketika teks membesar.

Gunakan anchor untuk navigasi, disclosure native untuk FAQ dan checksum, serta overflow-x dengan scroll snap untuk galeri. JavaScript minimal cukup untuk menu dan manajemen fokus bila diperlukan. Gunakan focus-visible dan reduced-motion. Sediakan alt yang menyebut layar dan fungsinya, sembunyikan latar gradasi dan chrome ponsel dari pembaca layar, serta tampilkan isi penting setiap ilustrasi juga sebagai teks. Pertahankan prioritas unduh untuk visual hero dan lazy-load layar di bawah fold. Pilih ukuran gambar responsif dari master. Sajikan font lokal dengan lisensi yang tersedia.

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

1. Harga atau pernyataan publik mengenai biaya penggunaan.
2. Domain resmi, kontak, kebijakan privasi, syarat penggunaan, serta tujuan release notes.
3. Persetujuan dan tanggal publikasi Android dengan metadata final. Ketersediaan iOS menunggu bukti pengujian serta keputusan rilis platform tersebut.
