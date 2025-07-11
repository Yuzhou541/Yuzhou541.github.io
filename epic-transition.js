// epic-transition.js
document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar-frame img');
    // 预加载头像
    const avatarImg = new Image();
    avatarImg.src = './avatar.jpg';
    avatarImg.onload = function() {
        document.querySelector('#avatar-frame img').style.opacity = '1';
    };
    
    avatar.addEventListener('click', function() {
        startSwirlAnimation();
    });
});

function startSwirlAnimation() {
    const swirlContainer = document.createElement('div');
    swirlContainer.id = 'swirl-container';
    swirlContainer.style.position = 'fixed';
    swirlContainer.style.top = '0';
    swirlContainer.style.left = '0';
    swirlContainer.style.width = '100%';
    swirlContainer.style.height = '100%';
    swirlContainer.style.zIndex = '1000';
    swirlContainer.style.pointerEvents = 'none';
    document.body.appendChild(swirlContainer);

    const avatar = document.querySelector('#avatar-frame');
    const avatarRect = avatar.getBoundingClientRect();
    const avatarCenter = {
        x: avatarRect.left + avatarRect.width / 2,
        y: avatarRect.top + avatarRect.height / 2
    };

    // 创建5个漩涡层增强混沌效果
    const swirlLayers = [];
    for (let i = 0; i < 5; i++) {
        const swirl = document.createElement('div');
        swirl.style.position = 'absolute';
        swirl.style.width = '150px';
        swirl.style.height = '150px';
        swirl.style.borderRadius = '50%';
        
        // 不同层次的漩涡使用不同颜色和样式
        if (i === 0) {
            swirl.style.background = `
                conic-gradient(
                    from 0deg,
                    rgba(0, 10, 20, 0.95) 0%,
                    rgba(0, 30, 60, 0.95) 20%,
                    rgba(5, 5, 15, 0.95) 30%,
                    rgba(0, 30, 60, 0.95) 40%,
                    rgba(5, 5, 15, 0.95) 50%,
                    rgba(0, 30, 60, 0.95) 60%,
                    rgba(5, 5, 15, 0.95) 70%,
                    rgba(0, 30, 60, 0.95) 80%,
                    rgba(5, 5, 15, 0.95) 90%,
                    rgba(0, 10, 20, 0.95) 100%
                )
            `;
        } else if (i === 1) {
            swirl.style.background = `
                radial-gradient(
                    circle,
                    rgba(0, 60, 120, 0.8) 0%,
                    rgba(0, 30, 90, 0.9) 50%,
                    rgba(0, 10, 40, 0.95) 100%
                )
            `;
        } else if (i === 2) {
            swirl.style.background = `
                repeating-radial-gradient(
                    circle at center,
                    rgba(0, 80, 150, 0.7) 0%,
                    rgba(0, 40, 100, 0.8) 10%,
                    rgba(0, 20, 60, 0.9) 20%
                )
            `;
        } else if (i === 3) {
            swirl.style.background = `
                conic-gradient(
                    from 180deg,
                    rgba(10, 0, 30, 0.8) 0%,
                    rgba(20, 0, 60, 0.85) 25%,
                    rgba(30, 0, 90, 0.9) 50%,
                    rgba(20, 0, 60, 0.85) 75%,
                    rgba(10, 0, 30, 0.8) 100%
                )
            `;
        } else {
            swirl.style.background = `
                radial-gradient(
                    circle,
                    rgba(0, 0, 20, 0.9) 0%,
                    rgba(0, 0, 40, 0.8) 50%,
                    rgba(0, 0, 60, 0.7) 100%
                )
            `;
        }
        
        swirl.style.left = `${avatarCenter.x - 75}px`;
        swirl.style.top = `${avatarCenter.y - 75}px`;
        swirl.style.transformOrigin = 'center center';
        swirl.style.boxShadow = `0 0 40px rgba(0,60,120,0.8)`;
        swirlContainer.appendChild(swirl);
        swirlLayers.push(swirl);
    }

    // 更强烈的漩涡动画
    let scale = 1;
    let opacity = 1;
    const rotations = [0, 180, 90, 270, 45]; // 不同层次不同旋转方向
    const swirlAnimation = setInterval(() => {
        scale += 0.18;  // 加快放大速度
        opacity -= 0.012;
        
        swirlLayers.forEach((swirl, index) => {
            rotations[index] += (index + 1) * 15;  // 不同层次不同旋转速度
            swirl.style.transform = `scale(${scale * (1 + index * 0.15)}) rotate(${rotations[index]}deg)`;
            swirl.style.opacity = opacity * (1 - index * 0.08);
        });
        
        if (scale > 20) {
            clearInterval(swirlAnimation);
            showEpicScrollPage();
        }
    }, 10);
}

let narrationAudio = null; // 全局保存音频对象
let fireAudio = null;     // 全局保存火焰音频对象

function showEpicScrollPage() {
    const swirlContainer = document.getElementById('swirl-container');
    if (swirlContainer) {
        swirlContainer.remove();
    }

    const epicPage = document.createElement('div');
    epicPage.id = 'epic-scroll-page';
    epicPage.style.position = 'fixed';
    epicPage.style.top = '0';
    epicPage.style.left = '0';
    epicPage.style.width = '100%';
    epicPage.style.height = '100%';
    epicPage.style.zIndex = '1001';
    epicPage.style.background = 'url("./assets/images/background.jpg") center/cover no-repeat';
    epicPage.style.display = 'flex';
    epicPage.style.flexDirection = 'column';
    epicPage.style.justifyContent = 'center';
    epicPage.style.alignItems = 'center';
    epicPage.style.opacity = '0';
    epicPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(epicPage);

    // 隐藏时钟控制按钮
    const clockToggle = document.querySelector('.clock-toggle');
    if (clockToggle) clockToggle.style.display = 'none';

    const scroll = document.createElement('div');
    scroll.id = 'epic-scroll';
    scroll.style.position = 'relative';
    scroll.style.width = '70%';
    scroll.style.minHeight = '60%';
    scroll.style.maxWidth = '800px';
    scroll.style.backgroundImage = 'url("./assets/images/old-paper-texture.jpg")';
    scroll.style.backgroundSize = 'cover';
    scroll.style.borderRadius = '5px';
    scroll.style.boxShadow = `
        0 0 30px rgba(200, 160, 100, 0.5),
        inset 0 0 50px rgba(0,0,0,0.3),
        0 0 0 10px rgba(139, 69, 19, 0.3),
        0 0 0 15px rgba(160, 82, 45, 0.2),
        0 0 0 20px rgba(139, 69, 19, 0.1)
    `;
    scroll.style.padding = '40px';
    scroll.style.opacity = '0';
    scroll.style.transform = 'scale(0.9)';
    scroll.style.transition = 'all 1s ease-in-out';
    scroll.style.overflow = 'hidden';
    epicPage.appendChild(scroll);

    // 卷轴边缘装饰
    const scrollEdgeLeft = document.createElement('div');
    scrollEdgeLeft.style.position = 'absolute';
    scrollEdgeLeft.style.left = '0';
    scrollEdgeLeft.style.top = '0';
    scrollEdgeLeft.style.bottom = '0';
    scrollEdgeLeft.style.width = '40px';
    scrollEdgeLeft.style.backgroundImage = 'url("./assets/images/scroll-texture.png")';
    scrollEdgeLeft.style.backgroundSize = 'contain';
    scrollEdgeLeft.style.backgroundRepeat = 'repeat-y';
    scrollEdgeLeft.style.filter = 'sepia(100%) brightness(0.8)';
    scrollEdgeLeft.style.boxShadow = 'inset 5px 0 10px rgba(0,0,0,0.2)';
    scroll.appendChild(scrollEdgeLeft);

    const scrollEdgeRight = document.createElement('div');
    scrollEdgeRight.style.position = 'absolute';
    scrollEdgeRight.style.right = '0';
    scrollEdgeRight.style.top = '0';
    scrollEdgeRight.style.bottom = '0';
    scrollEdgeRight.style.width = '40px';
    scrollEdgeRight.style.backgroundImage = 'url("./assets/images/scroll-texture.png")';
    scrollEdgeRight.style.backgroundSize = 'contain';
    scrollEdgeRight.style.backgroundRepeat = 'repeat-y';
    scrollEdgeRight.style.filter = 'sepia(100%) brightness(0.8)';
    scrollEdgeRight.style.boxShadow = 'inset -5px 0 10px rgba(0,0,0,0.2)';
    scroll.appendChild(scrollEdgeRight);

    const scrollContent = document.createElement('div');
    scrollContent.style.position = 'relative';
    scrollContent.style.zIndex = '2';
    scrollContent.style.height = '100%';
    scrollContent.style.display = 'flex';
    scrollContent.style.flexDirection = 'column';
    scrollContent.style.justifyContent = 'center';
    scrollContent.style.alignItems = 'center';
    scrollContent.style.textAlign = 'center';
    scroll.appendChild(scrollContent);

    const epicText = document.createElement('div');
    epicText.id = 'epic-text';
    epicText.innerHTML = `Traveler of silent paths, by your insight and unwavering will, the ancient seal lies broken. What once dwelt beyond mortal ken now unfolds before thine eyes: a hidden realm, long shrouded in shadow.`;
    epicText.style.fontFamily = '"Cinzel", "Times New Roman", serif';
    epicText.style.fontSize = '1.8rem';
    epicText.style.lineHeight = '1.6';
    epicText.style.color = '#3a2c1a';
    epicText.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
    epicText.style.marginBottom = '40px';
    epicText.style.opacity = '0';
    epicText.style.transform = 'translateY(20px)';
    epicText.style.transition = 'all 1s ease-in-out 0.5s';
    scrollContent.appendChild(epicText);

    // 修改后的火焰按钮
    const flameButton = document.createElement('div');
    flameButton.id = 'flame-button';
    flameButton.style.position = 'absolute';
    flameButton.style.bottom = '30px';
    flameButton.style.right = '30px';
    flameButton.style.width = '40px';
    flameButton.style.height = '60px';
    flameButton.style.cursor = 'pointer';
    flameButton.style.zIndex = '3';
    flameButton.innerHTML = `
        <div id="flame" style="
            width: 20px; 
            height: 30px; 
            margin: 0 auto; 
            position: relative;
            animation: flicker 0.5s infinite alternate;
        ">
            <div style="
                position: absolute; 
                width: 100%; 
                height: 100%; 
                background: linear-gradient(to top, 
                    rgba(255,100,0,0.9) 0%, 
                    rgba(255,200,0,0.8) 50%,
                    rgba(255,255,200,0.5) 100%
                ); 
                border-radius: 50% 50% 20% 20%; 
                filter: blur(3px); 
                box-shadow: 
                    0 0 10px rgba(255,100,0,0.8),
                    0 0 20px rgba(255,200,0,0.6);
            "></div>
        </div>
        <div style="
            text-align: center; 
            margin-top: 5px; 
            font-family: 'Cinzel', serif; 
            color: '#3a2c1a'; 
            font-size: 0.9rem;
        ">Ignite</div>
    `;
    scrollContent.appendChild(flameButton);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes flicker {
            0%, 100% {
                transform: scale(1) translateY(0);
                opacity: 0.9;
            }
            50% {
                transform: scale(1.05) translateY(-2px);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        epicPage.style.opacity = '1';
        
        setTimeout(() => {
            scroll.style.opacity = '1';
            scroll.style.transform = 'scale(1)';
            
            setTimeout(() => {
                epicText.style.opacity = '1';
                epicText.style.transform = 'translateY(0)';
                
                // 播放旁白声音和火焰音效
                playNarration();
                playFireSound();
            }, 500);
        }, 500);
    }, 100);

    flameButton.addEventListener('click', function() {
        startFlameAnimation();
    });
}

function playNarration() {
    // 停止之前的音频
    if (narrationAudio) {
        narrationAudio.pause();
        narrationAudio.currentTime = 0;
    }
    
    narrationAudio = new Audio('./assets/audio/prologue.m4a');
    narrationAudio.volume = 0.7;
    narrationAudio.play().catch(e => console.log('Audio play failed:', e));
}

function playFireSound() {
    // 停止之前的火焰音频
    if (fireAudio) {
        fireAudio.pause();
        fireAudio.currentTime = 0;
    }
    
    fireAudio = new Audio('./assets/audio/fire-sound.mp3');
    fireAudio.volume = 1.0; // 音量变为原来的两倍
    fireAudio.loop = true;  // 循环播放
    fireAudio.play().catch(e => console.log('Fire audio play failed:', e));
}

function startFlameAnimation() {
    const flame = document.getElementById('flame');
    const scroll = document.getElementById('epic-scroll');
    const epicPage = document.getElementById('epic-scroll-page');
    
    // 创建火焰覆盖层 - 使用GIF动画
    const flameOverlay = document.createElement('div');
    flameOverlay.id = 'flame-overlay';
    flameOverlay.style.position = 'fixed';
    flameOverlay.style.top = '0';
    flameOverlay.style.left = '0';
    flameOverlay.style.width = '100%';
    flameOverlay.style.height = '100%';
    flameOverlay.style.background = 'url("./assets/animation/fire-animation.gif") center/cover no-repeat';
    flameOverlay.style.zIndex = '1002';
    flameOverlay.style.opacity = '0';
    flameOverlay.style.transition = 'opacity 1.5s ease-in-out';
    document.body.appendChild(flameOverlay);
    
    // 渐入效果
    setTimeout(() => {
        flameOverlay.style.opacity = '1';
        
        // 转场到博客页面
        setTimeout(() => {
            transitionToBlogPage();
        }, 4000);
    }, 100);
}

function stopAllSounds() {
    if (narrationAudio) {
        narrationAudio.pause();
        narrationAudio.currentTime = 0;
    }
    if (fireAudio) {
        fireAudio.pause();
        fireAudio.currentTime = 0;
    }
}

function transitionToBlogPage() {
    stopAllSounds(); // 停止所有声音
    
    const blogPage = document.createElement('div');
    blogPage.id = 'blog-page';
    blogPage.style.position = 'fixed';
    blogPage.style.top = '0';
    blogPage.style.left = '0';
    blogPage.style.width = '100%';
    blogPage.style.height = '100%';
    blogPage.style.zIndex = '1003';
    blogPage.style.overflow = 'hidden';
    blogPage.style.opacity = '0';
    blogPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(blogPage);
    
    // 添加博客页面样式
    const blogStyles = document.createElement('style');
    blogStyles.textContent = `
        /* 博客页面样式 */
        .blog-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('background.png') center/cover no-repeat;
            z-index: -1;
            filter: brightness(0.4) blur(1px);
        }
        
        .blog-container {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            width: 300%;
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .blog-section {
            width: 33.333%;
            height: 100%;
            padding: 100px 5% 80px;
            overflow-y: auto;
            position: relative;
        }
        
        .blog-header {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
            padding-bottom: 25px;
        }
        
        .blog-title {
            font-family: 'Dancing Script', cursive;
            font-size: 3.5rem;
            color: #64ffda;
            margin-bottom: 20px;
            text-shadow: 0 0 15px rgba(100, 255, 218, 0.4);
            letter-spacing: 3px;
        }
        
        .nav-bar {
            display: flex;
            justify-content: center;
            background: rgba(10, 25, 47, 0.85);
            border-radius: 50px;
            padding: 15px 40px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }
        
        .nav-item {
            font-family: 'Cinzel', serif;
            font-size: 1.2rem;
            padding: 10px 25px;
            margin: 0 15px;
            cursor: pointer;
            position: relative;
            color: #8892b0;
            transition: all 0.3s ease;
            z-index: 2;
        }
        
        .nav-item.active {
            color: #64ffda;
        }
        
        .nav-divider {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.8rem;
            color: #64ffda;
            opacity: 0.3;
        }
        
        .sidebar {
            position: fixed;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            width: 25%;
            background: rgba(17, 34, 64, 0.85);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            z-index: 10;
            transition: top 0.3s ease;
        }
        
        .avatar-container {
            text-align: center;
            margin-bottom: 25px;
        }
        
        .avatar-frame {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 3px solid #64ffda;
            margin: 0 auto 20px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(100, 255, 218, 0.3);
        }
        
        .avatar-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .sidebar-name {
            font-family: 'Cinzel', serif;
            font-size: 1.8rem;
            color: #ccd6f6;
            margin-bottom: 10px;
        }
        
        .sidebar-quote {
            font-style: italic;
            color: #8892b0;
            line-height: 1.6;
            text-align: center;
            font-size: 1.1rem;
            border-top: 1px solid rgba(100, 255, 218, 0.2);
            padding-top: 20px;
        }
        
        .content-container {
            background: rgba(17, 34, 64, 0.85);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(100, 255, 218, 0.1);
        }
        
        .section-title {
            font-family: 'Cinzel', serif;
            font-size: 2rem;
            color: #64ffda;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(100, 255, 218, 0.3);
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 120px;
            height: 2px;
            background: #64ffda;
        }
        
        .post {
            background: rgba(23, 42, 69, 0.7);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(100, 255, 218, 0.1);
        }
        
        .post:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        }
        
        .post-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .post-title {
            font-size: 1.8rem;
            color: #ccd6f6;
            font-weight: 700;
        }
        
        .post-date {
            color: #64ffda;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }
        
        .post-content {
            color: #a8b2d1;
            line-height: 1.8;
            margin-bottom: 25px;
            font-size: 1.1rem;
        }
        
        .read-more {
            display: inline-block;
            padding: 10px 25px;
            background: transparent;
            border: 1px solid #64ffda;
            color: #64ffda;
            border-radius: 30px;
            text-decoration: none;
            font-family: 'Cinzel', serif;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }
        
        .read-more:hover {
            background: rgba(100, 255, 218, 0.1);
            transform: translateY(-2px);
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 20px;
        }
        
        .gallery-item {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            height: 300px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-8px);
        }
        
        .item-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .gallery-item:hover .item-image {
            transform: scale(1.05);
        }
        
        .item-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(10, 25, 47, 0.9), transparent);
            padding: 30px 20px 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .gallery-item:hover .item-overlay {
            opacity: 1;
        }
        
        .item-title {
            color: #fff;
            font-size: 1.4rem;
            margin-bottom: 10px;
        }
        
        .item-description {
            color: #ccd6f6;
            font-size: 0.9rem;
            margin-bottom: 15px;
            line-height: 1.6;
        }
        
        .view-btn {
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(100, 255, 218, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #64ffda;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        }
        
        .view-btn:hover {
            background: rgba(100, 255, 218, 0.3);
            transform: scale(1.1);
        }
        
        .scroll-control {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 20;
            opacity: 0;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .scroll-control.left {
            left: -60px;
        }
        
        .scroll-control.right {
            right: -60px;
        }
        
        body:hover .scroll-control.left {
            left: 20px;
            opacity: 1;
        }
        
        body:hover .scroll-control.right {
            right: 20px;
            opacity: 1;
        }
        
        .scroll-control:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-50%) scale(1.1);
        }
        
        .research-placeholder {
            text-align: center;
            padding: 100px 0;
        }
        
        .research-icon {
            font-size: 5rem;
            color: rgba(100, 255, 218, 0.2);
            margin-bottom: 30px;
        }
        
        .research-text {
            font-size: 1.8rem;
            color: #8892b0;
            font-family: 'Cinzel', serif;
            letter-spacing: 2px;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .blog-section::-webkit-scrollbar {
            display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .blog-section {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        
        /* Animation for section transitions */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
    `;
    document.head.appendChild(blogStyles);
    
    // 创建博客页面结构
    blogPage.innerHTML = `
        <div class="blog-background"></div>
        
        <div class="scroll-control left">
            <i class="fas fa-chevron-left"></i>
        </div>
        
        <div class="scroll-control right">
            <i class="fas fa-chevron-right"></i>
        </div>
        
        <div class="blog-container">
            <!-- Post Section -->
            <section id="blog-post" class="blog-section">
                <div class="blog-header">
                    <h1 class="blog-title">Personal Blog</h1>
                    <div class="nav-bar">
                        <div class="nav-item active" data-target="0">Post</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item" data-target="1">Favorite</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item" data-target="2">Research</div>
                    </div>
                </div>
                
                <div class="content-container">
                    <h2 class="section-title">Latest Posts</h2>
                    
                    <div class="post animate-in">
                        <div class="post-header">
                            <h3 class="post-title">Exploring Fractal Geometry</h3>
                            <div class="post-date">May 15, 2025</div>
                        </div>
                        <div class="post-content">
                            <p>Fractal geometry reveals the hidden patterns of the universe. From the branching of trees to the structure of galaxies, fractals are nature's signature...</p>
                            <p>In this post, I explore the Mandelbrot set and its infinite complexity. We'll dive into the mathematical foundations and visualize these stunning patterns using computational methods.</p>
                        </div>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="post animate-in delay-1">
                        <div class="post-header">
                            <h3 class="post-title">Quantum Computing Algorithms</h3>
                            <div class="post-date">April 28, 2025</div>
                        </div>
                        <div class="post-content">
                            <p>Quantum computing represents a paradigm shift in computational power. By leveraging quantum superposition and entanglement, we can solve problems that are intractable for classical computers...</p>
                            <p>In this article, I break down Shor's algorithm for prime factorization and Grover's algorithm for database search, explaining the quantum principles behind them.</p>
                        </div>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="post animate-in delay-2">
                        <div class="post-header">
                            <h3 class="post-title">Topology in Data Analysis</h3>
                            <div class="post-date">April 10, 2025</div>
                        </div>
                        <div class="post-content">
                            <p>Topological data analysis (TDA) provides powerful tools for understanding the shape of data. By applying concepts from algebraic topology, we can extract meaningful insights from complex datasets...</p>
                            <p>This post explores persistent homology and Mapper algorithms, demonstrating how they reveal hidden structures in high-dimensional data spaces.</p>
                        </div>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="post animate-in delay-3">
                        <div class="post-header">
                            <h3 class="post-title">Neural Networks: A Mathematical Perspective</h3>
                            <div class="post-date">March 22, 2025</div>
                        </div>
                        <div class="post-content">
                            <p>Deep learning has revolutionized artificial intelligence, but what mathematical principles underpin these powerful models? In this exploration, I examine the calculus of backpropagation and the linear algebra of neural architectures...</p>
                            <p>We'll see how concepts from optimization theory and functional analysis explain why deep networks work so well for complex pattern recognition tasks.</p>
                        </div>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
            </section>
            
            <!-- Favorite Section -->
            <section id="blog-favorite" class="blog-section">
                <div class="blog-header">
                    <h1 class="blog-title">Personal Blog</h1>
                    <div class="nav-bar">
                        <div class="nav-item" data-target="0">Post</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item active" data-target="1">Favorite</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item" data-target="2">Research</div>
                    </div>
                </div>
                
                <div class="content-container">
                    <h2 class="section-title">Inspirational Collection</h2>
                    
                    <div class="gallery">
                        <div class="gallery-item animate-in">
                            <img src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mathematical Art" class="item-image">
                            <div class="item-overlay">
                                <h3 class="item-title">Mathematical Art</h3>
                                <p class="item-description">Visualization of complex mathematical functions creating stunning patterns</p>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                        
                        <div class="gallery-item animate-in delay-1">
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Quantum Equations" class="item-image">
                            <div class="item-overlay">
                                <h3 class="item-title">Quantum Equations</h3>
                                <p class="item-description">Schrödinger's equation visualized in three-dimensional space</p>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                        
                        <div class="gallery-item animate-in delay-2">
                            <div style="background: linear-gradient(135deg, #0a192f, #112240); height: 100%; display: flex; align-items: center; justify-content: center; padding: 30px;">
                                <blockquote style="font-style: italic; font-size: 1.4rem; text-align: center; color: #64ffda; line-height: 1.6;">
                                    "Mathematics is the language with which God has written the universe."
                                    <footer style="margin-top: 20px; font-size: 1rem; color: #8892b0;">— Galileo Galilei</footer>
                                </blockquote>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                        
                        <div class="gallery-item animate-in delay-3">
                            <img src="https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fractal Universe" class="item-image">
                            <div class="item-overlay">
                                <h3 class="item-title">Fractal Universe</h3>
                                <p class="item-description">Mandelbrot set zoom revealing infinite complexity</p>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                        
                        <div class="gallery-item animate-in">
                            <div style="background: linear-gradient(135deg, #112240, #0a192f); height: 100%; display: flex; align-items: center; justify-content: center; padding: 30px;">
                                <blockquote style="font-style: italic; font-size: 1.4rem; text-align: center; color: #64ffda; line-height: 1.6;">
                                    "Pure mathematics is, in its way, the poetry of logical ideas."
                                    <footer style="margin-top: 20px; font-size: 1rem; color: #8892b0;">— Albert Einstein</footer>
                                </blockquote>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                        
                        <div class="gallery-item animate-in delay-1">
                            <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Topology" class="item-image">
                            <div class="item-overlay">
                                <h3 class="item-title">Topological Surfaces</h3>
                                <p class="item-description">Visual representation of genus and Euler characteristic</p>
                            </div>
                            <a href="#" class="view-btn"><i class="fas fa-expand"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Research Section -->
            <section id="blog-research" class="blog-section">
                <div class="blog-header">
                    <h1 class="blog-title">Personal Blog</h1>
                    <div class="nav-bar">
                        <div class="nav-item" data-target="0">Post</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item" data-target="1">Favorite</div>
                        <div class="nav-divider">✦</div>
                        <div class="nav-item active" data-target="2">Research</div>
                    </div>
                </div>
                
                <div class="content-container">
                    <h2 class="section-title">Research Projects</h2>
                    
                    <div class="research-placeholder">
                        <div class="research-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        <h3 class="research-text">Research Section Coming Soon</h3>
                    </div>
                </div>
            </section>
        </div>
        
        <div class="sidebar">
            <div class="avatar-container">
                <div class="avatar-frame">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Profile">
                </div>
                <h2 class="sidebar-name">Stardust Math</h2>
                <p class="sidebar-quote">"Turn this imperfect story into the way we hope it to be."</p>
            </div>
        </div>
    `;
    
    const epicPage = document.getElementById('epic-scroll-page');
    const flameOverlay = document.getElementById('flame-overlay');
    
    if (epicPage) {
        epicPage.style.opacity = '0';
        
        setTimeout(() => {
            epicPage.remove();
            if (flameOverlay) flameOverlay.remove();
            
            // 初始化博客页面
            initBlogPage();
            blogPage.style.opacity = '1';
        }, 1000);
    } else {
        // 初始化博客页面
        initBlogPage();
        blogPage.style.opacity = '1';
    }
}

function initBlogPage() {
    // 初始化博客页面功能
    const navItems = document.querySelectorAll('.nav-item');
    const blogContainer = document.querySelector('.blog-container');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = parseInt(item.getAttribute('data-target'));
            blogContainer.style.transform = `translateX(-${target * 33.333}%)`;
            
            // 更新活动状态
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
    
    // 滚动控制功能
    const scrollLeft = document.querySelector('.scroll-control.left');
    const scrollRight = document.querySelector('.scroll-control.right');
    let currentSection = 0;
    
    scrollLeft.addEventListener('click', () => {
        currentSection = (currentSection - 1 + 3) % 3;
        blogContainer.style.transform = `translateX(-${currentSection * 33.333}%)`;
        updateNavActive(currentSection);
    });
    
    scrollRight.addEventListener('click', () => {
        currentSection = (currentSection + 1) % 3;
        blogContainer.style.transform = `translateX(-${currentSection * 33.333}%)`;
        updateNavActive(currentSection);
    });
    
    function updateNavActive(sectionIndex) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.getAttribute('data-target')) === sectionIndex) {
                item.classList.add('active');
            }
        });
    }
    
    // 侧边栏跟随滚动
    const sidebar = document.querySelector('.sidebar');
    const blogSections = document.querySelectorAll('.blog-section');
    
    blogSections.forEach(section => {
        section.addEventListener('scroll', () => {
            const scrollPosition = section.scrollTop;
            sidebar.style.top = `calc(50% + ${scrollPosition}px)`;
        });
    });
    
    // 添加内容动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.post, .gallery-item').forEach(item => {
        observer.observe(item);
    });
    
    // 添加Font Awesome图标库
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // 添加Google字体
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Dancing+Script:wght@700&family=Playfair+Display:wght@400;700&display=swap';
    document.head.appendChild(googleFonts);
}
