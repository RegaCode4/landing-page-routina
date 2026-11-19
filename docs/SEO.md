# SEO Routina

Audit dan implementasi awal dilakukan pada 19 November 2026 untuk domain `https://routina.web.id/` menggunakan kerangka skill `seo` versi 2.6.2 dari AgriciDaniel/claude-seo.

## Posisi produk dan intent

Routina adalah produk aplikasi Android dengan intent utama transaksional: pengunjung mencari planner offline lalu mengunduh APK. Target utama halaman Indonesia adalah `aplikasi agenda harian offline`, `aplikasi jadwal Android`, `planner offline`, serta `aplikasi tugas dan rutinitas`. Target Inggris adalah `offline daily planner for Android` dan `private planner without account`.

Hasil pencarian saat audit didominasi listing aplikasi yang menonjolkan penyimpanan lokal, tanpa akun, kalender, tugas, rutinitas, dan privasi. Copy Routina mempertahankan diferensiasi yang dapat dibuktikan: penjadwalan cerdas dengan persetujuan pengguna, statistik, dan cadangan manual terenkripsi.

## Baseline

- Tidak ada blocker crawl atau indeks. Halaman `/en/` dan `/id/` server-rendered, memiliki self-canonical, reciprocal hreflang, HTTPS, robots, dan sitemap yang valid.
- Konten Indonesia sekitar 639 kata dan Inggris sekitar 680 kata; keduanya melewati quality gate landing page 600 kata.
- Meta description lama terlalu pendek dan H1 belum memuat intent pencarian utama.
- Tidak ada structured data, halaman About, halaman Privacy, atau `llms.txt`.
- Estimasi awal E-E-A-T 51/100 (moderate): bukti produk kuat, tetapi transparansi publisher dan kebijakan privasi belum dapat dirayapi.
- Gambar sudah memakai WebP, dimensi eksplisit, lazy loading di bawah fold, dan responsive `srcset` untuk hero.

## Implementasi

- Judul, meta description, H1, dan hero body dilokalkan berdasarkan intent tanpa keyword stuffing.
- JSON-LD locale-aware menambahkan `Organization`, `WebSite`, `WebPage`, dan `MobileApplication` tanpa mengarang harga, rating, atau ulasan.
- Open Graph dan Twitter Card dilengkapi dengan dimensi, tipe, locale alternate, judul, deskripsi, gambar, serta alt.
- Halaman About dan Privacy bilingual menambahkan pengalaman rilis, identitas publisher, kontak, serta penjelasan penyimpanan lokal dan backup.
- Footer menghubungkan seluruh trust page dan catatan rilis agar tidak menjadi orphan page.
- Sitemap memuat enam canonical HTML page dengan `lastmod` yang sesuai perubahan nyata.
- `llms.txt` menyajikan fakta produk, halaman resmi, APK, checksum, catatan rilis, dan kontak untuk agent; file ini bukan syarat ranking Google.
- Security headers non-breaking ditambahkan untuk meningkatkan trust dan hardening. CSP belum diterapkan karena script Astro inline harus dimigrasikan atau diberi nonce terlebih dahulu.

## Verifikasi dan indikator

- Build Astro harus lulus dan setiap blok JSON-LD harus dapat diparse sebagai JSON.
- Setiap canonical, hreflang, halaman trust, robots, sitemap, dan `llms.txt` harus mengembalikan HTTP 200 di production.
- APK, ukuran, versi, dan SHA-256 pada schema harus sama dengan artefak publik.
- Pantau impression dan click untuk query non-brand melalui Google Search Console setelah domain diverifikasi dan sitemap dikirim.
- Pantau LCP, INP, dan CLS melalui Search Console/CrUX. Audit tidak mengklaim skor lapangan karena PageSpeed API mengalami quota 429.

## Tindak lanjut

1. Verifikasi domain di Google Search Console dan kirim `https://routina.web.id/sitemap.xml`.
2. Buat social card 1200 × 630 khusus Routina agar preview tidak bergantung pada mockup 800 × 601.
3. Subset dan konversi font TTF menjadi WOFF2; font saat ini sekitar 506 KB dan merupakan peluang performa terbesar.
4. Tambahkan CSP setelah script inline dimigrasikan atau strategi nonce ditetapkan.
5. Jangan menambahkan `offers.price`, rating, ulasan, atau testimonial sebelum fakta tersebut disetujui dan tampil di halaman.
