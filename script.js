// =====================================
// JOYWARDANA PANEL - INTERAKSI
// =====================================

// 1. TOGGLE SIDEBAR (mobile)
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
}

// 2. NAVIGASI MENU (ganti section)
const menuItems = document.querySelectorAll('.menu-item');
const sections = {
    dashboard: document.getElementById('dashboard'),
    services: document.getElementById('services'),
    orders: document.getElementById('orders'),
    users: document.getElementById('users'),
    settings: document.getElementById('settings')
};

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        // Hapus active dari semua menu
        menuItems.forEach(m => m.classList.remove('active'));
        this.classList.add('active');

        // Sembunyikan semua section
        Object.values(sections).forEach(sec => {
            if (sec) sec.classList.remove('active');
        });

        // Tampilkan section target
        const target = this.dataset.target;
        if (sections[target]) {
            sections[target].classList.add('active');
        }

        // Tutup sidebar di mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

// 3. DARK MODE TOGGLE
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.className = 'fas fa-sun';
        this.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
    } else {
        icon.className = 'fas fa-moon';
        this.innerHTML = '<i class="fas fa-moon"></i> Mode Gelap';
    }
});

// 4. INISIALISASI: pastikan dashboard aktif
document.addEventListener('DOMContentLoaded', function() {
    // Jika tidak ada section aktif, aktifkan dashboard
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) {
        const dash = document.getElementById('dashboard');
        if (dash) dash.classList.add('active');
    }
    // Aktifkan menu dashboard
    const activeMenu = document.querySelector('.menu-item.active');
    if (!activeMenu) {
        const firstMenu = document.querySelector('.menu-item[data-target="dashboard"]');
        if (firstMenu) firstMenu.classList.add('active');
    }
});

console.log('JoyWardana Panel siap digunakan.');
