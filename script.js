// ============================================================
// JOYWARDANA STORE - INTERAKSI LENGKAP (chat, hamburger, dll)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. HAMBURGER MOBILE
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });
        // Tutup jika klik di luar
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }

    // 2. CHAT TOGGLE (buka/tutup widget)
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const chatClose = document.getElementById('chatClose');

    function openChat() {
        chatWidget.classList.add('open');
        chatToggle.style.display = 'none';
    }
    function closeChat() {
        chatWidget.classList.remove('open');
        chatToggle.style.display = 'flex';
    }

    if (chatToggle) {
        chatToggle.addEventListener('click', openChat);
    }
    if (chatClose) {
        chatClose.addEventListener('click', closeChat);
    }

    // 3. QUICK REPLY BUTTONS (kirim pesan otomatis)
    const qrButtons = document.querySelectorAll('.qr-btn');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatBody = document.getElementById('chatBody');

    function addUserMessage(text) {
        if (!chatBody) return;
        const div = document.createElement('div');
        div.className = 'chat-msg user';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'flex-end';
        div.style.marginBottom = '8px';
        div.innerHTML = `<div class="msg-bubble" style="background:#0d6efd;color:white;border-radius:18px 18px 4px 18px;padding:10px 18px;max-width:85%;">${text}</div>
                         <div class="msg-time" style="margin-right:6px;">Sekarang</div>`;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    qrButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const reply = this.dataset.reply || this.innerText.trim();
            addUserMessage(reply);
            // Simulasi balasan bot (delay 1 detik)
            setTimeout(() => {
                const botDiv = document.createElement('div');
                botDiv.className = 'chat-msg bot';
                botDiv.innerHTML = `<div class="msg-bubble">Terima kasih! Tim kami akan segera merespon pertanyaan tentang "${reply}".</div>
                                    <div class="msg-time">Baru saja</div>`;
                chatBody.appendChild(botDiv);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 800);
        });
    });

    // 4. KIRIM PESAN VIA INPUT + ENTER
    function sendMessage() {
        if (!chatInput || !chatBody) return;
        const text = chatInput.value.trim();
        if (text === '') return;
        addUserMessage(text);
        chatInput.value = '';
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'chat-msg bot';
            botDiv.innerHTML = `<div class="msg-bubble">Terima kasih atas pesan Anda. Support akan menghubungi segera.</div>
                                <div class="msg-time">Baru saja</div>`;
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 700);
    }

    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // 5. TOMBOL "TENTANG KAMI" & "HUBUNGI" (alert demo)
    const btnTentang = document.querySelector('.btn-primary');
    const btnHubungi = document.querySelector('.btn-secondary');
    if (btnTentang) {
        btnTentang.addEventListener('click', function(e) {
            e.preventDefault();
            alert('JoyWardana Store - Menyediakan hosting enterprise-grade sejak 2024.');
        });
    }
    if (btnHubungi) {
        btnHubungi.addEventListener('click', function(e) {
            e.preventDefault();
            openChat();
        });
    }

    console.log('JoyWardana Store siap - semua fitur aktif.');
});
