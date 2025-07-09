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
    
    // 创建博客容器
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
    
    // 添加背景图片（不随滚动变化）
    const background = document.createElement('div');
    background.id = 'blog-background';
    background.style.position = 'fixed';
    background.style.top = '0';
    background.style.left = '0';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.backgroundImage = 'url("./background.png")';
    background.style.backgroundSize = 'cover';
    background.style.backgroundPosition = 'center';
    background.style.backgroundAttachment = 'fixed';
    background.style.zIndex = '-1';
    blogPage.appendChild(background);
    
    // 添加博客主容器
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';
    blogContainer.style.position = 'absolute';
    blogContainer.style.top = '0';
    blogContainer.style.left = '0';
    blogContainer.style.width = '300%';
    blogContainer.style.height = '100%';
    blogContainer.style.display = 'flex';
    blogContainer.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    blogPage.appendChild(blogContainer);
    
    // 创建三个页面：Post, Favorite, Research
    const pages = ['Post', 'Favorite', 'Research'];
    pages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.className = 'blog-section';
        pageElement.dataset.page = page.toLowerCase();
        pageElement.style.width = 'calc(100% / 3)';
        pageElement.style.height = '100%';
        pageElement.style.display = 'flex';
        pageElement.style.flexDirection = 'column';
        pageElement.style.padding = '40px 5%';
        pageElement.style.overflowY = 'auto';
        pageElement.style.overflowX = 'hidden';
        pageElement.style.boxSizing = 'border-box';
        
        // 添加标题
        const title = document.createElement('h1');
        title.className = 'blog-title';
        title.textContent = 'Personal Blog';
        title.style.fontFamily = '"Great Vibes", cursive';
        title.style.fontSize = '3.5rem';
        title.style.textAlign = 'center';
        title.style.marginBottom = '40px';
        title.style.color = '#fff';
        title.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
        pageElement.appendChild(title);
        
        // 添加内容区域
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'content-wrapper';
        contentWrapper.style.display = 'flex';
        contentWrapper.style.width = '100%';
        contentWrapper.style.height = 'calc(100% - 100px)';
        
        // 左侧内容区 (占2/3)
        const leftContent = document.createElement('div');
        leftContent.className = 'left-content';
        leftContent.style.width = '66.66%';
        leftContent.style.paddingRight = '20px';
        
        // 右侧个人资料区 (占1/3)
        const rightContent = document.createElement('div');
        rightContent.className = 'right-content';
        rightContent.style.width = '33.33%';
        rightContent.style.position = 'sticky';
        rightContent.style.top = '40px';
        rightContent.style.alignSelf = 'flex-start';
        rightContent.style.height = 'fit-content';
        rightContent.style.padding = '30px';
        rightContent.style.borderRadius = '20px';
        rightContent.style.background = 'linear-gradient(135deg, rgba(10, 25, 15, 0.85), rgba(15, 40, 20, 0.9))';
        rightContent.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        
        // 添加个人资料内容
        const profileAvatar = document.createElement('img');
        profileAvatar.src = './avatar.jpg';
        profileAvatar.style.width = '120px';
        profileAvatar.style.height = '120px';
        profileAvatar.style.borderRadius = '50%';
        profileAvatar.style.margin = '0 auto 20px';
        profileAvatar.style.display = 'block';
        profileAvatar.style.border = '3px solid rgba(255,255,255,0.2)';
        profileAvatar.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
        
        const profileName = document.createElement('h2');
        profileName.textContent = 'Stardust';
        profileName.style.fontFamily = '"Georgia", serif';
        profileName.style.color = '#fff';
        profileName.style.textAlign = 'center';
        profileName.style.marginBottom = '10px';
        profileName.style.fontSize = '1.8rem';
        
        const profileMotto = document.createElement('p');
        profileMotto.textContent = 'Turn this imperfect story into the way we hope it to be.';
        profileMotto.style.fontFamily = '"Allura", cursive';
        profileMotto.style.color = '#c8e6c9';
        profileMotto.style.textAlign = 'center';
        profileMotto.style.fontSize = '1.5rem';
        profileMotto.style.lineHeight = '1.4';
        
        rightContent.appendChild(profileAvatar);
        rightContent.appendChild(profileName);
        rightContent.appendChild(profileMotto);
        
        // 根据页面类型添加内容
        if (page === 'Post') {
            // 添加帖子
            for (let i = 1; i <= 5; i++) {
                const post = document.createElement('div');
                post.className = 'blog-post';
                post.style.background = 'linear-gradient(135deg, rgba(20, 35, 25, 0.8), rgba(25, 50, 30, 0.85))';
                post.style.borderRadius = '15px';
                post.style.padding = '25px';
                post.style.marginBottom = '30px';
                post.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                
                const postHeader = document.createElement('div');
                postHeader.style.display = 'flex';
                postHeader.style.justifyContent = 'space-between';
                postHeader.style.marginBottom = '15px';
                
                const postTitle = document.createElement('h3');
                postTitle.textContent = `Exploring the Mysteries of Mathematics ${i}`;
                postTitle.style.color = '#c8e6c9';
                postTitle.style.fontSize = '1.5rem';
                postTitle.style.margin = '0';
                
                const postDate = document.createElement('span');
                postDate.textContent = `2025-07-${10 + i}`;
                postDate.style.color = '#a5d6a7';
                postDate.style.fontSize = '1rem';
                
                postHeader.appendChild(postTitle);
                postHeader.appendChild(postDate);
                
                const postContent = document.createElement('p');
                postContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                postContent.style.color = '#e0f2e9';
                postContent.style.lineHeight = '1.6';
                postContent.style.marginBottom = '20px';
                
                const readMore = document.createElement('a');
                readMore.textContent = 'Read more →';
                readMore.href = '#';
                readMore.className = 'read-more';
                readMore.style.color = '#81c784';
                readMore.style.textDecoration = 'none';
                readMore.style.fontWeight = '600';
                readMore.style.display = 'inline-block';
                readMore.style.transition = 'color 0.3s';
                
                readMore.addEventListener('mouseenter', () => {
                    readMore.style.color = '#4caf50';
                });
                
                readMore.addEventListener('mouseleave', () => {
                    readMore.style.color = '#81c784';
                });
                
                post.appendChild(postHeader);
                post.appendChild(postContent);
                post.appendChild(readMore);
                
                leftContent.appendChild(post);
            }
        } else if (page === 'Favorite') {
            // 添加收藏项
            const favoritesGrid = document.createElement('div');
            favoritesGrid.className = 'favorites-grid';
            favoritesGrid.style.display = 'grid';
            favoritesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
            favoritesGrid.style.gap = '25px';
            
            // 添加名言
            const quoteItems = [
                "The only way to learn mathematics is to do mathematics. - Paul Halmos",
                "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston",
                "Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein"
            ];
            
            // 添加图片项
            const imageItems = [
                { src: 'math1.jpg', title: 'Mathematical Beauty' },
                { src: 'math2.jpg', title: 'Fractal Universe' },
                { src: 'math3.jpg', title: 'Golden Ratio' }
            ];
            
            // 混合名言和图片
            [...quoteItems, ...imageItems].forEach((item, idx) => {
                const favoriteItem = document.createElement('div');
                favoriteItem.className = 'favorite-item';
                favoriteItem.style.background = 'linear-gradient(135deg, rgba(20, 35, 25, 0.8), rgba(25, 50, 30, 0.85))';
                favoriteItem.style.borderRadius = '15px';
                favoriteItem.style.padding = '20px';
                favoriteItem.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                favoriteItem.style.position = 'relative';
                favoriteItem.style.overflow = 'hidden';
                favoriteItem.style.minHeight = '200px';
                
                if (typeof item === 'string') {
                    // 名言项
                    const quote = document.createElement('p');
                    quote.textContent = item;
                    quote.style.color = '#e0f2e9';
                    quote.style.fontStyle = 'italic';
                    quote.style.fontSize = '1.1rem';
                    quote.style.lineHeight = '1.5';
                    favoriteItem.appendChild(quote);
                } else {
                    // 图片项
                    const imgContainer = document.createElement('div');
                    imgContainer.style.position = 'relative';
                    imgContainer.style.height = '180px';
                    imgContainer.style.overflow = 'hidden';
                    imgContainer.style.borderRadius = '10px';
                    imgContainer.style.marginBottom = '15px';
                    
                    const img = document.createElement('div');
                    img.className = 'favorite-image';
                    img.style.height = '100%';
                    img.style.backgroundImage = `url(./assets/images/${item.src})`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                    img.style.filter = 'blur(2px) brightness(0.7)';
                    img.style.transition = 'filter 0.5s';
                    
                    const imgTitle = document.createElement('div');
                    imgTitle.textContent = item.title;
                    imgTitle.style.position = 'absolute';
                    imgTitle.style.bottom = '10px';
                    imgTitle.style.left = '10px';
                    imgTitle.style.color = '#fff';
                    imgTitle.style.fontSize = '1.1rem';
                    imgTitle.style.fontWeight = 'bold';
                    imgTitle.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
                    
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(imgTitle);
                    
                    const viewButton = document.createElement('button');
                    viewButton.className = 'view-button';
                    viewButton.textContent = 'View';
                    viewButton.style.position = 'absolute';
                    viewButton.style.bottom = '15px';
                    viewButton.style.right = '15px';
                    viewButton.style.background = 'linear-gradient(to right, #2e7d32, #388e3c)';
                    viewButton.style.color = 'white';
                    viewButton.style.border = 'none';
                    viewButton.style.borderRadius = '20px';
                    viewButton.style.padding = '8px 20px';
                    viewButton.style.cursor = 'pointer';
                    viewButton.style.transition = 'all 0.3s';
                    viewButton.style.zIndex = '2';
                    
                    viewButton.addEventListener('mouseenter', () => {
                        viewButton.style.transform = 'translateY(-3px)';
                        viewButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                        img.style.filter = 'blur(0) brightness(1)';
                    });
                    
                    viewButton.addEventListener('mouseleave', () => {
                        viewButton.style.transform = 'translateY(0)';
                        viewButton.style.boxShadow = 'none';
                        img.style.filter = 'blur(2px) brightness(0.7)';
                    });
                    
                    favoriteItem.appendChild(imgContainer);
                    favoriteItem.appendChild(viewButton);
                }
                
                favoritesGrid.appendChild(favoriteItem);
            });
            
            leftContent.appendChild(favoritesGrid);
        } else if (page === 'Research') {
            // Research 页面留白
            const researchPlaceholder = document.createElement('div');
            researchPlaceholder.style.textAlign = 'center';
            researchPlaceholder.style.paddingTop = '100px';
            
            const placeholderIcon = document.createElement('div');
            placeholderIcon.innerHTML = '<i class="fas fa-flask" style="font-size: 5rem; color: rgba(200, 230, 201, 0.3); margin-bottom: 20px;"></i>';
            
            const placeholderText = document.createElement('p');
            placeholderText.textContent = 'Research content coming soon...';
            placeholderText.style.color = 'rgba(200, 230, 201, 0.5)';
            placeholderText.style.fontSize = '1.5rem';
            
            researchPlaceholder.appendChild(placeholderIcon);
            researchPlaceholder.appendChild(placeholderText);
            leftContent.appendChild(researchPlaceholder);
        }
        
        contentWrapper.appendChild(leftContent);
        contentWrapper.appendChild(rightContent);
        pageElement.appendChild(contentWrapper);
        blogContainer.appendChild(pageElement);
    });
    
    // 添加导航按钮
    const navLeft = document.createElement('div');
    navLeft.id = 'nav-left';
    navLeft.className = 'nav-button';
    navLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
    navLeft.style.position = 'fixed';
    navLeft.style.left = '-70px';
    navLeft.style.top = '50%';
    navLeft.style.transform = 'translateY(-50%)';
    navLeft.style.width = '60px';
    navLeft.style.height = '60px';
    navLeft.style.background = 'rgba(255, 255, 255, 0.2)';
    navLeft.style.borderRadius = '50%';
    navLeft.style.display = 'flex';
    navLeft.style.alignItems = 'center';
    navLeft.style.justifyContent = 'center';
    navLeft.style.color = '#fff';
    navLeft.style.fontSize = '1.5rem';
    navLeft.style.cursor = 'pointer';
    navLeft.style.transition = 'all 0.4s ease, left 0.4s ease, opacity 0.4s ease';
    navLeft.style.zIndex = '1004';
    navLeft.style.opacity = '0';
    navLeft.style.backdropFilter = 'blur(5px)';
    blogPage.appendChild(navLeft);
    
    const navRight = document.createElement('div');
    navRight.id = 'nav-right';
    navRight.className = 'nav-button';
    navRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
    navRight.style.position = 'fixed';
    navRight.style.right = '-70px';
    navRight.style.top = '50%';
    navRight.style.transform = 'translateY(-50%)';
    navRight.style.width = '60px';
    navRight.style.height = '60px';
    navRight.style.background = 'rgba(255, 255, 255, 0.2)';
    navRight.style.borderRadius = '50%';
    navRight.style.display = 'flex';
    navRight.style.alignItems = 'center';
    navRight.style.justifyContent = 'center';
    navRight.style.color = '#fff';
    navRight.style.fontSize = '1.5rem';
    navRight.style.cursor = 'pointer';
    navRight.style.transition = 'all 0.4s ease, right 0.4s ease, opacity 0.4s ease';
    navRight.style.zIndex = '1004';
    navRight.style.opacity = '0';
    navRight.style.backdropFilter = 'blur(5px)';
    blogPage.appendChild(navRight);
    
    // 当前页面索引
    let currentPageIndex = 0;
    
    // 导航按钮事件
    navLeft.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePagePosition();
        }
    });
    
    navRight.addEventListener('click', () => {
        if (currentPageIndex < 2) {
            currentPageIndex++;
            updatePagePosition();
        }
    });
    
    // 更新页面位置
    function updatePagePosition() {
        blogContainer.style.transform = `translateX(-${currentPageIndex * (100 / 3)}%)`;
    }
    
    // 鼠标移动检测
    blogPage.addEventListener('mousemove', (e) => {
        const rect = blogPage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        
        // 左侧1/8区域
        if (x < width / 8) {
            navLeft.style.left = '20px';
            navLeft.style.opacity = '1';
        } else {
            navLeft.style.left = '-70px';
            navLeft.style.opacity = '0';
        }
        
        // 右侧1/8区域
        if (x > width * 7 / 8) {
            navRight.style.right = '20px';
            navRight.style.opacity = '1';
        } else {
            navRight.style.right = '-70px';
            navRight.style.opacity = '0';
        }
    });
    
    // 鼠标离开页面时隐藏按钮
    blogPage.addEventListener('mouseleave', () => {
        navLeft.style.left = '-70px';
        navLeft.style.opacity = '0';
        navRight.style.right = '-70px';
        navRight.style.opacity = '0';
    });
    
    // 隐藏时钟控制按钮
    const clockToggle = document.querySelector('.clock-toggle');
    if (clockToggle) clockToggle.style.display = 'none';
    
    const epicPage = document.getElementById('epic-scroll-page');
    const flameOverlay = document.getElementById('flame-overlay');
    
    if (epicPage) {
        epicPage.style.opacity = '0';
        
        setTimeout(() => {
            epicPage.remove();
            if (flameOverlay) flameOverlay.remove();
            blogPage.style.opacity = '1';
        }, 1000);
    } else {
        blogPage.style.opacity = '1';
    }
}
