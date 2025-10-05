// 背景のパーティクル設定
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // パーティクルの数
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // パーティクルの色
        },
        "shape": {
            "type": "star", // パーティクルの形
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true
        },
        "size": {
            "value": 4, // パーティクルの大きさ
            "random": true
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 2, // パーティクルの動く速さ
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes":{
            "bubble":{
                "distance":200,
                "size":8,
                "duration":2,
                "opacity":0.8,
                "speed":3
            },
            "push":{
                "particles_nb":4
            }
        }
    },
    "retina_detect": true
});


// スクロールで要素をふわっと表示させる
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));


// プレゼントボックスのクリックイベント
const giftBox = document.getElementById('gift-box');
const finalMessage = document.getElementById('final-message');

giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    // メッセージの表示/非表示を少し遅延させる
    setTimeout(() => {
        finalMessage.classList.toggle('show');
    }, 300);
});