export type ProjectCategory =
  | "All"
  | "Data"
  | "Web"
  | "System"
  | "UI/UX";

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
    techStack: ["Excel", "Power BI"],
    image: "/projects/online-retail.webp",
    githubUrl: "https://github.com/fathurrahmanrifaldi/online-retail-transaction-analysis",
    impact: "Mengidentifikasi total pendapatan bersih sebesar £10.259.030,24 dari 19.776 transaksi dengan rata-rata nilai pesanan (AOV) sebesar £518,76..",
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
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/projects/task-management.webp",
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
        "PHP + Laravel, API routes, PostgreSQL untuk basis data, Tailwind CSS untuk styling.",
      result:
        "100% Digitalisasi Operasional:Seluruh alur pencatatan setoran sampah, mutasi saldo, penjualan ke pengepul, dan pembuatan laporan keuangan terkelola secara otomatis dan digital.",
      lessonsLearned:
        "Menyelesaikan kebutuhan pencatatan sampah multi-jenis melalui pembangunan formulir dinamis (*dynamic multi-row input*) berbasis JavaScript array.",
    },
  },
  {
    id: "sales-bi-dashboard",
    title: "Sales Business Intelligence Report",
    shortDescription:
      "Business intelligence solution analyzing sales data across regions, products, and time periods to identify growth opportunities.",
    category: "Data",
    techStack: ["Power BI", "SQL", "Excel", "DAX", "Data Modeling"],
    image: "/projects/bi-dashboard.webp",
    githubUrl: "https://github.com/fathurrahmanrifaldi",
    impact: "Identified 3 underperforming regions driving revenue optimization",
    caseStudy: {
      problem:
        "A company's sales data was siloed across multiple spreadsheets, making it impossible to get a unified view of business performance.",
      goal: "Create a centralized BI solution that provides real-time sales insights and supports data-driven decision-making.",
      solution:
        "Built an end-to-end BI pipeline from data consolidation through interactive dashboard delivery, with automated data refresh.",
      process: [
        "Consolidated data from multiple Excel sources",
        "Designed a star-schema data model",
        "Created DAX measures for KPIs",
        "Built multi-page Power BI dashboard",
        "Presented findings to stakeholders",
      ],
      technology:
        "Power BI for visualization, DAX for calculations, SQL for data extraction, Excel for data preparation.",
      result:
        "Delivered an interactive dashboard enabling real-time tracking of revenue, margins, and regional performance. Stakeholders gained the ability to self-serve analytics.",
      lessonsLearned:
        "A well-designed data model is the backbone of any BI solution. Investing time in proper data modeling pays off exponentially in report performance and flexibility.",
    },
  },
];
