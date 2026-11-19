import type { AppLocale } from "@/common/i18n";

export interface TrustPage {
  meta: { title: string; description: string };
  label: string;
  title: string;
  intro: string;
  updated: string;
  sections: Array<{ title: string; paragraphs: string[]; items?: string[] }>;
  actions: Array<{ label: string; href: string }>;
}

type TrustPages = Record<AppLocale, { privacy: TrustPage; about: TrustPage }>;

export const trustPages: TrustPages = {
  id: {
    privacy: {
      meta: {
        title: "Kebijakan Privasi Routina | Data Offline di Perangkat",
        description: "Pelajari cara Routina menyimpan agenda, tugas, rutinitas, pengingat, dan cadangan secara lokal di perangkat Android tanpa akun online.",
      },
      label: "Privasi Routina",
      title: "Kebijakan privasi",
      intro: "Routina dirancang sebagai aplikasi agenda offline. Data perencanaanmu tetap berada di perangkat dan tidak memerlukan akun online.",
      updated: "Berlaku dan terakhir diperbarui 19 November 2026",
      sections: [
        {
          title: "Data yang disimpan",
          paragraphs: ["Agenda, tugas, subtugas, rutinitas, pengaturan, dan riwayat produktivitas disimpan di basis data lokal aplikasi pada perangkatmu. Rega Code tidak menerima isi data tersebut melalui aplikasi Routina 1.0.0."],
        },
        {
          title: "Akun dan koneksi internet",
          paragraphs: ["Routina 1.0.0 tidak memerlukan pendaftaran, akun online, backend, atau sinkronisasi cloud untuk menjalankan fitur utamanya."],
        },
        {
          title: "Izin perangkat dan pengingat",
          paragraphs: ["Routina menggunakan izin Android yang kamu setujui untuk menjalankan fitur seperti notifikasi dan pengingat lokal. Jika izin ditolak, fitur terkait mungkin tidak bekerja, tetapi agenda lokal tetap dapat digunakan."],
        },
        {
          title: "Cadangan manual terenkripsi",
          paragraphs: ["Kamu memilih kata sandi dan lokasi file saat mengekspor cadangan. File dan kata sandi tersebut berada dalam kendalimu; Rega Code tidak dapat memulihkan kata sandi yang hilang."],
        },
        {
          title: "Website dan kontak eksternal",
          paragraphs: ["Landing page Routina dihosting di Vercel dan dapat memproses data teknis standar permintaan web sesuai kebijakan penyedia hosting. Tautan WhatsApp, Instagram, dan email mengikuti kebijakan layanan masing-masing."],
        },
        {
          title: "Perubahan kebijakan",
          paragraphs: ["Jika cara Routina menangani data berubah pada rilis mendatang, halaman ini akan diperbarui bersama tanggal perubahan sebelum versi tersebut dipublikasikan."],
        },
      ],
      actions: [
        { label: "Unduh Routina", href: "/id/#download" },
        { label: "Hubungi Rega Code", href: "mailto:regacode4@gmail.com" },
      ],
    },
    about: {
      meta: {
        title: "Tentang Routina dan Rega Code | Planner Android Offline",
        description: "Kenali Routina, aplikasi planner Android offline dari Rega Code untuk mengatur agenda, tugas, rutinitas, pengingat, dan statistik harian.",
      },
      label: "Dibuat oleh Rega Code",
      title: "Tentang Routina",
      intro: "Routina adalah aplikasi agenda harian offline untuk Android yang menyatukan kalender, tugas, rutinitas, dan statistik dalam satu alur kerja.",
      updated: "Informasi produk diperbarui 19 November 2026",
      sections: [
        {
          title: "Mengapa Routina dibuat",
          paragraphs: ["Routina dibuat untuk membantu orang menyusun hari tanpa harus membuat akun atau menyerahkan agenda pribadi ke layanan cloud. Pengguna tetap memegang kendali atas jadwal dan setiap usulan penjadwalan cerdas."],
        },
        {
          title: "Fitur yang tersedia",
          paragraphs: ["Rilis 1.0.0 mencakup kalender bulanan, mingguan dan harian, tugas beserta subtugas, rutinitas, timer, pengingat lokal, statistik produktivitas, serta cadangan manual terenkripsi."],
        },
        {
          title: "Pengujian rilis",
          paragraphs: ["Pemilik produk melaporkan seluruh alur Routina 1.0.0 berhasil diuji pada perangkat fisik Oppo A95. APK publik ditandatangani dan halaman unduhan menyediakan ukuran file serta SHA-256 untuk verifikasi."],
        },
        {
          title: "Pengembang dan dukungan",
          paragraphs: ["Routina dikembangkan dan diterbitkan oleh Rega Code. Dukungan tersedia melalui email, WhatsApp, dan Instagram yang tercantum pada website resmi."],
        },
      ],
      actions: [
        { label: "Lihat fitur Routina", href: "/id/#features" },
        { label: "Unduh APK resmi", href: "/id/#download" },
      ],
    },
  },
  en: {
    privacy: {
      meta: {
        title: "Routina Privacy Policy | Offline Data on Your Device",
        description: "Learn how Routina stores schedules, tasks, routines, reminders, and encrypted backups locally on your Android device without an online account.",
      },
      label: "Routina privacy",
      title: "Privacy policy",
      intro: "Routina is designed as an offline planner. Your planning data stays on your device and does not require an online account.",
      updated: "Effective and last updated 19 November 2026",
      sections: [
        {
          title: "Data stored by Routina",
          paragraphs: ["Schedules, tasks, subtasks, routines, settings, and productivity history are stored in the app's local database on your device. Rega Code does not receive that content through Routina 1.0.0."],
        },
        {
          title: "Accounts and internet access",
          paragraphs: ["Routina 1.0.0 does not require registration, an online account, a backend, or cloud synchronization for its core features."],
        },
        {
          title: "Device permissions and reminders",
          paragraphs: ["Routina uses Android permissions that you approve for features such as notifications and local reminders. If a permission is denied, the related feature may not work, while the local planner remains available."],
        },
        {
          title: "Encrypted manual backups",
          paragraphs: ["You choose the password and file location when exporting a backup. The file and password remain under your control; Rega Code cannot recover a lost password."],
        },
        {
          title: "Website and external contacts",
          paragraphs: ["The Routina landing page is hosted on Vercel and may process standard technical web-request data under the hosting provider's policy. WhatsApp, Instagram, and email links follow their respective services' policies."],
        },
        {
          title: "Policy changes",
          paragraphs: ["If a future Routina release changes how data is handled, this page and its effective date will be updated before that version is published."],
        },
      ],
      actions: [
        { label: "Download Routina", href: "/en/#download" },
        { label: "Contact Rega Code", href: "mailto:regacode4@gmail.com" },
      ],
    },
    about: {
      meta: {
        title: "About Routina and Rega Code | Offline Android Planner",
        description: "Meet Routina, Rega Code's offline Android planner for organizing schedules, tasks, routines, reminders, and daily productivity statistics.",
      },
      label: "Built by Rega Code",
      title: "About Routina",
      intro: "Routina is an offline daily planner for Android that brings calendars, tasks, routines, and productivity statistics into one workflow.",
      updated: "Product information updated 19 November 2026",
      sections: [
        {
          title: "Why Routina was created",
          paragraphs: ["Routina helps people plan their day without creating an account or sending a private agenda to a cloud service. Users stay in control of their schedule and approve every smart-scheduling suggestion."],
        },
        {
          title: "Available features",
          paragraphs: ["Release 1.0.0 includes month, week and day calendars, tasks and subtasks, routines, timers, local reminders, productivity statistics, and encrypted manual backups."],
        },
        {
          title: "Release testing",
          paragraphs: ["The product owner reported that every Routina 1.0.0 flow passed on a physical Oppo A95 device. The public APK is signed, and the download page provides its exact file size and SHA-256 checksum."],
        },
        {
          title: "Developer and support",
          paragraphs: ["Routina is developed and published by Rega Code. Support is available through the email, WhatsApp, and Instagram contacts listed on the official website."],
        },
      ],
      actions: [
        { label: "Explore Routina features", href: "/en/#features" },
        { label: "Download the official APK", href: "/en/#download" },
      ],
    },
  },
};
