/* ================================================
   CART SYSTEM
================================================ */
let cart = [];

function showSection(sectionName, e) {
    document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(sectionName).classList.add('active');
    if (e && e.target) e.target.classList.add('active');
}

function addToCart(name, price, btn) {
    cart.push({ name, price });
    updateCartDisplay();
    const orig = btn.textContent;
    btn.textContent = '✅ Ditambahkan!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = 'linear-gradient(135deg,#f472b6,#ec4899)';
    }, 1500);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    renderCartItems();
}

function updateCartDisplay() {
    const count = cart.length;
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-total').textContent = fmt(total);
    document.getElementById('cartTotalDisplay').textContent = 'Rp ' + fmt(total);
    document.getElementById('qrisSection').style.display = total > 0 ? 'block' : 'none';
}

function renderCartItems() {
    const el = document.getElementById('cartItems');
    if (!cart.length) {
        el.innerHTML = '<p style="text-align:center;color:#9ca3af;padding:40px;font-size:1.1rem;">Keranjang kosong 😊</p>';
        return;
    }
    el.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${fmt(item.price)}</div>
            </div>
            <button class="delete-btn" onclick="removeFromCart(${i})">Hapus</button>
        </div>
    `).join('');
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) renderCartItems();
}

function fmt(n) {
    return new Intl.NumberFormat('id-ID').format(n);
}

/* ================================================
   QR SCANNER — WORKS ON MOBILE & LAPTOP
================================================ */
let videoStream  = null;
let scanInterval = null;
let scanning     = false;

async function startQRScanner() {
    setStatus('idle', 'Memulai kamera...');
    document.getElementById('permissionHint').classList.remove('show');
    document.getElementById('scanLine').style.display = 'none';
    document.getElementById('qrScannerModal').classList.add('active');

    stopStream();

    const video = document.getElementById('qrVideo');

    const constraintSets = [
        { video: { facingMode: { exact: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } },
        { video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } },
        { video: { width: { ideal: 1280 }, height: { ideal: 720 } } },
        { video: true }
    ];

    let stream  = null;
    let lastErr = null;

    for (const constraints of constraintSets) {
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            break;
        } catch (err) {
            lastErr = err;
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') break;
        }
    }

    if (!stream) {
        handleCameraError(lastErr);
        return;
    }

    videoStream = stream;
    video.srcObject = stream;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('autoplay', 'true');
    video.muted = true;

    try { await video.play(); } catch (e) { /* some browsers auto-play */ }

    waitForVideoReady(video);
}

function waitForVideoReady(video, attempts) {
    attempts = attempts || 0;
    if (attempts > 40) {
        setStatus('error', '❌ Kamera lambat merespons. Coba tutup & buka lagi.');
        return;
    }

    if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
        setStatus('scanning', '🔍 Scanning QR Code...');
        document.getElementById('scanLine').style.display = 'block';
        scanning     = true;
        scanInterval = setInterval(() => scanFrame(video), 120);
    } else {
        setTimeout(() => waitForVideoReady(video, attempts + 1), 150);
    }
}

function scanFrame(video) {
    if (!scanning) return;
    if (video.readyState < 2 || video.videoWidth === 0) return;

    const canvas = document.createElement('canvas');
    canvas.width  = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let imageData;
    try {
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    } catch(e) { return; }

    const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
    });

    if (code && code.data) {
        scanning = false;
        clearInterval(scanInterval);
        setStatus('success', '✅ QR Terdeteksi! Memproses...');
        document.getElementById('scanLine').style.display = 'none';

        setTimeout(() => {
            stopStream();
            document.getElementById('qrScannerModal').classList.remove('active');
            showSuccessModal();
        }, 1000);
    }
}

function handleCameraError(err) {
    console.error('Camera error:', err);
    let msg = '❌ Tidak dapat membuka kamera.';

    if (!err) {
        msg = '❌ Kamera tidak tersedia.';
    } else if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        msg = '🚫 Izin kamera ditolak. Lihat panduan di bawah.';
        document.getElementById('permissionHint').classList.add('show');
    } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        msg = '📷 Tidak ada kamera ditemukan di perangkat ini.';
    } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        msg = '🔒 Kamera sedang dipakai aplikasi lain. Tutup aplikasi lain dulu.';
    } else if (err.name === 'OverconstrainedError') {
        msg = '⚠️ Kamera tidak support. Mencoba kamera alternatif...';
    } else if (err.name === 'NotSupportedError') {
        msg = '🚫 Browser ini tidak mendukung kamera. Gunakan Chrome/Firefox/Safari.';
    } else if (err.name === 'AbortError') {
        msg = '⚠️ Akses kamera dibatalkan. Coba lagi.';
    }

    setStatus('error', msg);
}

function stopStream() {
    if (scanInterval) { clearInterval(scanInterval); scanInterval = null; }
    if (videoStream) {
        videoStream.getTracks().forEach(t => t.stop());
        videoStream = null;
    }
    const video = document.getElementById('qrVideo');
    if (video) video.srcObject = null;
    scanning = false;
}

function stopQRScanner() {
    stopStream();
    document.getElementById('qrScannerModal').classList.remove('active');
    document.getElementById('scanLine').style.display = 'none';
    document.getElementById('permissionHint').classList.remove('show');
    setStatus('idle', 'Kamera ditutup.');
}

function setStatus(type, msg) {
    const el = document.getElementById('scannerStatus');
    el.className = 'scanner-status status-' + type;
    el.textContent = msg;
}

/* ================================================
   SUCCESS + PAYMENT COMPLETE
================================================ */
function showSuccessModal() {
    document.getElementById('successModal').style.display = 'flex';
    cart = [];
    updateCartDisplay();
}

function completePayment() {
    document.getElementById('successModal').style.display = 'none';
    document.getElementById('cartModal').classList.remove('active');
}

/* ================================================
   EVENT LISTENERS
================================================ */
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) toggleCart();
});

document.getElementById('qrScannerModal').addEventListener('click', function(e) {
    if (e.target === this) stopQRScanner();
});

document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) completePayment();
});

document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    const sm = document.getElementById('successModal');
    const qm = document.getElementById('qrScannerModal');
    const cm = document.getElementById('cartModal');
    if (sm.style.display === 'flex') completePayment();
    else if (qm.classList.contains('active')) stopQRScanner();
    else if (cm.classList.contains('active')) toggleCart();
});

document.addEventListener('visibilitychange', function() {
    if (document.hidden && scanning) stopStream();
});

window.addEventListener('orientationchange', function() {
    if (scanning) {
        stopQRScanner();
        setTimeout(startQRScanner, 600);
    }
});

// Init
updateCartDisplay();
