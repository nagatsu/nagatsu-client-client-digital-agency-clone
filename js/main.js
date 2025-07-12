// Model-A Design System - Government Site Clone JavaScript
// JDS準拠インタラクティブ要素

document.addEventListener('DOMContentLoaded', function() {
    console.log('デジタル庁サイトクローン - Model-A Design System 読み込み完了');
    
    // Model-A コンポーネント初期化
    initializeComponents();
    
    // アクセシビリティ強化
    enhanceAccessibility();
});

function initializeComponents() {
    // Model-A BaseButton hover effects
    const buttons = document.querySelectorAll('.bg-blue-600');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Model-A BaseCard hover effects
    const cards = document.querySelectorAll('.shadow-sm');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function enhanceAccessibility() {
    // JDS準拠アクセシビリティ強化
    
    // フォーカス可視化
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // モーダルなどを閉じる処理（今後追加）
            console.log('Escape key pressed');
        }
    });
}

// Model-A統計カウンターアニメーション
function animateCounters() {
    const counters = document.querySelectorAll('.text-3xl');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.textContent.replace(/[^\d.]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/[\d.]+/, target.toString());
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/[\d.]+/, Math.floor(current).toString());
            }
        }, 20);
    });
}

// スクロールで統計アニメーション実行
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 統計セクションを監視
const statsSection = document.querySelector('.grid-cols-4')?.parentElement;
if (statsSection) {
    observer.observe(statsSection);
}