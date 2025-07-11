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
    blogPage.style.backgroundColor = '#f5f5f5';
    blogPage.style.display = 'flex';
    blogPage.style.justifyContent = 'center';
    blogPage.style.alignItems = 'center';
    blogPage.style.opacity = '0';
    blogPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(blogPage);
    
    // 隐藏时钟控制按钮
    const clockToggle = document.querySelector('.clock-toggle');
    if (clockToggle) clockToggle.style.display = 'none';
    
    // 博客背景 - 使用提供的背景图片
    const blogBackground = document.createElement('div');
    blogBackground.id = 'blog-background';
    blogBackground.style.position = 'fixed';
    blogBackground.style.top = '0';
    blogBackground.style.left = '0';
    blogBackground.style.width = '100%';
    blogBackground.style.height = '100%';
    blogBackground.style.background = 'url("background.png") center/cover no-repeat';
    blogBackground.style.zIndex = '-1';
    blogBackground.style.filter = 'brightness(0.8)';
    blogPage.appendChild(blogBackground);
    
    // 博客容器
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';
    blogContainer.style.position = 'relative';
    blogContainer.style.width = '100%';
    blogContainer.style.height = '100%';
    blogContainer.style.overflow = 'hidden';
    blogContainer.style.display = 'flex';
    blogContainer.style.flexDirection = 'column';
    blogPage.appendChild(blogContainer);
    
    // 导航栏
    const navbar = document.createElement('div');
    navbar.id = 'blog-navbar';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.width = '100%';
    navbar.style.height = '100px';
    navbar.style.zIndex = '10';
    navbar.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.justifyContent = 'center';
    navbar.style.alignItems = 'center';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    blogContainer.appendChild(navbar);
    
    // 博客标题
    const blogTitle = document.createElement('h1');
    blogTitle.id = 'blog-title';
    blogTitle.textContent = 'Personal Blog';
    blogTitle.style.fontFamily = '"Great Vibes", "Allura", cursive';
    blogTitle.style.fontSize = '2.5rem';
    blogTitle.style.color = '#fff';
    blogTitle.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
    blogTitle.style.margin = '0';
    blogTitle.style.letterSpacing = '2px';
    navbar.appendChild(blogTitle);
    
    // 导航链接
    const navLinks = document.createElement('div');
    navLinks.id = 'blog-nav-links';
    navLinks.style.display = 'flex';
    navLinks.style.justifyContent = 'center';
    navLinks.style.gap = '30px';
    navLinks.style.marginTop = '15px';
    navbar.appendChild(navLinks);
    
    // 创建导航项
    const pages = ['Post', 'Favorite', 'Research'];
    pages.forEach((page, index) => {
        const link = document.createElement('a');
        link.href = '#';
        link.dataset.page = index;
        link.textContent = page;
        link.style.fontFamily = '"Cinzel", serif';
        link.style.fontSize = '1.2rem';
        link.style.color = '#fff';
        link.style.textDecoration = 'none';
        link.style.padding = '5px 15px';
        link.style.borderRadius = '20px';
        link.style.transition = 'all 0.3s ease';
        
        // 添加分隔符（除了最后一个）
        if (index < pages.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = '✦';
            separator.style.marginLeft = '10px';
            separator.style.opacity = '0.5';
            navLinks.appendChild(separator);
        }
        
        navLinks.appendChild(link);
    });
    
    // 右侧个人信息栏
    const profileSidebar = document.createElement('div');
    profileSidebar.id = 'blog-profile';
    profileSidebar.style.position = 'fixed';
    profileSidebar.style.top = '120px';
    profileSidebar.style.right = '5%';
    profileSidebar.style.width = 'calc(30% - 50px)';
    profileSidebar.style.zIndex = '5';
    profileSidebar.style.padding = '20px';
    profileSidebar.style.background = 'rgba(255,255,255,0.1)';
    profileSidebar.style.backdropFilter = 'blur(10px)';
    profileSidebar.style.borderRadius = '15px';
    profileSidebar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    profileSidebar.style.display = 'flex';
    profileSidebar.style.flexDirection = 'column';
    profileSidebar.style.alignItems = 'center';
    profileSidebar.style.transition = 'transform 0.3s ease, width 0.5s ease, height 0.5s ease';
    blogContainer.appendChild(profileSidebar);
    
    // 头像容器 - 添加点击事件
    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'avatar-container';
    avatarContainer.style.cursor = 'pointer';
    avatarContainer.style.display = 'flex';
    avatarContainer.style.flexDirection = 'column';
    avatarContainer.style.alignItems = 'center';
    avatarContainer.style.transition = 'all 0.5s ease';
    profileSidebar.appendChild(avatarContainer);
    
    // 头像
    const profileAvatar = document.createElement('img');
    profileAvatar.src = './avatar.jpg';
    profileAvatar.alt = 'Profile Avatar';
    profileAvatar.style.width = '100px';
    profileAvatar.style.height = '100px';
    profileAvatar.style.borderRadius = '50%';
    profileAvatar.style.border = '3px solid rgba(255,255,255,0.5)';
    profileAvatar.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
    profileAvatar.style.marginBottom = '20px';
    profileAvatar.style.transition = 'all 0.5s ease';
    avatarContainer.appendChild(profileAvatar);
    
    // 名字
    const profileName = document.createElement('h2');
    profileName.id = 'profile-name';
    profileName.textContent = 'Stardust';
    profileName.style.fontFamily = '"Cinzel", serif';
    profileName.style.color = '#fff';
    profileName.style.margin = '0 0 10px 0';
    profileName.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
    profileName.style.transition = 'all 0.5s ease';
    avatarContainer.appendChild(profileName);
    
    // 座右铭
    const profileSlogan = document.createElement('p');
    profileSlogan.id = 'profile-slogan';
    profileSlogan.textContent = 'Turn this imperfect story into the way we hope it to be.';
    profileSlogan.style.fontFamily = '"Georgia", serif';
    profileSlogan.style.fontStyle = 'italic';
    profileSlogan.style.color = '#fff';
    profileSlogan.style.textAlign = 'center';
    profileSlogan.style.margin = '0';
    profileSlogan.style.textShadow = '0 0 3px rgba(0,0,0,0.5)';
    profileSlogan.style.transition = 'all 0.5s ease';
    avatarContainer.appendChild(profileSlogan);
    
    // 展开/收起状态指示器
    const toggleIndicator = document.createElement('div');
    toggleIndicator.id = 'toggle-indicator';
    toggleIndicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
    toggleIndicator.style.position = 'absolute';
    toggleIndicator.style.bottom = '10px';
    toggleIndicator.style.right = '10px';
    toggleIndicator.style.width = '25px';
    toggleIndicator.style.height = '25px';
    toggleIndicator.style.background = 'rgba(255,255,255,0.3)';
    toggleIndicator.style.borderRadius = '50%';
    toggleIndicator.style.display = 'flex';
    toggleIndicator.style.justifyContent = 'center';
    toggleIndicator.style.alignItems = 'center';
    toggleIndicator.style.fontSize = '0.8rem';
    toggleIndicator.style.color = '#fff';
    toggleIndicator.style.transition = 'all 0.5s ease';
    toggleIndicator.style.cursor = 'pointer';
    profileSidebar.appendChild(toggleIndicator);
    
    // 页面容器
    const pagesContainer = document.createElement('div');
    pagesContainer.id = 'blog-pages';
    pagesContainer.style.position = 'absolute';
    pagesContainer.style.top = '100px';
    pagesContainer.style.left = '0';
    pagesContainer.style.width = '300%';
    pagesContainer.style.height = 'calc(100% - 100px)';
    pagesContainer.style.display = 'flex';
    pagesContainer.style.transition = 'transform 0.5s ease-in-out';
    blogContainer.appendChild(pagesContainer);
    
    // 创建三个页面
    pages.forEach((page, index) => {
        const pageSection = document.createElement('div');
        pageSection.className = 'blog-page';
        pageSection.dataset.page = index;
        pageSection.style.width = '33.3333%';
        pageSection.style.height = '100%';
        pageSection.style.padding = '120px 5% 50px 5%';
        pageSection.style.overflowY = 'auto';
        pageSection.style.boxSizing = 'border-box';
        
        // 添加渐变背景
        const gradientColors = [
            'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,255,0.9))',
            'linear-gradient(135deg, rgba(255,255,240,0.9), rgba(255,240,240,0.9))',
            'linear-gradient(135deg, rgba(240,255,255,0.9), rgba(240,240,255,0.9))'
        ];
        pageSection.style.background = gradientColors[index];
        pageSection.style.borderRadius = '20px';
        pageSection.style.boxShadow = '0 0 30px rgba(0,0,0,0.1)';
        pageSection.style.margin = '0 2.5%';
        
        // 页面标题
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = page;
        pageTitle.style.fontFamily = '"Cinzel", serif';
        pageTitle.style.color = '#333';
        pageTitle.style.borderBottom = '2px solid #ddd';
        pageTitle.style.paddingBottom = '10px';
        pageTitle.style.marginBottom = '30px';
        pageSection.appendChild(pageTitle);
        
        // 根据页面类型添加内容
        if (page === 'Post') {
            // 添加博客文章
            for (let i = 1; i <= 5; i++) {
                const post = createBlogPost(i);
                pageSection.appendChild(post);
            }
        } else if (page === 'Favorite') {
            // 添加收藏项目
            for (let i = 1; i <= 6; i++) {
                const favorite = createFavoriteItem(i);
                pageSection.appendChild(favorite);
            }
        } else if (page === 'Research') {
            // 研究页面留白
            const researchContent = document.createElement('div');
            researchContent.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h3 style="font-family: 'Cinzel', serif; color: #555;">Research Section</h3>
                    <p style="font-family: 'Georgia', serif; color: #777;">
                        This section is currently under development. Check back soon for updates.
                    </p>
                </div>
            `;
            pageSection.appendChild(researchContent);
        }
        
        pagesContainer.appendChild(pageSection);
    });
    
    // 创建左右导航按钮 - 修改为更小的尺寸
    const leftNav = document.createElement('div');
    leftNav.id = 'blog-nav-left';
    leftNav.className = 'blog-nav-button';
    leftNav.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftNav.style.position = 'fixed';
    leftNav.style.left = '0';
    leftNav.style.top = '50%';
    leftNav.style.transform = 'translateY(-50%)';
    leftNav.style.opacity = '0';
    leftNav.style.transition = 'opacity 0.3s ease';
    blogContainer.appendChild(leftNav);
    
    const rightNav = document.createElement('div');
    rightNav.id = 'blog-nav-right';
    rightNav.className = 'blog-nav-button';
    rightNav.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightNav.style.position = 'fixed';
    rightNav.style.right = '0';
    rightNav.style.top = '50%';
    rightNav.style.transform = 'translateY(-50%)';
    rightNav.style.opacity = '0';
    rightNav.style.transition = 'opacity 0.3s ease';
    blogContainer.appendChild(rightNav);
    
    // 添加导航按钮样式 - 修改为更小的尺寸
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        .blog-nav-button {
            width: 40px;  /* 减小按钮尺寸 */
            height: 40px; /* 减小按钮尺寸 */
            background: rgba(255,255,255,0.7);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem; /* 减小字体大小 */
            color: #333;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            z-index: 20;
            transition: all 0.3s ease;
        }
        
        .blog-nav-button:hover {
            background: rgba(255,255,255,0.9);
            transform: scale(1.1);
        }
    `;
    blogContainer.appendChild(navStyle);
    
    // 当前页面索引
    let currentPageIndex = 0;
    
    // 导航按钮事件
    leftNav.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            navigateToPage(currentPageIndex);
        }
    });
    
    rightNav.addEventListener('click', () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            navigateToPage(currentPageIndex);
        }
    });
    
    // 导航链接事件
    const navLinksElements = navLinks.querySelectorAll('a');
    navLinksElements.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentPageIndex = parseInt(link.dataset.page);
            navigateToPage(currentPageIndex);
        });
    });
    
    // 导航到指定页面
    function navigateToPage(index) {
        pagesContainer.style.transform = `translateX(-${index * 33.3333}%)`;
        
        // 更新导航链接高亮
        navLinksElements.forEach((link, i) => {
            if (i === index) {
                link.style.background = 'rgba(255,255,255,0.3)';
                link.style.fontWeight = 'bold';
            } else {
                link.style.background = 'transparent';
                link.style.fontWeight = 'normal';
            }
        });
    }
    
    // 初始导航状态
    navigateToPage(0);
    
    // 鼠标进入左右区域时显示导航按钮
    blogContainer.addEventListener('mousemove', (e) => {
        const containerWidth = blogContainer.clientWidth;
        const mouseX = e.clientX;
        
        // 显示/隐藏左侧按钮
        if (mouseX < containerWidth / 8) {
            leftNav.style.opacity = '1';
        } else {
            leftNav.style.opacity = '0';
        }
        
        // 显示/隐藏右侧按钮
        if (mouseX > containerWidth * 7/8) {
            rightNav.style.opacity = '1';
        } else {
            rightNav.style.opacity = '0';
        }
    });
    
    // 鼠标离开容器时隐藏按钮
    blogContainer.addEventListener('mouseleave', () => {
        leftNav.style.opacity = '0';
        rightNav.style.opacity = '0';
    });
    
    // 添加滚动效果到个人信息栏
    blogContainer.addEventListener('scroll', () => {
        const scrollPosition = blogContainer.scrollTop;
        profileSidebar.style.transform = `translateY(${scrollPosition}px)`;
    });
    
    // 头像点击事件 - 展开/收起个人信息
    let isProfileCollapsed = false;
    
    profileAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleProfile();
    });
    
    // 添加指示器点击事件 - 修复功能
    toggleIndicator.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleProfile();
    });
    
    function toggleProfile() {
        isProfileCollapsed = !isProfileCollapsed;
        
        if (isProfileCollapsed) {
            // 收起状态
            profileSidebar.style.width = '100px';
            profileSidebar.style.height = '100px';
            profileSidebar.style.padding = '10px';
            
            profileAvatar.style.width = '80px';
            profileAvatar.style.height = '80px';
            profileAvatar.style.marginBottom = '0';
            
            profileName.style.opacity = '0';
            profileName.style.height = '0';
            profileName.style.margin = '0';
            profileName.style.overflow = 'hidden';
            
            profileSlogan.style.opacity = '0';
            profileSlogan.style.height = '0';
            profileSlogan.style.margin = '0';
            profileSlogan.style.overflow = 'hidden';
            
            toggleIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
            toggleIndicator.style.bottom = '5px';
            toggleIndicator.style.right = '5px';
            
            // 添加收起动画
            profileSidebar.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        } else {
            // 展开状态
            profileSidebar.style.width = 'calc(30% - 50px)';
            profileSidebar.style.height = 'auto';
            profileSidebar.style.padding = '20px';
            
            profileAvatar.style.width = '100px';
            profileAvatar.style.height = '100px';
            profileAvatar.style.marginBottom = '20px';
            
            profileName.style.opacity = '1';
            profileName.style.height = 'auto';
            profileName.style.margin = '0 0 10px 0';
            profileName.style.overflow = 'visible';
            
            profileSlogan.style.opacity = '1';
            profileSlogan.style.height = 'auto';
            profileSlogan.style.margin = '0';
            profileSlogan.style.overflow = 'visible';
            
            toggleIndicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
            toggleIndicator.style.bottom = '10px';
            toggleIndicator.style.right = '10px';
            
            // 添加展开动画
            profileSidebar.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        }
    }
    
    // 渐入效果
    setTimeout(() => {
        blogPage.style.opacity = '1';
        
        const epicPage = document.getElementById('epic-scroll-page');
        const flameOverlay = document.getElementById('flame-overlay');
        
        if (epicPage) {
            epicPage.style.opacity = '0';
            
            setTimeout(() => {
                epicPage.remove();
                if (flameOverlay) flameOverlay.remove();
            }, 1000);
        }
    }, 100);
}

// 创建博客文章函数
function createBlogPost(index) {
    const post = document.createElement('div');
    post.className = 'blog-post';
    post.style.background = 'rgba(255,255,255,0.7)';
    post.style.borderRadius = '15px';
    post.style.padding = '20px';
    post.style.marginBottom = '30px';
    post.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    post.style.transition = 'transform 0.3s ease';
    
    // 悬停效果
    post.addEventListener('mouseenter', () => {
        post.style.transform = 'translateY(-5px)';
    });
    
    post.addEventListener('mouseleave', () => {
        post.style.transform = 'none';
    });
    
    // 标题行
    const titleRow = document.createElement('div');
    titleRow.style.display = 'flex';
    titleRow.style.justifyContent = 'space-between';
    titleRow.style.alignItems = 'center';
    titleRow.style.marginBottom = '15px';
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = `Exploring Mathematical Concepts ${index}`;
    postTitle.style.fontFamily = '"Cinzel", serif';
    postTitle.style.color = '#333';
    postTitle.style.margin = '0';
    
    const postDate = document.createElement('span');
    postDate.textContent = `2025-0${index}-1${index}`;
    postDate.style.fontFamily = '"Georgia", serif';
    postDate.style.color = '#666';
    postDate.style.fontSize = '0.9rem';
    
    titleRow.appendChild(postTitle);
    titleRow.appendChild(postDate);
    post.appendChild(titleRow);
    
    // 内容
    const content = document.createElement('p');
    content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    content.style.fontFamily = '"Georgia", serif';
    content.style.color = '#444';
    content.style.lineHeight = '1.6';
    content.style.marginBottom = '20px';
    post.appendChild(content);
    
    // 阅读更多按钮
    const readMore = document.createElement('a');
    readMore.href = '#';
    readMore.textContent = 'Read more →';
    readMore.style.fontFamily = '"Cinzel", serif';
    readMore.style.color = '#2c3e50';
    readMore.style.textDecoration = 'none';
    readMore.style.display = 'inline-block';
    readMore.style.padding = '8px 15px';
    readMore.style.background = 'rgba(52, 152, 219, 0.1)';
    readMore.style.borderRadius = '20px';
    readMore.style.transition = 'all 0.3s ease';
    
    readMore.addEventListener('mouseenter', () => {
        readMore.style.background = 'rgba(52, 152, 219, 0.2)';
        readMore.style.transform = 'translateX(5px)';
    });
    
    readMore.addEventListener('mouseleave', () => {
        readMore.style.background = 'rgba(52, 152, 219, 0.1)';
        readMore.style.transform = 'none';
    });
    
    post.appendChild(readMore);
    
    return post;
}

// 创建收藏项目函数
function createFavoriteItem(index) {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.style.position = 'relative';
    item.style.background = 'rgba(255,255,255,0.7)';
    item.style.borderRadius = '15px';
    item.style.padding = '20px';
    item.style.marginBottom = '30px';
    item.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    item.style.overflow = 'hidden';
    item.style.transition = 'transform 0.3s ease';
    
    // 悬停效果
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'none';
    });
    
    // 标题
    const title = document.createElement('h3');
    title.textContent = `Inspirational Quote ${index}`;
    title.style.fontFamily = '"Cinzel", serif';
    title.style.color = '#333';
    title.style.margin = '0 0 15px 0';
    item.appendChild(title);
    
    // 内容
    const content = document.createElement('div');
    content.style.position = 'relative';
    content.style.height = '150px';
    content.style.overflow = 'hidden';
    
    const quote = document.createElement('p');
    quote.textContent = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston';
    quote.style.fontFamily = '"Georgia", serif';
    quote.style.color = '#444';
    quote.style.lineHeight = '1.6';
    quote.style.margin = '0';
    content.appendChild(quote);
    
    // 模糊覆盖层
    const blurOverlay = document.createElement('div');
    blurOverlay.style.position = 'absolute';
    blurOverlay.style.bottom = '0';
    blurOverlay.style.left = '0';
    blurOverlay.style.width = '100%';
    blurOverlay.style.height = '30px';
    blurOverlay.style.background = 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)';
    blurOverlay.style.backdropFilter = 'blur(2px)';
    content.appendChild(blurOverlay);
    
    item.appendChild(content);
    
    // 查看按钮
    const viewBtn = document.createElement('a');
    viewBtn.href = '#';
    viewBtn.textContent = 'View';
    viewBtn.style.position = 'absolute';
    viewBtn.style.right = '20px';
    viewBtn.style.bottom = '20px';
    viewBtn.style.fontFamily = '"Cinzel", serif';
    viewBtn.style.color = '#fff';
    viewBtn.style.textDecoration = 'none';
    viewBtn.style.padding = '8px 15px';
    viewBtn.style.background = 'rgba(106, 48, 147, 0.8)';
    viewBtn.style.borderRadius = '20px';
    viewBtn.style.transition = 'all 0.3s ease';
    viewBtn.style.zIndex = '2';
    
    viewBtn.addEventListener('mouseenter', () => {
        viewBtn.style.background = 'rgba(106, 48, 147, 1)';
        viewBtn.style.transform = 'scale(1.05)';
    });
    
    viewBtn.addEventListener('mouseleave', () => {
        viewBtn.style.background = 'rgba(106, 48, 147, 0.8)';
        viewBtn.style.transform = 'none';
    });
    
    item.appendChild(viewBtn);
    
    return item;
}
