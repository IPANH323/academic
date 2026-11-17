// --- DATA AWAL (9 MATA KULIAH & 27 CATATAN MATERI LENGKAP) ---
const DEFAULT_COURSES = [
    { id: 'c1', name: 'Etika Profesi', icon: 'shield-check', color: 'indigo', progress: 85 },
    { id: 'c2', name: 'Aljabar', icon: 'hash', color: 'violet', progress: 70 },
    { id: 'c3', name: 'Kalkulus', icon: 'activity', color: 'emerald', progress: 65 },
    { id: 'c4', name: 'Filsafat Pendidikan', icon: 'book-open', color: 'amber', progress: 90 },
    { id: 'c5', name: 'Sistem Digital', icon: 'cpu', color: 'rose', progress: 75 },
    { id: 'c6', name: 'Informatika Pendidikan', icon: 'monitor', color: 'cyan', progress: 80 },
    { id: 'c7', name: 'Algoritma Pemrograman', icon: 'code', color: 'indigo', progress: 95 },
    { id: 'c8', name: 'Praktikum', icon: 'terminal', color: 'violet', progress: 60 },
    { id: 'c9', name: 'Bahasa Inggris', icon: 'globe', color: 'emerald', progress: 88 }
];

const DEFAULT_NOTES = [
    // 1. Etika Profesi
    { id: 'n1', courseId: 'c1', title: 'Pengertian Etika dan Profesi', meeting: 1, date: '2026-02-02', content: '1. Judul materi: Pengertian Etika dan Profesi\n2. Pengertian: Etika adalah cabang filsafat yang mempelajari nilai dan norma moral yang menentukan perilaku manusia, sedangkan profesi adalah pekerjaan yang membutuhkan keahlian khusus.\n3. Penjelasan: Dalam dunia profesional, standar moral sangat menentukan integritas seseorang. Etika profesi mengatur hak dan kewajiban profesional terhadap klien, masyarakat, dan rekan kerja.\n4. Poin penting:\n- Kode etik menjaga marwah profesi.\n- Profesionalisme menuntut akuntabilitas.\n- Batasan moral dalam keputusan kerja.\n5. Contoh penerapan: Seorang software engineer menolak membuat sistem yang mencuri data pribadi pengguna meskipun diperintahkan atasan.\n6. Kesimpulan: Etika profesi adalah kompas moral wajib bagi setiap pekerja agar memberikan manfaat luas tanpa merugikan pihak lain.', tag: 'Teori' },
    { id: 'n2', courseId: 'c1', title: 'Prinsip Etika Profesional', meeting: 2, date: '2026-02-09', content: '1. Judul materi: Prinsip Etika Profesional\n2. Pengertian: Prinsip dasar yang menjadi landasan bertindak bagi kaum profesional.\n3. Penjelasan: Mencakup prinsip tanggung jawab, keadilan, otonomi, dan integritas moral.\n4. Poin penting:\n- Tanggung jawab atas hasil kerja.\n- Keadilan dalam memperlakukan semua pihak.\n- Integritas tanpa kompromi.\n5. Contoh penerapan: Auditor keuangan melaporkan ketidaksesuaian laporan secara transparan.\n6. Kesimpulan: Kepatuhan pada prinsip etika menjamin kepercayaan publik.', tag: 'Prinsip' },
    { id: 'n3', courseId: 'c1', title: 'Tanggung Jawab dan Kode Etik Profesi', meeting: 3, date: '2026-02-16', content: '1. Judul materi: Tanggung Jawab dan Kode Etik Profesi\n2. Pengertian: Pedoman tertulis yang mengatur perilaku moral anggota suatu profesi.\n3. Penjelasan: Kode etik dibuat oleh organisasi profesi untuk melindungi masyarakat dari malpraktik.\n4. Poin penting:\n- Sanksi bagi pelanggar.\n- Perlindungan konsumen/klien.\n- Peningkatan mutu profesi.\n5. Contoh penerapan: Sumpah dokter atau kode etik Ikatan Ahli Informatika.\n6. Kesimpulan: Kode etik adalah instrumen pengawasan internal profesi.', tag: 'Regulasi' },

    // 2. Aljabar
    { id: 'n4', courseId: 'c2', title: 'Dasar-dasar Aljabar', meeting: 1, date: '2026-02-03', content: '1. Judul materi: Dasar-dasar Aljabar\n2. Pengertian: Cabang matematika yang menggunakan simbol dan huruf untuk mewakili angka dalam persamaan.\n3. Penjelasan: Mempelajari manipulasi simbol dan hukum asosiatif, komutatif, serta distributif.\n4. Poin penting:\n- Variabel dan konstanta.\n- Koefisien suku aljabar.\n- Penyederhanaan bentuk aljabar.\n5. Contoh penerapan: Menghitung total biaya produksi dengan fungsi variabel x.\n6. Kesimpulan: Aljabar adalah fondasi logika matematika lanjutan.', tag: 'Matematika' },
    { id: 'n5', courseId: 'c2', title: 'Operasi Bentuk Aljabar dan Persamaan', meeting: 2, date: '2026-02-10', content: '1. Judul materi: Operasi Bentuk Aljabar dan Persamaan\n2. Pengertian: Operasi aritmatika pada bentuk aljabar dan penyelesaian persamaan linear.\n3. Penjelasan: Penjumlahan, pengurangan, perkalian suku, serta faktorisasi persamaan.\n4. Poin penting:\n- Faktorisasi suku kuadrat.\n- Persamaan linear satu dan dua variabel.\n5. Contoh penerapan: Mencari titik potong dua garis kurva.\n6. Kesimpulan: Penguasaan operasi aljabar mempermudah pemecahan masalah kuantitatif.', tag: 'Persamaan' },
    { id: 'n6', courseId: 'c2', title: 'Pengenalan Matriks dan Determinan', meeting: 3, date: '2026-02-17', content: '1. Judul materi: Pengenalan Matriks dan Determinan\n2. Pengertian: Susunan bilangan dalam baris dan kolom berbentuk persegi panjang.\n3. Penjelasan: Digunakan untuk merepresentasikan transformasi linier dan sistem persamaan.\n4. Poin penting:\n- Ordo matriks.\n- Determinan matriks 2x2 dan 3x3.\n- Invers matriks.\n5. Contoh penerapan: Pengolahan citra digital dalam computer vision.\n6. Kesimpulan: Matriks sangat esensial dalam komputasi modern dan sains data.', tag: 'Matriks' },

    // 3. Kalkulus
    { id: 'n7', courseId: 'c3', title: 'Pengertian Limit', meeting: 1, date: '2026-02-04', content: '1. Judul materi: Pengertian Limit\n2. Pengertian: Nilai suatu fungsi mendekati suatu titik tertentu.\n3. Penjelasan: Konsep fundamental dalam kalkulus untuk mendefinisikan turunan dan integral.\n4. Poin penting:\n- Limit kiri dan limit kanan.\n- Bentuk tak tentu.\n5. Contoh penerapan: Menghitung kecepatan sesaat suatu objek.\n6. Kesimpulan: Limit adalah jembatan menuju analisis matematika lanjutan.', tag: 'Analisis' },
    { id: 'n8', courseId: 'c3', title: 'Konsep Turunan', meeting: 2, date: '2026-02-11', content: '1. Judul materi: Konsep Turunan (Differensial)\n2. Pengertian: Laju perubahan sesaat dari suatu fungsi terhadap variabelnya.\n3. Penjelasan: Menentukan kemiringan garis singgung kurva pada titik tertentu.\n4. Poin penting:\n- Aturan pangkat (power rule).\n- Turunan fungsi trigonometri.\n5. Contoh penerapan: Optimisasi fungsi keuntungan dalam ekonomi.\n6. Kesimpulan: Turunan membantu menentukan nilai maksimum dan minimum.', tag: 'Turunan' },
    { id: 'n9', courseId: 'c3', title: 'Pengantar Integral', meeting: 3, date: '2026-02-18', content: '1. Judul materi: Pengantar Integral\n2. Pengertian: Kebalikan dari turunan (anti-turunan) dan penjumlah tak hingga.\n3. Penjelasan: Digunakan untuk menghitung luas di bawah kurva.\n4. Poin penting:\n- Integral tentu dan tak tentu.\n- Teorema dasar kalkulus.\n5. Contoh penerapan: Menghitung volume benda putar.\n6. Kesimpulan: Integral melengkapi kalkulus untuk menghitung akumulasi besaran.', tag: 'Integral' },

    // 4. Filsafat Pendidikan
    { id: 'n10', courseId: 'c4', title: 'Pengertian Filsafat Pendidikan', meeting: 1, date: '2026-02-05', content: '1. Judul materi: Pengertian Filsafat Pendidikan\n2. Pengertian: Analisis kritis terhadap proses dan hakikat pendidikan berdasarkan pandangan filosofis.\n3. Penjelasan: Mengkaji tujuan akhir pendidikan, hakikat manusia sebagai pembelajar, dan metode transfer ilmu.\n4. Poin penting:\n- Ontologi, epistemologi, dan aksiologi dalam pendidikan.\n- Tujuan pembentukan karakter.\n5. Contoh penerapan: Merumuskan kurikulum berbasis nilai kemanusiaan.\n6. Kesimpulan: Filsafat pendidikan memberikan arah strategis bagi sistem pengajaran.', tag: 'Teori' },
    { id: 'n11', courseId: 'c4', title: 'Landasan Filosofis Pendidikan', meeting: 2, date: '2026-02-12', content: '1. Judul materi: Landasan Filosofis Pendidikan\n2. Pengertian: Aspek filosofis yang mendasari kebijakan dan praktik pendidikan.\n3. Penjelasan: Meliputi landasan Pancasila, agama, dan kebudayaan nasional.\n4. Poin penting:\n- Nilai-nilai luhur bangsa.\n- Relevansi dengan zaman.\n5. Contoh penerapan: Integrasi Profil Pelajar Pancasila di sekolah.\n6. Kesimpulan: Landasan kokoh menghasilkan lulusan berkarakter kuat.', tag: 'Landasan' },
    { id: 'n12', courseId: 'c4', title: 'Aliran-aliran Filsafat Pendidikan', meeting: 3, date: '2026-02-19', content: '1. Judul materi: Aliran-aliran Filsafat Pendidikan\n2. Pengertian: Ragam pemikiran filosofis seperti progresivisme, esensialisme, dan konstruktivisme.\n3. Penjelasan: Setiap aliran menawarkan cara pandang berbeda terhadap peran guru dan siswa.\n4. Poin penting:\n- Progresivisme mengutamakan pengalaman siswa.\n- Konstruktivisme membangun pengetahuan secara mandiri.\n5. Contoh penerapan: Metode pembelajaran aktif (student-centered learning).\n6. Kesimpulan: Pendidik perlu memahami ragam aliran agar fleksibel dalam mengajar.', tag: 'Aliran' },

    // 5. Sistem Digital
    { id: 'n13', courseId: 'c5', title: 'Sistem Bilangan', meeting: 1, date: '2026-02-02', content: '1. Judul materi: Sistem Bilangan dalam Komputasi\n2. Pengertian: Cara merepresentasikan angka dalam sistem elektronik digital.\n3. Penjelasan: Komputer menggunakan sistem biner karena bekerja dengan sinyal elektrik on/off.\n4. Poin penting:\n- Basis bilangan (Desimal, Biner, Oktal, Heksadesimal).\n- Peran bit dan byte.\n5. Contoh penerapan: Alamat memori komputer dalam format heksadesimal.\n6. Kesimpulan: Sistem bilangan adalah fondasi hardware komputer.', tag: 'Hardware' },
    { id: 'n14', courseId: 'c5', title: 'Konversi Biner, Desimal, Oktal, dan Heksadesimal', meeting: 2, date: '2026-02-09', content: '1. Judul materi: Konversi Antar Sistem Bilangan\n2. Pengertian: Metode mengubah bentuk bilangan dari satu basis ke basis lainnya.\n3. Penjelasan: Penting untuk analisis data low-level dan pemrograman mikrokontroler.\n4. Poin penting:\n- Pembagian sisa (remainder method).\n- Pengelompokan 4 bit untuk heksa.\n5. Contoh penerapan: Kode warna RGB dalam web (#FF5733).\n6. Kesimpulan: Keterampilan konversi wajib dimiliki engineer digital.', tag: 'Konversi' },
    { id: 'n15', courseId: 'c5', title: 'Gerbang Logika dan Operasi Logika', meeting: 3, date: '2026-02-16', content: '1. Judul materi: Gerbang Logika (Logic Gates)\n2. Pengertian: Blok bangunan dasar dari rangkaian digital elektronik.\n3. Penjelasan: Meliputi gerbang AND, OR, NOT, NAND, NOR, XOR, dan XNOR.\n4. Poin penting:\n- Tabel kebenaran (truth table).\n- Aljabar Boolean.\n5. Contoh penerapan: Rangkaian penjumlah (adder) pada CPU.\n6. Kesimpulan: Seluruh komputasi canggih berakar dari kombinasi gerbang logika sederhana.', tag: 'Logika' },

    // 6. Informatika Pendidikan
    { id: 'n16', courseId: 'c6', title: 'Pengertian Informatika Pendidikan', meeting: 1, date: '2026-02-03', content: '1. Judul materi: Pengertian Informatika Pendidikan\n2. Pengertian: Integrasi ilmu komputer dan teknologi informasi ke dalam dunia pedagogi.\n3. Penjelasan: Mempersiapkan siswa menghadapi era digital dengan literasi teknologi yang matang.\n4. Poin penting:\n- Literasi digital siswa.\n- Kurikulum informatika sekolah.\n5. Contoh penerapan: Pembelajaran coding dasar menggunakan Scratch.\n6. Kesimpulan: Informatika pendidikan kunci penyiapan SDM masa depan.', tag: 'Pedagogi' },
    { id: 'n17', courseId: 'c6', title: 'Computational Thinking', meeting: 2, date: '2026-02-10', content: '1. Judul materi: Computational Thinking (Berpikir Komputasional)\n2. Pengertian: Proses pemecahan masalah dengan merumuskannya secara logis layaknya komputer.\n3. Penjelasan: Terdiri dari 4 pilar: Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma.\n4. Poin penting:\n- Memecah masalah besar menjadi kecil.\n- Mencari pola kesamaan.\n5. Contoh penerapan: Menyusun langkah efisien menyortir data manual.\n6. Kesimpulan: CT adalah soft skill wajib di abad 21.', tag: 'CT' },
    { id: 'n18', courseId: 'c6', title: 'Pemanfaatan Teknologi dalam Pembelajaran', meeting: 3, date: '2026-02-17', content: '1. Judul materi: Pemanfaatan Teknologi dalam Pembelajaran\n2. Pengertian: Penggunaan tools digital seperti LMS, AI, dan multimedia interaktif.\n3. Penjelasan: Meningkatkan engagement dan efektivitas transfer ilmu kepada peserta didik.\n4. Poin penting:\n- E-learning dan blended learning.\n- Gamifikasi pendidikan.\n5. Contoh penerapan: Kuis interaktif menggunakan Kahoot atau Quizizz.\n6. Kesimpulan: Teknologi memperluas akses dan kualitas belajar.', tag: 'EdTech' },

    // 7. Algoritma Pemrograman
    { id: 'n19', courseId: 'c7', title: 'Pengertian Algoritma dan Flowchart', meeting: 1, date: '2026-02-04', content: '1. Judul materi: Pengertian Algoritma dan Flowchart\n2. Pengertian: Algoritma adalah urutan langkah logis penyelesaian masalah, flowchart adalah diagram alurnya.\n3. Penjelasan: Sebelum menulis kode, programmer merancang alur logika agar program terstruktur.\n4. Poin penting:\n- Simbol standar flowchart (terminator, process, decision).\n- Efisiensi langkah.\n5. Contoh penerapan: Membuat flowchart alur login akun.\n6. Kesimpulan: Perencanaan algoritma mencegah error logika saat coding.', tag: 'Algoritma' },
    { id: 'n20', courseId: 'c7', title: 'Variabel, Tipe Data, dan Operator Python', meeting: 2, date: '2026-02-11', content: '1. Judul materi: Variabel, Tipe Data, dan Operator Python\n2. Pengertian: Wadah penyimpanan data dan jenis data (int, float, string, boolean) di Python.\n3. Penjelasan: Python memiliki sintaks yang bersih dan mudah dibaca untuk pemula.\n4. Poin penting:\n- Deklarasi variabel dinamis.\n- Operator aritmatika dan perbandingan.\n5. Contoh penerapan: Program kalkulator sederhana.\n6. Kesimpulan: Ini adalah batu loncatan pertama menguasai bahasa Python.', tag: 'Python' },
    { id: 'n21', courseId: 'c7', title: 'Percabangan dan Perulangan', meeting: 3, date: '2026-02-18', content: '1. Judul materi: Percabangan dan Perulangan (Control Flow)\n2. Pengertian: Logika pengambilan keputusan (if-else) dan pengulangan eksekusi (for/while).\n3. Penjelasan: Membuat program dapat mengambil keputusan otomatis berdasarkan kondisi tertentu.\n4. Poin penting:\n- Blok if-elif-else.\n- Looping dengan range().\n5. Contoh penerapan: Program pengecekan kelulusan nilai siswa.\n6. Kesimpulan: Control flow memberikan kecerdasan dasar pada program.', tag: 'ControlFlow' },

    // 8. Praktikum
    { id: 'n22', courseId: 'c8', title: 'Pengenalan Lab dan Keselamatan Kerja', meeting: 1, date: '2026-02-05', content: '1. Judul materi: Pengenalan Lab dan Keselamatan Kerja (K3)\n2. Pengertian: Protokol keselamatan dan tata tertib bekerja di laboratorium komputer.\n3. Penjelasan: Mencegah kecelakaan kerja dan kerusakan perangkat keras akibat kelalaian.\n4. Poin penting:\n- Penanganan kabel listrik.\n- Prosedur darurat kebakaran.\n5. Contoh penerapan: Mematikan komputer sesuai SOP.\n6. Kesimpulan: Keselamatan adalah prioritas utama dalam praktikum.', tag: 'K3' },
    { id: 'n23', courseId: 'c8', title: 'Instalasi dan Konfigurasi Tools Pengembangan', meeting: 2, date: '2026-02-12', content: '1. Judul materi: Instalasi dan Konfigurasi Tools Pengembangan\n2. Pengertian: Menyiapkan lingkungan kerja (IDE, compiler, Git) di komputer praktikan.\n3. Penjelasan: Memastikan seluruh mahasiswa memiliki environment yang seragam.\n4. Poin penting:\n- Instalasi VS Code dan Git.\n- Environment variables.\n5. Contoh penerapan: Melakukan git clone repository praktikum.\n6. Kesimpulan: Environment yang rapi mempercepat proses development.', tag: 'Tools' },
    { id: 'n24', courseId: 'c8', title: 'Studi Kasus Praktikum Dasar', meeting: 3, date: '2026-02-19', content: '1. Judul materi: Studi Kasus Praktikum Dasar\n2. Pengertian: Implementasi teori langsung ke dalam proyek mini di laboratorium.\n3. Penjelasan: Menguji pemahaman praktikan melalui tugas hands-on.\n4. Poin penting:\n- Debugging error langsung.\n- Dokumentasi hasil praktikum.\n5. Contoh penerapan: Membuat program CRUD sederhana di console.\n6. Kesimpulan: Praktikum memperkuat pemahaman teoretis di kelas.', tag: 'HandsOn' },

    // 9. Bahasa Inggris
    { id: 'n25', courseId: 'c9', title: 'Academic Reading & Vocabulary', meeting: 1, date: '2026-02-02', content: '1. Judul materi: Academic Reading & Vocabulary\n2. Pengertian: Teknik membaca cepat dan memahami jurnal ilmiah berbahasa Inggris.\n3. Penjelasan: Mahasiswa wajib mampu menyerap literatur internasional untuk referensi tugas akhir.\n4. Poin penting:\n- Scanning dan skimming jurnal.\n- Kosakata akademik (academic word list).\n5. Contoh penerapan: Membaca abstrak jurnal IEEE.\n6. Kesimpulan: Kemampuan membaca literatur asing membuka wawasan global.', tag: 'Reading' },
    { id: 'n26', courseId: 'c9', title: 'Effective Academic Writing Structure', meeting: 2, date: '2026-02-09', content: '1. Judul materi: Effective Academic Writing Structure\n2. Pengertian: Struktur penulisan esai atau paper ilmiah (Introduction, Body, Conclusion).\n3. Penjelasan: Menulis dengan gaya bahasa formal, objektif, dan bebas dari plagiasi.\n4. Poin penting:\n- Thesis statement.\n- Paragraph coherence.\n5. Contoh penerapan: Menulis paragraf pendahuluan makalah riset.\n6. Kesimpulan: Writing skill yang baik menentukan kualitas publikasi ilmiah.', tag: 'Writing' },
    { id: 'n27', courseId: 'c9', title: 'Public Speaking & Presentation Skills', meeting: 3, date: '2026-02-16', content: '1. Judul materi: Public Speaking & Presentation Skills\n2. Pengertian: Keterampilan menyampaikan gagasan ilmiah di hadapan publik secara percaya diri.\n3. Penjelasan: Meliputi intonasi suara, bahasa tubuh, dan desain slide presentasi yang efektif.\n4. Poin penting:\n- Eye contact dan gestur tubuh.\n- Struktur slide 6x6 rule.\n5. Contoh penerapan: Presentasi hasil project akhir di depan dosen.\n6. Kesimpulan: Komunikasi publik yang handal adalah kunci kesuksesan karier.', tag: 'Speaking' }
];

const DEFAULT_TASKS = [
    { id: 't1', courseId: 'c7', title: 'Membuat Program Python Sederhana', deadline: '2026-06-05', priority: 'Tinggi', completed: false },
    { id: 't2', courseId: 'c3', title: 'Penyelesaian Soal Latihan Turunan Kalkulus', deadline: '2026-06-08', priority: 'Sedang', completed: false },
    { id: 't3', courseId: 'c1', title: 'Analisis Studi Kasus Kode Etik IT', deadline: '2026-06-12', priority: 'Rendah', completed: false },
    { id: 't4', courseId: 'c5', title: 'Rangkaian Logika Kombinasional di Lab', deadline: '2026-06-15', priority: 'Tinggi', completed: true },
    { id: 't5', courseId: 'c9', title: 'Drafting Academic Paper Abstract', deadline: '2026-06-20', priority: 'Sedang', completed: false }
];

// --- STATE APLIKASI ---
let appState = {
    activeTab: 'overview',
    username: 'Mahasiswa Aktif',
    prodi: 'Teknik Informatika',
    courses: JSON.parse(localStorage.getItem('as_courses')) || DEFAULT_COURSES,
    notes: JSON.parse(localStorage.getItem('as_notes')) || DEFAULT_NOTES,
    tasks: JSON.parse(localStorage.getItem('as_tasks')) || DEFAULT_TASKS,
    theme: localStorage.getItem('as_theme') || 'light'
};

let selectedCourseFilter = 'all';
let searchQuery = '';
let taskFilterTab = 'all';
let autosaveTimer = null;

// --- FUNGSI PENYIMPANAN ---
function saveData() {
    localStorage.setItem('as_courses', JSON.stringify(appState.courses));
    localStorage.setItem('as_notes', JSON.stringify(appState.notes));
    localStorage.setItem('as_tasks', JSON.stringify(appState.tasks));
    localStorage.setItem('as_username', appState.username);
    localStorage.setItem('as_prodi', appState.prodi);
}

// --- INISIALISASI APLIKASI ---
window.onload = function() {
    if (localStorage.getItem('as_username')) appState.username = localStorage.getItem('as_username');
    if (localStorage.getItem('as_prodi')) appState.prodi = localStorage.getItem('as_prodi');
    
    if (appState.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    updateUserProfileUI();
    switchTab('overview');
};

function updateUserProfileUI() {
    document.getElementById('display-username').innerText = appState.username;
    document.getElementById('display-prodi').innerText = appState.prodi;
    const initials = appState.username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('user-initials').innerText = initials;
}

// --- DARK / LIGHT MODE ---
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        appState.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        appState.theme = 'dark';
    }
    localStorage.setItem('as_theme', appState.theme);
}

// --- NAVIGASI & TAB ---
function switchTab(tabId) {
    appState.activeTab = tabId;
    
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active-nav'));
    const activeEl = document.getElementById(`nav-${tabId}`);
    if (activeEl) activeEl.classList.add('active-nav');

    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('mobile-overlay').classList.add('hidden');

    renderContent();
    lucide.createIcons();
}

function toggleMobileMenu() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
    document.getElementById('mobile-overlay').classList.toggle('hidden');
}

// --- RENDER VIEW UTAMA ---
function renderContent() {
    const container = document.getElementById('app-content');
    switch (appState.activeTab) {
        case 'overview': container.innerHTML = renderOverviewHTML(); break;
        case 'courses': container.innerHTML = renderCoursesHTML(); break;
        case 'notes': container.innerHTML = renderNotesHTML(); break;
        case 'tasks': container.innerHTML = renderTasksHTML(); break;
        case 'calendar': container.innerHTML = renderCalendarHTML(); break;
        case 'settings': container.innerHTML = renderSettingsHTML(); break;
        default: container.innerHTML = renderOverviewHTML();
    }
    lucide.createIcons();
}

// --- 1. OVERVIEW VIEW ---
function renderOverviewHTML() {
    const pendingTasksCount = appState.tasks.filter(t => !t.completed).length;
    const completedTasksCount = appState.tasks.filter(t => t.completed).length;
    
    const hour = new Date().getHours();
    let greeting = "Selamat malam";
    if (hour >= 4 && hour < 11) greeting = "Selamat pagi";
    else if (hour >= 11 && hour < 15) greeting = "Selamat siang";
    else if (hour >= 15 && hour < 18) greeting = "Selamat sore";

    const upcomingTasks = [...appState.tasks].filter(t => !t.completed).sort((a,b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 3);
    const recentNotes = [...appState.notes].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    return `
        <div class="space-y-6">
            <div class="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <span class="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Dashboard Akademik</span>
                    <h2 class="text-2xl md:text-3xl font-bold">${greeting}, ${appState.username}!</h2>
                    <p class="text-indigo-100 text-sm mt-1">Siap menjalani hari produktif? Anda memiliki ${pendingTasksCount} tugas pending hari ini.</p>
                </div>
                <div class="flex items-center space-x-3">
                    <button onclick="openNoteModalForCreate()" class="px-4 py-2.5 rounded-xl bg-white text-indigo-600 hover:bg-indigo-50 font-medium text-sm shadow-md flex items-center space-x-2">
                        <i data-lucide="plus" class="w-4 h-4"></i>
                        <span>Buat Catatan</span>
                    </button>
                    <button onclick="switchTab('tasks')" class="px-4 py-2.5 rounded-xl bg-indigo-700/80 hover:bg-indigo-700 text-white font-medium text-sm flex items-center space-x-2 border border-indigo-500/50">
                        <i data-lucide="check-square" class="w-4 h-4"></i>
                        <span>Lihat Tugas</span>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between text-slate-500 mb-2">
                        <span class="text-xs font-semibold uppercase">Mata Kuliah</span>
                        <i data-lucide="book-open" class="w-5 h-5 text-indigo-500"></i>
                    </div>
                    <div class="text-2xl font-bold">${appState.courses.length}</div>
                    <p class="text-xs text-emerald-500 mt-1 font-medium">Aktif semester ini</p>
                </div>
                <div class="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between text-slate-500 mb-2">
                        <span class="text-xs font-semibold uppercase">Total Catatan</span>
                        <i data-lucide="file-text" class="w-5 h-5 text-violet-500"></i>
                    </div>
                    <div class="text-2xl font-bold">${appState.notes.length}</div>
                    <p class="text-xs text-indigo-500 mt-1 font-medium">Materi tersimpan</p>
                </div>
                <div class="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between text-slate-500 mb-2">
                        <span class="text-xs font-semibold uppercase">Tugas Pending</span>
                        <i data-lucide="clock" class="w-5 h-5 text-amber-500"></i>
                    </div>
                    <div class="text-2xl font-bold">${pendingTasksCount}</div>
                    <p class="text-xs text-amber-500 mt-1 font-medium">Segera selesaikan</p>
                </div>
                <div class="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between text-slate-500 mb-2">
                        <span class="text-xs font-semibold uppercase">Tugas Selesai</span>
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>
                    </div>
                    <div class="text-2xl font-bold">${completedTasksCount}</div>
                    <p class="text-xs text-emerald-500 mt-1 font-medium">Kerja bagus!</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-base flex items-center space-x-2">
                            <i data-lucide="calendar-clock" class="w-5 h-5 text-indigo-500"></i>
                            <span>Upcoming Deadlines</span>
                        </h3>
                        <button onclick="switchTab('tasks')" class="text-xs font-semibold text-indigo-600 hover:underline">Lihat Semua</button>
                    </div>
                    <div class="space-y-3">
                        ${upcomingTasks.map(t => {
                            const course = appState.courses.find(c => c.id === t.courseId) || { name: 'Umum' };
                            return `
                                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div class="flex items-start space-x-3">
                                        <input type="checkbox" onclick="toggleTaskCompletion('${t.id}')" class="mt-1 w-4 h-4 text-indigo-600 rounded">
                                        <div>
                                            <h4 class="text-sm font-semibold">${t.title}</h4>
                                            <p class="text-xs text-slate-500">${course.name} • <span class="text-rose-500 font-medium">Deadline: ${t.deadline}</span></p>
                                        </div>
                                    </div>
                                    <span class="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-50 text-amber-600 dark:bg-amber-950/50">${t.priority}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-base flex items-center space-x-2">
                            <i data-lucide="book-open-check" class="w-5 h-5 text-violet-500"></i>
                            <span>Catatan Terbaru</span>
                        </h3>
                        <button onclick="switchTab('notes')" class="text-xs font-semibold text-indigo-600 hover:underline">Lihat Semua</button>
                    </div>
                    <div class="space-y-3">
                        ${recentNotes.map(n => {
                            const course = appState.courses.find(c => c.id === n.courseId) || { name: 'Umum' };
                            return `
                                <div onclick="openNoteModalForEdit('${n.id}')" class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 cursor-pointer flex items-center justify-between">
                                    <div>
                                        <h4 class="text-sm font-semibold">${n.title}</h4>
                                        <p class="text-xs text-slate-500">${course.name} • Pertemuan ${n.meeting}</p>
                                    </div>
                                    <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 font-medium">${n.tag}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- 2. MATA KULIAH VIEW ---
function renderCoursesHTML() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 class="text-2xl font-bold">Mata Kuliah Semester Ini</h2>
                    <p class="text-sm text-slate-500">Kelola mata kuliah dan akses catatan perkuliahan.</p>
                </div>
                <button onclick="openCourseModalForCreate()" class="btn-primary flex items-center space-x-2">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                    <span>Tambah Mata Kuliah</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${appState.courses.map(c => {
                    const notesCount = appState.notes.filter(n => n.courseId === c.id).length;
                    const tasksCount = appState.tasks.filter(t => t.courseId === c.id).length;
                    return `
                        <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 flex items-center justify-center">
                                        <i data-lucide="${c.icon || 'book'}" class="w-6 h-6"></i>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <button onclick="openCourseModalForEdit('${c.id}')" class="p-1.5 text-slate-400 hover:text-indigo-600"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                                        <button onclick="deleteCourse('${c.id}')" class="p-1.5 text-slate-400 hover:text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                                    </div>
                                </div>
                                <h3 class="font-bold text-lg mb-1">${c.name}</h3>
                                <p class="text-xs text-slate-500">${notesCount} Catatan • ${tasksCount} Tugas</p>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs font-semibold">
                                    <span>Progress Belajar</span>
                                    <span>${c.progress}%</span>
                                </div>
                                <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div class="bg-indigo-600 h-full rounded-full" style="width: ${c.progress}%"></div>
                                </div>
                                <button onclick="filterNotesByCourse('${c.id}')" class="w-full mt-2 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-indigo-600 flex items-center justify-center space-x-2">
                                    <span>Buka Catatan Kuliah</span>
                                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// --- 3. CATATAN MATERI VIEW ---
function renderNotesHTML() {
    let filteredNotes = appState.notes;
    if (selectedCourseFilter !== 'all') filteredNotes = filteredNotes.filter(n => n.courseId === selectedCourseFilter);
    if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        filteredNotes = filteredNotes.filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
    }

    return `
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 class="text-2xl font-bold">Catatan & Materi Perkuliahan</h2>
                    <p class="text-sm text-slate-500">Pusat ringkasan lengkap dari seluruh pertemuan kuliah.</p>
                </div>
                <button onclick="openNoteModalForCreate()" class="btn-primary flex items-center space-x-2">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                    <span>Tambah Catatan Baru</span>
                </button>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div class="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <button onclick="setCourseFilter('all')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap ${selectedCourseFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-600'}">Semua</button>
                    ${appState.courses.map(c => `
                        <button onclick="setCourseFilter('${c.id}')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap ${selectedCourseFilter === c.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-600'}">${c.name}</button>
                    `).join('')}
                </div>
                <div class="w-full md:w-72 relative">
                    <i data-lucide="search" class="absolute left-3 top-2.5 w-4 h-4 text-slate-400"></i>
                    <input type="text" oninput="handleNotesSearch(this.value)" value="${searchQuery}" placeholder="Cari catatan..." class="form-input pl-9">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${filteredNotes.map(n => {
                    const course = appState.courses.find(c => c.id === n.courseId) || { name: 'Umum' };
                    return `
                        <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 font-semibold">${course.name}</span>
                                    <span class="text-xs text-slate-400">Pertemuan ${n.meeting}</span>
                                </div>
                                <h3 class="font-bold text-base mb-2">${n.title}</h3>
                                <p class="text-xs text-slate-500 line-clamp-3 font-mono bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">${n.content}</p>
                            </div>
                            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <span class="text-xs text-slate-400">${n.date}</span>
                                <div class="flex items-center space-x-2">
                                    <button onclick="openNoteModalForEdit('${n.id}')" class="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 text-xs font-semibold">Baca / Edit</button>
                                    <button onclick="deleteNote('${n.id}')" class="p-1.5 text-slate-400 hover:text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// --- 4. TUGAS & DEADLINE VIEW ---
function renderTasksHTML() {
    let filteredTasks = appState.tasks;
    if (taskFilterTab === 'pending') filteredTasks = filteredTasks.filter(t => !t.completed);
    if (taskFilterTab === 'completed') filteredTasks = filteredTasks.filter(t => t.completed);

    return `
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 class="text-2xl font-bold">Tugas & Deadline Akademik</h2>
                    <p class="text-sm text-slate-500">Kelola tenggat waktu tugas kuliah agar tidak terlewat.</p>
                </div>
                <button onclick="openTaskModalForCreate()" class="btn-primary flex items-center space-x-2">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                    <span>Tambah Tugas Baru</span>
                </button>
            </div>

            <div class="flex items-center space-x-2 bg-white dark:bg-[#111827] p-2 rounded-2xl border border-slate-200 dark:border-slate-800 w-fit">
                <button onclick="setTaskFilter('all')" class="px-4 py-2 rounded-xl text-xs font-semibold ${taskFilterTab === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-600'}">Semua</button>
                <button onclick="setTaskFilter('pending')" class="px-4 py-2 rounded-xl text-xs font-semibold ${taskFilterTab === 'pending' ? 'bg-indigo-600 text-white' : 'text-slate-600'}">Belum Selesai</button>
                <button onclick="setTaskFilter('completed')" class="px-4 py-2 rounded-xl text-xs font-semibold ${taskFilterTab === 'completed' ? 'bg-indigo-600 text-white' : 'text-slate-600'}">Selesai</button>
            </div>

            <div class="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
                ${filteredTasks.map(t => {
                    const course = appState.courses.find(c => c.id === t.courseId) || { name: 'Umum' };
                    return `
                        <div class="p-4 md:p-5 flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <input type="checkbox" onclick="toggleTaskCompletion('${t.id}')" ${t.completed ? 'checked' : ''} class="w-5 h-5 text-indigo-600 rounded cursor-pointer">
                                <div>
                                    <h4 class="text-sm font-semibold ${t.completed ? 'line-through text-slate-400' : ''}">${t.title}</h4>
                                    <p class="text-xs text-slate-500 mt-0.5">${course.name} • <span class="font-semibold text-rose-500">Deadline: ${t.deadline}</span></p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <span class="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-50 text-amber-600">${t.priority}</span>
                                <button onclick="deleteTask('${t.id}')" class="p-2 text-slate-400 hover:text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}


// --- 5. KALENDER VIEW (REAL TIME) ---
function renderCalendarHTML() {
    const today = new Date();

    // Mengambil bulan dan tahun saat ini
    const year = today.getFullYear();
    const month = today.getMonth();
    const todayDate = today.getDate();

    // Nama bulan Indonesia
    const monthName = today.toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric'
    });

    // Menghitung jumlah hari dalam bulan
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Menghitung posisi tanggal pertama
    // Senin = 0, Selasa = 1, ... Minggu = 6
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;

    // Membuat daftar deadline dari data tugas
    const deadlines = appState.tasks
        .filter(task => !task.completed)
        .map(task => task.deadline);

    // Membuat kotak kosong sebelum tanggal 1
    let calendarDays = '';

    for (let i = 0; i < firstDay; i++) {
        calendarDays += '<div></div>';
    }

    // Membuat seluruh tanggal secara otomatis
    for (let day = 1; day <= totalDays; day++) {
        const date = new Date(year, month, day);

        // Format tanggal lokal YYYY-MM-DD
        const dateKey = [
            year,
            String(month + 1).padStart(2, '0'),
            String(day).padStart(2, '0')
        ].join('-');

        // Mengecek deadline pada tanggal tersebut
        const hasDeadline = deadlines.includes(dateKey);

        // Mengecek apakah tanggal hari ini
        const isToday = day === todayDate;

        calendarDays += `
            <div class="p-3 rounded-xl flex flex-col
                items-center justify-center relative
                min-h-[48px]
                ${isToday
                    ? 'bg-indigo-600 text-white font-bold shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/50'
                }">

                <span>${day}</span>

                ${hasDeadline ? `
                    <span class="w-1.5 h-1.5 rounded-full
                        ${isToday ? 'bg-white' : 'bg-rose-500'}
                        absolute bottom-1.5">
                    </span>
                ` : ''}
            </div>
        `;
    }

    return `
        <div class="space-y-6">

            <div>
                <h2 class="text-2xl font-bold">
                    Kalender Akademik
                </h2>

                <p class="text-sm text-slate-500">
                    Jadwal perkuliahan dan tenggat waktu tugas.
                </p>
            </div>

            <div class="p-6 rounded-2xl bg-white
                dark:bg-[#111827]
                border border-slate-200
                dark:border-slate-800 shadow-sm space-y-6">

                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-lg capitalize">
                        ${monthName}
                    </h3>

                    <span class="text-xs text-emerald-500 font-medium">
                        ● Kalender Aktif
                    </span>
                </div>

                <div class="grid grid-cols-7 gap-2 text-center
                    text-xs font-semibold text-slate-400
                    pb-2 border-b border-slate-100
                    dark:border-slate-800">

                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                    <span>Sab</span>
                    <span>Min</span>

                </div>

                <div class="grid grid-cols-7 gap-2
                    text-center text-sm font-medium">

                    ${calendarDays}

                </div>

                <div class="flex flex-wrap gap-4 text-xs
                    text-slate-500 pt-3
                    border-t border-slate-100
                    dark:border-slate-800">

                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full
                            bg-indigo-600"></span>
                        Hari ini
                    </div>

                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full
                            bg-rose-500"></span>
                        Deadline tugas
                    </div>

                </div>

            </div>
        </div>
    `;
}

// --- 6. PENGATURAN VIEW ---
function renderSettingsHTML() {
    return `
        <div class="space-y-6 max-w-2xl">
            <div>
                <h2 class="text-2xl font-bold">Pengaturan Aplikasi</h2>
                <p class="text-sm text-slate-500">Sesuaikan profil dan data sistem My Academic Space.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 class="font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">Profil Mahasiswa</h3>
                <div>
                    <label class="form-label">Nama Mahasiswa</label>
                    <input type="text" id="set-username" value="${appState.username}" class="form-input">
                </div>
                <div>
                    <label class="form-label">Program Studi</label>
                    <input type="text" id="set-prodi" value="${appState.prodi}" class="form-input">
                </div>
                <button onclick="saveSettingsFromTab()" class="btn-primary">Simpan Perubahan</button>
            </div>
            <div class="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 class="font-bold text-base border-b border-slate-100 dark:border-slate-800 pb-3">Reset Data</h3>
                <button onclick="resetAppDemoData()" class="px-4 py-2 rounded-xl bg-rose-50 text-rose-600 text-xs font-semibold">Reset ke Data Demo Awal</button>
            </div>
        </div>
    `;
}

// --- FILTER & CRUD HELPERS ---
function setCourseFilter(id) { selectedCourseFilter = id; renderContent(); }
function handleNotesSearch(val) { searchQuery = val; renderContent(); }
function filterNotesByCourse(id) { selectedCourseFilter = id; switchTab('notes'); }
function setTaskFilter(filter) { taskFilterTab = filter; renderContent(); }
function handleGlobalSearch(q) { if (q.trim().length > 0) { searchQuery = q; switchTab('notes'); } }

function toggleTaskCompletion(id) {
    const task = appState.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveData();
        renderContent();
        showToast(task.completed ? 'Tugas selesai!' : 'Tugas dikembalikan ke pending.');
    }
}

function populateCourseSelect(elementId, selectedId = '') {
    document.getElementById(elementId).innerHTML = appState.courses.map(c => `
        <option value="${c.id}" ${c.id === selectedId ? 'selected' : ''}>${c.name}</option>
    `).join('');
}

// --- MODAL CATATAN ---
function openNoteModalForCreate() {
    document.getElementById('edit-note-id').value = '';
    document.getElementById('edit-note-title').value = '';
    document.getElementById('edit-note-meeting').value = '1';
    document.getElementById('edit-note-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('edit-note-content').value = '';
    populateCourseSelect('edit-note-course');
    document.getElementById('note-modal').classList.remove('hidden');
}

function openNoteModalForEdit(id) {
    const note = appState.notes.find(n => n.id === id);
    if (!note) return;
    document.getElementById('edit-note-id').value = note.id;
    document.getElementById('edit-note-title').value = note.title;
    document.getElementById('edit-note-meeting').value = note.meeting;
    document.getElementById('edit-note-date').value = note.date;
    document.getElementById('edit-note-content').value = note.content;
    populateCourseSelect('edit-note-course', note.courseId);
    document.getElementById('note-modal').classList.remove('hidden');
}

function closeNoteModal() { document.getElementById('note-modal').classList.add('hidden'); }

function saveNoteFromModal() {
    const id = document.getElementById('edit-note-id').value;
    const title = document.getElementById('edit-note-title').value.trim();
    const courseId = document.getElementById('edit-note-course').value;
    const meeting = parseInt(document.getElementById('edit-note-meeting').value) || 1;
    const date = document.getElementById('edit-note-date').value;
    const content = document.getElementById('edit-note-content').value.trim();

    if (!title) return showToast('Judul materi wajib diisi!');

    if (id) {
        const note = appState.notes.find(n => n.id === id);
        if (note) Object.assign(note, { title, courseId, meeting, date, content });
        showToast('Catatan diperbarui!');
    } else {
        appState.notes.unshift({ id: 'n_' + Date.now(), courseId, title, meeting, date, content, tag: 'Materi' });
        showToast('Catatan baru dibuat!');
    }
    saveData();
    closeNoteModal();
    renderContent();
}

function deleteNote(id) {
    appState.notes = appState.notes.filter(n => n.id !== id);
    saveData();
    renderContent();
    showToast('Catatan dihapus.');
}

function triggerAutosave() {
    const indicator = document.getElementById('note-autosave-indicator');
    indicator.innerHTML = `<i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i><span>Menyimpan...</span>`;
    lucide.createIcons();
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(() => {
        indicator.innerHTML = `<i data-lucide="check" class="w-3 h-3"></i><span>Semua perubahan tersimpan</span>`;
        lucide.createIcons();
    }, 800);
}

function formatText(type) {
    const textarea = document.getElementById('edit-note-content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const sel = textarea.value.substring(start, end);
    let rep = sel;
    if (type === 'bold') rep = `**${sel}**`;
    if (type === 'italic') rep = `*${sel}*`;
    if (type === 'underline') rep = `__${sel}__`;
    if (type === 'heading') rep = `\n### ${sel}\n`;
    if (type === 'bullet') rep = `\n- ${sel}`;
    if (type === 'number') rep = `\n1. ${sel}`;
    textarea.value = textarea.value.substring(0, start) + rep + textarea.value.substring(end);
    triggerAutosave();
}

// --- MODAL TUGAS ---
function openTaskModalForCreate() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-deadline').value = new Date().toISOString().split('T')[0];
    populateCourseSelect('task-course');
    document.getElementById('task-modal').classList.remove('hidden');
}

function closeTaskModal() { document.getElementById('task-modal').classList.add('hidden'); }

function saveTask() {
    const title = document.getElementById('task-title').value.trim();
    const courseId = document.getElementById('task-course').value;
    const deadline = document.getElementById('task-deadline').value;
    const priority = document.getElementById('task-priority').value;

    if (!title) return showToast('Judul tugas wajib diisi!');
    appState.tasks.unshift({ id: 't_' + Date.now(), courseId, title, deadline, priority, completed: false });
    saveData();
    closeTaskModal();
    renderContent();
    showToast('Tugas berhasil ditambahkan!');
}

function deleteTask(id) {
    appState.tasks = appState.tasks.filter(t => t.id !== id);
    saveData();
    renderContent();
    showToast('Tugas dihapus.');
}

// --- MODAL MATA KULIAH ---
function openCourseModalForCreate() {
    document.getElementById('course-edit-id').value = '';
    document.getElementById('course-name').value = '';
    document.getElementById('course-icon').value = 'book';
    document.getElementById('course-progress').value = '0';
    document.getElementById('course-modal-title').innerText = 'Tambah Mata Kuliah';
    document.getElementById('course-modal').classList.remove('hidden');
}

function openCourseModalForEdit(id) {
    const c = appState.courses.find(x => x.id === id);
    if (!c) return;
    document.getElementById('course-edit-id').value = c.id;
    document.getElementById('course-name').value = c.name;
    document.getElementById('course-icon').value = c.icon || 'book';
    document.getElementById('course-progress').value = c.progress || 0;
    document.getElementById('course-modal-title').innerText = 'Edit Mata Kuliah';
    document.getElementById('course-modal').classList.remove('hidden');
}

function closeCourseModal() { document.getElementById('course-modal').classList.add('hidden'); }

function saveCourse() {
    const id = document.getElementById('course-edit-id').value;
    const name = document.getElementById('course-name').value.trim();
    const icon = document.getElementById('course-icon').value.trim() || 'book';
    const progress = parseInt(document.getElementById('course-progress').value) || 0;

    if (!name) return showToast('Nama mata kuliah wajib diisi!');
    if (id) {
        const c = appState.courses.find(x => x.id === id);
        if (c) Object.assign(c, { name, icon, progress });
        showToast('Mata kuliah diperbarui!');
    } else {
        appState.courses.push({ id: 'c_' + Date.now(), name, icon, color: 'indigo', progress });
        showToast('Mata kuliah ditambahkan!');
    }
    saveData();
    closeCourseModal();
    renderContent();
}

function deleteCourse(id) {
    appState.courses = appState.courses.filter(c => c.id !== id);
    saveData();
    renderContent();
    showToast('Mata kuliah dihapus.');
}

// --- MODAL PROFIL ---
function openSettingsModal() {
    document.getElementById('settings-username-input').value = appState.username;
    document.getElementById('settings-prodi-input').value = appState.prodi;
    document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettingsModal() { document.getElementById('settings-modal').classList.add('hidden'); }

function saveProfileSettings() {
    const name = document.getElementById('settings-username-input').value.trim();
    const prodi = document.getElementById('settings-prodi-input').value.trim();
    if (name) {
        appState.username = name;
        appState.prodi = prodi;
        saveData();
        updateUserProfileUI();
        closeSettingsModal();
        showToast('Profil diperbarui!');
    }
}

function saveSettingsFromTab() {
    const name = document.getElementById('set-username').value.trim();
    const prodi = document.getElementById('set-prodi').value.trim();
    if (name) {
        appState.username = name;
        appState.prodi = prodi;
        saveData();
        updateUserProfileUI();
        showToast('Pengaturan disimpan!');
    }
}

function resetAppDemoData() {
    localStorage.clear();
    appState.courses = DEFAULT_COURSES;
    appState.notes = DEFAULT_NOTES;
    appState.tasks = DEFAULT_TASKS;
    appState.username = 'Mahasiswa Aktif';
    appState.prodi = 'Teknik Informatika';
    saveData();
    updateUserProfileUI();
    renderContent();
    showToast('Data berhasil di-reset ke awal.');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none'), 3000);
}