document.addEventListener('DOMContentLoaded', () => {

    // 1. هالة بنفسجية متوهجة خلف كلمة KONOHA
    const brandLogo = document.querySelector('.nav-brand span');
    if (brandLogo) {
        brandLogo.setAttribute('data-text', brandLogo.textContent);
        brandLogo.classList.add('glow-behind-text');
    }

    // 2. البرق الأرجواني (يظهر فوراً عند التحميل ثم يكرر عشوائياً)
    function triggerLightning() {
        const lightning = document.createElement('div');
        lightning.className = 'lightning-flash';
        document.body.appendChild(lightning);

        setTimeout(() => {
            lightning.style.opacity = '0.35';
            setTimeout(() => {
                lightning.style.opacity = '0';
                setTimeout(() => lightning.remove(), 300);
            }, 100);
        }, 50);
    }

    // تشغيل ضربة برق أول ما تفتح الصفحة
    setTimeout(triggerLightning, 1000);
    // تكرار البرق كل 4 لـ 7 ثوانٍ
    setInterval(triggerLightning, 5000);

    // 3. شريط الاقتباسات المتحرك
    const dynamicQuotes = [
        "🍃 مرحباً بك في قرية كونوها • اختر مسارك بحكمة",
        "⚡ تخطَّ حدودك هنا والآن.. أو ارحل! — يامي سوكيهيرو",
        "⚔️ قوة القرية تكمن في إرادة النار والاتحاد",
        "📜 تفقّد دستور القوانين وسجل الألقاب قبل التثبيت"
    ];

    const tickerEl = document.querySelector('.news-ticker marquee') || document.querySelector('.news-ticker');
    if (tickerEl) {
        let quoteIndex = 0;
        tickerEl.innerHTML = `<span id="typewriterText" style="color:#fff; font-weight:bold;"></span>`;
        const textContainer = document.getElementById('typewriterText');

        function typeEffect() {
            let currentText = dynamicQuotes[quoteIndex];
            let charIndex = 0;
            textContainer.innerHTML = '';
            
            let timer = setInterval(() => {
                if (charIndex < currentText.length) {
                    textContainer.innerHTML += currentText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        quoteIndex = (quoteIndex + 1) % dynamicQuotes.length;
                        typeEffect();
                    }, 3500);
                }
            }, 50);
        }
        typeEffect();
    }
});
// تفعيل زر القائمة للجوال
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-toggle') || document.querySelector('.fa-bars');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
