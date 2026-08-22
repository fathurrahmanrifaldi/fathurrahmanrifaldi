export type ProjectCategory =
  | "All"
  | "Data"
  | "Web";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  impact: string;
  caseStudy: {
    problem: string;
    goal: string;
    solution: string;
    process: string[];
    technology: string;
    result: string;
    lessonsLearned: string;
  };
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "Data",
  "Web",
];

export const projects: Project[] = [
  {
    id: "online-retail",
    title: "Analisis & Pengolahan Data Ritel Skala Besar",
    shortDescription:
      "Melakukan pembersihan, pengolahan, dan analisis dataset transaksi ritel (25.000+ baris) menggunakan Excel. Mencakup penanganan data anomali, penyusunan laporan terdokumentasi, serta troubleshooting kendala teknis pengolahan data dan menghasilkan insight bisnis yang actionable.",
    category: "Data",
    techStack: ["Excel", "Data Cleaning", "Pivot Tables", "Power BI"],
    image: "/projects/projectt.png",
    githubUrl: "https://github.com/fathurrahmanrifaldi/online-retail-transaction-analysis",
    impact: "Mengidentifikasi total pendapatan bersih sebesar £10.259.030,24 dari 19.776 transaksi dengan rata-rata nilai pesanan (AOV) sebesar £518,76.",
    caseStudy: {
      problem:
        "Bisnis ritel online memiliki volume data transaksi mentah yang sangat besar (>25.000 baris) namun belum terstruktur dan masih mengandung banyak noise (duplikasi, transaksi batal, penyesuaian stok, dan anomali data non-penjualan)",
      goal: "Mengaudit dan membersihkan dataset transaksi menjadi basis data analitis yang valid dan siap olah, serta Merumuskan rekomendasi bisnis strategis yang konkret untuk meningkatkan pendapatan, retensi pelanggan, dan efisiensi operasional rantai pasok.",
      solution:
        "Membangun workbook analisis terstruktur menggunakan Microsoft Excel yang memisahkan data transaksi bersih, data pembatalan (cancellation), log audit pembersihan, tabel agregasi pivot, dan ringkasan eksekutif.",
      process: [
        "Menghapus 5.268 baris duplikasi identik (exact duplicates).",
        "Memisahkan 9.251 baris transaksi batal (faktur berawalan 'C') ke lembar kerja terpisah.",
        "Menghitung metrik total omzet, rata-rata nilai pesanan (AOV), total volume transaksi, dan katalog produk aktif",
        "Mengagregasi data bulanan untuk melihat tren musiman dan dampak holiday season.",
        "Membentuk tabel matriks RFM (Recency, Frequency, Monetary) pada pelanggan terdaftar untuk mengidentifikasi segmen bernilai tinggi (high-value customers)",
        "Menyusun laporan ringkasan eksekutif dan menerjemahkan temuan data menjadi rekomendasi operasional serta strategi pemasaran.",
      ],
      technology:
        "Microsoft Excel: Digunakan secara menyeluruh untuk data cleaning, pemodelan formula/KPI (SUM, COUNTIF, AVERAGE, dll.), perancangan Pivot Tables, serta visualisasi dan penyusunan struktur laporan.",
      result:
        "Mengidentifikasi total pendapatan bersih sebesar £10.259.030,24 dari 19.776 transaksi dengan rata-rata nilai pesanan (AOV) sebesar £518,76 dan Terpetakan lonjakan pendapatan signifikan pada Q4 (Sep–Nov 2011) dengan puncak di November 2011 (~£1,45 Juta) akibat belanja Natal.",
      lessonsLearned:
        "Pentingnya Data Bersih: Membuktikan bahwa kualitas data—melalui proses cleaning yang cermat—adalah fondasi utama untuk menghasilkan analisis yang akurat dan insight bisnis yang valid. Kemampuan Menerjemahkan Data menjadi Narasi Bisnis: Belajar mengubah tabel dan angka mentah menjadi laporan strategis yang mudah dipahami oleh pengambil keputusan, termasuk identifikasi tren musiman dan rekomendasi taktis berbasis data.",
    },
  },
  {
    id: "task-management-app",
    title: "Sistem Informasi Manajemen BASARA (Bank Sampah RW 42)",
    shortDescription:
      "Aplikasi sistem informasi berbasis web yang dirancang untuk mendigitalkan dan mengotomatiskan seluruh alur operasional Bank Sampah di RW 042 Kelurahan Bahagia, Kecamatan Babelan, Kabupaten Bekasi. Sistem ini mentransformasi pembukuan konvensional manual menjadi sistem digital yang terintegrasi, transparan, akurat, dan aman.",
    category: "Web",
    techStack: ["JavaScript", "Laravel", "Tailwind CSS", "MySQL"],
    image: "/projects/project2.png",
    githubUrl: "https://github.com/fathurrahmanrifaldi/basara",
    liveUrl: "https://fathurrahmanrifaldi.vercel.app",
    impact: "100% Digitalisasi Operasional: Seluruh alur pencatatan setoran sampah, mutasi saldo, penjualan ke pengepul, dan pembuatan laporan keuangan terkelola secara otomatis dan digital.",
    caseStudy: {
      problem:
        "Pengelolaan operasional bank sampah masih mengandalkan pencatatan buku besar secara manual. Hal ini menyebabkan potensi kesalahan input, kesulitan dalam penelusuran riwayat transaksi, serta ketidakmampuan untuk mendapatkan gambaran data yang real-time dan akurat mengenai kinerja bank sampah, termasuk jumlah nasabah aktif, jenis dan volume sampah yang terkumpul, serta total poin atau nilai finansial yang terakumulasi.",
      goal: "Membangun sebuah sistem informasi berbasis web yang mampu mendigitalisasi, mengotomatiskan, dan mengintegrasikan seluruh proses operasional bank sampah, mulai dari pendataan nasabah, pencatatan jenis sampah, input dan validasi transaksi setoran, perhitungan saldo (poin), hingga visualisasi data dalam bentuk laporan dan dashboard.",
      solution:
        "Aplikasi sistem informasi berbasis web yang dirancang untuk mendigitalkan dan mengotomatiskan seluruh alur operasional Bank Sampah di RW 042 Kelurahan Bahagia, Kecamatan Babelan, Kabupaten Bekasi. Sistem ini mentransformasi pembukuan konvensional manual menjadi sistem digital yang terintegrasi, transparan, akurat, dan aman.",
      process: [
        "Observasi lapangan dan wawancara bersama pengurus Bank Sampah RW 042 untuk memetakan kebutuhan fungsional & non-fungsional.",
        "Perancangan arsitektur basis data (ERD 13 entitas, LRS, Spesifikasi File) dan diagram alur sistem UML (Use Case, Activity, Sequence, Class Diagram).",
        "Pembuatan purwarupa dan alur antarmuka pengguna interaktif menggunakan Figma.",
        "Koding modul inti (Autentikasi Multi-Role, Transaksi Multi-Baris, Penarikan Dana, Penjualan Pengepul, dan Algoritma SAW) menggunakan pendekatan Agile Scrum",
        "Eksekusi 45 skenario *Black-Box Testing* serta pengujian penerimaan pengguna (User Acceptance Testing / UAT) bersama pengurus RW dan perwakilan nasabah.",
      ],
      technology:
        "JavaScript, Laravel, API routes, PostgreSQL untuk basis data, Tailwind CSS untuk styling.",
      result:
        "100% Digitalisasi Operasional:Seluruh alur pencatatan setoran sampah, mutasi saldo, penjualan ke pengepul, dan pembuatan laporan keuangan terkelola secara otomatis dan digital.",
      lessonsLearned:
        "Menyelesaikan kebutuhan pencatatan sampah multi-jenis melalui pembangunan formulir dinamis (*dynamic multi-row input*) berbasis JavaScript array.",
    },
  },
  {
    id: "sales-bi-dashboard",
    title: "Superstore Sales Analysis",
    shortDescription:
      "Analisis data penjualan Superstore (2015–2018) menggunakan Excel, mulai dari data cleaning, pivot summary, visualisasi, hingga dashboard interaktif dan rekomendasi bisnis.",
    category: "Data",
    techStack: ["Excel", "Data Cleaning", "Pivot Tables", "Power BI"],
    image: "/projects/project1.png",
    githubUrl: "https://github.com/fathurrahmanrifaldi/Superstore_Sales_Analysis",
    impact: "Mengidentifikasi kategori dan produk dengan performa terbaik, Mengetahui region dan segmen pelanggan yang memberikan kontribusi terbesar, Memahami pola tren dan musim penjualan, serta Menentukan area yang memiliki peluang untuk dikembangkan.",
    caseStudy: {
      problem:
        "Data transaksi Superstore periode 2015–2018 terdiri dari 9.800 baris transaksi dengan berbagai informasi seperti pelanggan, produk, wilayah, penjualan, dan pengiriman.",
      goal: "mengubah data transaksi menjadi informasi dan insight bisnis yang mudah dipahami, sehingga dapat membantu proses pengambilan keputusan terkait produk, pelanggan, wilayah, tren penjualan, dan strategi pengiriman",
      solution:
        "Membangun Superstore Sales Analysis Dashboard menggunakan Microsoft Excel yang mencakup: data cleaning, pivot summary, visualisasi, dan dashboard interaktif untuk memberikan insight bisnis yang actionable.",
      process: [
        "pengecekan duplikat & missing value, konversi format tanggal, penambahan kolom turunan (Order Year, Month, YearMonth, Ship Duration).",
        "ringkasan penjualan per Category, Region, Segment, Ship Mode, dan Sub-Category menggunakan formula dinamis (SUMIF, COUNTIF, AVERAGEIF).",
        "Visualization** — bar chart, line chart, dan pie chart untuk melihat tren dan komposisi penjualan.",
        "ringkasan interaktif dengan KPI cards dan kumpulan chart dalam satu tampilan.",
        "temuan bisnis dan rekomendasi strategis berdasarkan hasil analisis",
      ],
      technology:
        "Microsoft Excel (formula: `SUMIF`, `COUNTIF`, `AVERAGEIF`, Excel Table, PivotChart)",
      result:
        "Mengidentifikasi kategori produk dengan penjualan tertinggi, tren musiman, dan rekomendasi strategi pemasaran untuk meningkatkan pendapatan.",
      lessonsLearned:
        "Dari project ini, saya belajar bahwa data cleaning merupakan fondasi penting sebelum melakukan analisis karena kualitas data sangat memengaruhi hasil insight, Selain itu, saya belajar bagaimana mengubah data mentah menjadi summary, visualisasi, dashboard, dan rekomendasi bisnis yang lebih mudah dipahami.",
    },
  },
];
