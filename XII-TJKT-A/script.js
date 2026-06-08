function openInstagram(username) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `instagram://user?username=${username}`;
        setTimeout(() => {
            window.location.href = `https://www.instagram.com/${username}/`;
        }, 1500);
    } else {
        window.open(`https://www.instagram.com/${username}/`, '_blank');
    }
}

// Data Murid
const muridData = [
    { nama: 'ACHMAD YUSRIL ALAMSYAH', foto: 'murid/1.webp', instagram: 'https://www.instagram.com/areallight._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'ADISTYA PUTRI MAYASARI', foto: 'murid/2.webp', instagram: 'https://www.instagram.com/adstya.mya/?utm_source=ig_web_button_share_sheet' },
    { nama: 'AFFANDI WIJAYA', foto: 'murid/3.webp', instagram: 'https://www.instagram.com/hereaffand?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'AHMAD ALDO MAULANA', foto: 'murid/4.webp', instagram: 'https://www.instagram.com/alldmlna/?utm_source=ig_web_button_share_sheet' },
    { nama: 'AKHMAD YUSRIL PRATAMA', foto: 'murid/5.webp', instagram: 'https://www.instagram.com/akhmad.yusril/?utm_source=ig_web_button_share_sheet' },
    { nama: 'ANANDA TIKO PRATAMA', foto: 'murid/6.webp', instagram: 'https://www.instagram.com/ananda.tiko___/?utm_source=ig_web_button_share_sheet' },
    { nama: 'ARIK ADITYA', foto: 'murid/7.webp', instagram: 'https://www.instagram.com/arik_adiitya/?utm_source=ig_web_button_share_sheet' },
    { nama: 'AZZAHRA DESTRIFIONA MAHARANI', foto: 'murid/8.webp', instagram: 'https://www.instagram.com/dstrfioo_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'BRAM JATU PRATAMA', foto: 'murid/9.webp', instagram: 'https://www.instagram.com/dstrfioo_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'CHEALSA GRANDIST CLARISTA', foto: 'murid/10.webp', instagram: 'https://www.instagram.com/_xychaaz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'DANDI SUTRESNO', foto: 'murid/11.webp', instagram: 'https://www.instagram.com/danxei37?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'DEVAN NERO ARI SANDY', foto: 'murid/12.webp', instagram: 'https://www.instagram.com/neetnero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'EFRAN AFRIZAL RADITYA', foto: 'murid/13.webp', instagram: 'https://www.instagram.com/frannzz_12/?utm_source=ig_web_button_share_sheet' },
    { nama: 'FERENCY ANDREANSYAH SETIAWAN', foto: 'murid/14.webp', instagram: 'https://www.instagram.com/idk10093/?utm_source=ig_web_button_share_sheet' },
    { nama: 'GALIH RAKHA FAUZITAMA', foto: 'murid/15.webp', instagram: 'https://www.instagram.com/glihrakhaa/?utm_source=ig_web_button_share_sheet' },
    { nama: 'HURIN SYALMA AYU MAHARANI', foto: 'murid/16.webp', instagram: 'https://www.instagram.com/uyenn725?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'JIHAN SHINTA PERMATASARI', foto: 'murid/17.webp', instagram: 'https://www.instagram.com/jihanrahmaa12_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'KEYSHA DEEP XAVIER', foto: 'murid/18.webp', instagram: 'https://www.instagram.com/kdx.17s/?utm_source=ig_web_button_share_sheet' },
    { nama: 'MANDAKA ARDIAN FAHRIDINATA', foto: 'murid/19.webp', instagram: 'https://instagram.com/username' },
    { nama: 'MOCHAMMAD ALIYUL SALMAN', foto: 'murid/20.webp', instagram: 'https://www.instagram.com/4lisalman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'MUAMAR GOCI ALIAWI', foto: 'murid/21.webp', instagram: 'https://www.instagram.com/muamar.goci__/?utm_source=ig_web_button_share_sheet' },
    { nama: 'MUHAMMAD HUDA LUTHFI SAPUTRA', foto: 'murid/22.webp', instagram: 'https://www.instagram.com/luthfisaputra64?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'MUHAMMAD RENGGA PRATAMA', foto: 'murid/23.webp', instagram: 'https://www.instagram.com/prrttmaaa_/?utm_source=ig_web_button_share_sheet' },
    { nama: 'NUR FARIDDAH', foto: 'murid/24.webp', instagram: 'https://www.instagram.com/nffrda/?utm_source=ig_web_button_share_sheet' },
    { nama: 'OKA DEVA HADI PUTTA', foto: 'murid/25.webp', instagram: 'https://www.instagram.com/_okasukacewe/?utm_source=ig_web_button_share_sheet' },
    { nama: 'QAISRA MUHAMMAD AWANG HAWARIY', foto: 'murid/26.webp', instagram: 'https://www.instagram.com/awangpck.id/?utm_source=ig_web_button_share_sheet' },
    { nama: 'REVA AULIANA DWI RAFFLESTASARI', foto: 'murid/27.webp', instagram: 'https://www.instagram.com/rvaauliadr/?utm_source=ig_web_button_share_sheet' },
    { nama: 'RIKY HENDRAWAN EKA SYAH PUTRA', foto: 'murid/28.webp', instagram: 'https://www.instagram.com/riii.kkyyy/?utm_source=ig_web_button_share_sheet' },
    { nama: 'SAPTA ADITYA NUGRAHA', foto: 'murid/29.webp', instagram: 'https://www.instagram.com/its.s4nn/?utm_source=ig_web_button_share_sheet' },
    { nama: 'SATYA SANDY MAULANA', foto: 'murid/30.webp', instagram: 'https://www.instagram.com/st.sandy_/?utm_source=ig_web_button_share_sheet' },
    { nama: 'TATAN ANDREAN ZELINO', foto: 'murid/31.webp', instagram: 'https://www.instagram.com/t_andreanz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { nama: 'YANA RAISYA RAHMA ALYA SABRINA', foto: 'murid/32.webp', instagram: 'https://instagram.com/username' },
];

// Data Kenangan
const kenanganData = [
    'galeri/1.jpg','galeri/2.jpg','galeri/3.jpg','galeri/4.jpg',
    'galeri/5.jpg','galeri/6.jpg','galeri/7.jpg','galeri/8.jpg',
    'galeri/9.jpg','galeri/10.jpg','galeri/11.jpg','galeri/12.jpg',
    'galeri/13.jpg','galeri/14.jpg','galeri/15.jpg','galeri/16.jpg',
    'galeri/17.jpg'
];

// Elements
const muridGrid = document.getElementById('muridGrid');
const kenanganGrid = document.getElementById('kenanganGrid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// =============================================
// RENDER MURID - LAZY LOAD
// =============================================
function renderMurid() {
    muridGrid.innerHTML = muridData.map((murid) => {
        const igUrl = murid.instagram;
        const username = igUrl
            .replace('https://instagram.com/', '')
            .replace('https://www.instagram.com/', '')
            .split('?')[0]
            .replace(/\/$/, '');

        return `
            <div class="murid-card">
                <div class="murid-foto">
                    <img
                        data-src="${murid.foto}"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                        alt="${murid.nama}"
                        class="lazy"
                        width="130"
                        height="130"
                        decoding="async">
                </div>
                <div class="murid-name">${murid.nama}</div>
                <a href="https://www.instagram.com/${username}/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="murid-instagram">
                    <span class="murid-ig-btn">
                        <i class="fab fa-instagram"></i>
                        Instagram
                    </span>
                </a>
            </div>
        `;
    }).join('');

    // Intersection Observer untuk lazy load foto
    const lazyImages = document.querySelectorAll('img.lazy');
    const imgObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                img.classList.remove('lazy');
                obs.unobserve(img);
            }
        });
    }, { rootMargin: '200px 0px' });

    lazyImages.forEach(img => imgObserver.observe(img));
}

// Render Kenangan
function renderKenangan() {
    kenanganGrid.innerHTML = kenanganData.map(src => `
        <div class="kenangan-card">
            <img src="${src}" alt="Kenangan" loading="lazy" decoding="async">
        </div>
    `).join('');
}

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > window.innerHeight * 0.7) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Section reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Modal Zoom Kenangan
const kenanganModal = document.getElementById('kenanganModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

document.addEventListener('click', function(e) {
    if (e.target.closest('.kenangan-card')) {
        const imgSrc = e.target.closest('.kenangan-card').querySelector('img').src;
        modalImage.src = imgSrc;
        kenanganModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

closeModal.addEventListener('click', () => {
    kenanganModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

kenanganModal.addEventListener('click', function(e) {
    if (e.target === kenanganModal) {
        kenanganModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && kenanganModal.style.display === 'block') {
        kenanganModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMurid();
    renderKenangan();
});