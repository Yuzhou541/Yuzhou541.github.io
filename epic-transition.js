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
    blogPage.style.display = 'flex';
    blogPage.style.flexDirection = 'column';
    blogPage.style.overflow = 'hidden';
    blogPage.style.opacity = '0';
    blogPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(blogPage);
    
    // 背景图片
    const background = document.createElement('div');
    background.id = 'blog-background';
    background.style.position = 'fixed';
    background.style.top = '0';
    background.style.left = '0';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.background = 'url("./background.png") center/cover no-repeat';
    background.style.zIndex = '-1';
    blogPage.appendChild(background);
    
    // 主容器
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';
    blogContainer.style.display = 'flex';
    blogContainer.style.width = '100%';
    blogContainer.style.height = '100%';
    blogContainer.style.overflow = 'hidden';
    blogContainer.style.position = 'relative';
    blogPage.appendChild(blogContainer);
    
    // 页面标题
    const blogHeader = document.createElement('div');
    blogHeader.id = 'blog-header';
    blogHeader.innerHTML = '<h1>Personal Blog</h1>';
    blogHeader.style.position = 'absolute';
    blogHeader.style.top = '20px';
    blogHeader.style.left = '0';
    blogHeader.style.width = '100%';
    blogHeader.style.textAlign = 'center';
    blogHeader.style.zIndex = '10';
    blogHeader.style.fontFamily = '"MedievalSharp", "UnifrakturMaguntia", cursive';
    blogHeader.style.fontSize = '3rem';
    blogHeader.style.color = '#e0f0e0';
    blogHeader.style.textShadow = '0 0 10px rgba(0, 255, 100, 0.5)';
    blogContainer.appendChild(blogHeader);
    
    // 导航栏
    const navBar = document.createElement('div');
    navBar.id = 'blog-nav';
    navBar.style.position = 'absolute';
    navBar.style.top = '100px';
    navBar.style.left = '5%';
    navBar.style.width = '90%';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'center';
    navBar.style.gap = '40px';
    navBar.style.zIndex = '10';
    navBar.style.padding = '15px 0';
    navBar.style.backgroundColor = 'rgba(10, 30, 15, 0.7)';
    navBar.style.borderRadius = '10px';
    navBar.style.backdropFilter = 'blur(5px)';
    navBar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    blogContainer.appendChild(navBar);
    
    // 导航项
    const navItems = ['Post', 'Favorite', 'Research'];
    navItems.forEach((item, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = item;
        navItem.dataset.page = item.toLowerCase();
        navItem.style.fontFamily = '"Cinzel", serif';
        navItem.style.fontSize = '1.5rem';
        navItem.style.color = '#a0d0a0';
        navItem.style.cursor = 'pointer';
        navItem.style.padding = '5px 15px';
        navItem.style.transition = 'all 0.3s ease';
        navItem.style.position = 'relative';
        
        // 分隔符（除了最后一个）
        if (index < navItems.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'nav-separator';
            separator.innerHTML = '❖';
            separator.style.position = 'absolute';
            separator.style.right = '-25px';
            separator.style.top = '50%';
            separator.style.transform = 'translateY(-50%)';
            separator.style.color = '#70c070';
            navBar.appendChild(separator);
        }
        
        navBar.appendChild(navItem);
    });
    
    // 页面容器
    const pagesContainer = document.createElement('div');
    pagesContainer.id = 'blog-pages';
    pagesContainer.style.display = 'flex';
    pagesContainer.style.width = '300%';
    pagesContainer.style.height = 'calc(100% - 180px)';
    pagesContainer.style.position = 'absolute';
    pagesContainer.style.top = '180px';
    pagesContainer.style.left = '0';
    pagesContainer.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    blogContainer.appendChild(pagesContainer);
    
    // 创建三个页面
    const pages = ['post', 'favorite', 'research'];
    pages.forEach(page => {
        const pageElement = document.createElement('div');
        pageElement.className = 'blog-page';
        pageElement.dataset.page = page;
        pageElement.style.width = '33.3333%';
        pageElement.style.height = '100%';
        pageElement.style.padding = '20px';
        pageElement.style.boxSizing = 'border-box';
        pageElement.style.overflowY = 'auto';
        pagesContainer.appendChild(pageElement);
        
        // 添加页面内容
        if (page === 'post') {
            // 添加文章
            for (let i = 1; i <= 5; i++) {
                const post = document.createElement('div');
                post.className = 'blog-post';
                post.innerHTML = `
                    <div class="post-header">
                        <h3>Article Title ${i}</h3>
                        <span>2023-06-${10+i}</span>
                    </div>
                    <div class="post-content">
                        <p>This is the beginning of the article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                    <div class="post-footer">
                        <button class="read-more">Read more</button>
                    </div>
                `;
                pageElement.appendChild(post);
            }
        } else if (page === 'favorite') {
            // 添加收藏项
            const favorites = [
                { type: 'image', title: 'Mountain Landscape', content: 'Beautiful mountain view at sunset' },
                { type: 'quote', title: 'Inspirational Quote', content: 'The only way to do great work is to love what you do. - Steve Jobs' },
                { type: 'image', title: 'Ocean Waves', content: 'Powerful ocean waves crashing on rocks' },
                { type: 'quote', title: 'Wisdom', content: 'Life is what happens when you\'re busy making other plans. - John Lennon' }
            ];
            
            favorites.forEach((fav, index) => {
                const favorite = document.createElement('div');
                favorite.className = 'blog-favorite';
                favorite.innerHTML = `
                    <div class="fav-header">
                        <h3>${fav.title}</h3>
                    </div>
                    <div class="fav-content">
                        ${fav.type === 'image' ? 
                            `<div class="image-preview" style="background-image: url('./assets/fav${index+1}.jpg')"></div>` :
                            `<div class="quote-preview">${fav.content}</div>`
                        }
                    </div>
                    <div class="fav-footer">
                        <button class="view-item">View</button>
                        ${fav.type === 'image' ? `<button class="download-item">Download</button>` : ''}
                    </div>
                `;
                pageElement.appendChild(favorite);
            });
        } else {
            // 研究页面留白
            const researchPlaceholder = document.createElement('div');
            researchPlaceholder.className = 'research-placeholder';
            researchPlaceholder.innerHTML = `
                <h2>Research Section</h2>
                <p>This section is currently under development. Check back later for updates.</p>
                <div class="placeholder-icon">
                    <i class="fas fa-flask"></i>
                </div>
            `;
            pageElement.appendChild(researchPlaceholder);
        }
    });
    
    // 个人信息卡片（固定在右侧）
    const profileCard = document.createElement('div');
    profileCard.id = 'blog-profile';
    profileCard.style.position = 'fixed';
    profileCard.style.right = '5%';
    profileCard.style.top = '180px';
    profileCard.style.width = '25%';
    profileCard.style.maxWidth = '300px';
    profileCard.style.padding = '20px';
    profileCard.style.backgroundColor = 'rgba(15, 40, 20, 0.85)';
    profileCard.style.borderRadius = '15px';
    profileCard.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)';
    profileCard.style.backdropFilter = 'blur(8px)';
    profileCard.style.zIndex = '5';
    profileCard.innerHTML = `
        <div class="profile-avatar">
            <img src="./avatar.jpg" alt="Profile">
        </div>
        <div class="profile-name">Stardust</div>
        <div class="profile-motto">Turn this imperfect story into the way we hope it to be.</div>
    `;
    blogContainer.appendChild(profileCard);
    
    // 滚动按钮
    const createNavButton = (direction) => {
        const button = document.createElement('div');
        button.className = `nav-button ${direction}`;
        button.innerHTML = `<i class="fas fa-chevron-${direction}"></i>`;
        button.style.position = 'fixed';
        button.style.top = '50%';
        button.style[direction === 'left' ? 'left' : 'right'] = '-50px';
        button.style.transform = 'translateY(-50%)';
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.borderRadius = '50%';
        button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.4s ease, opacity 0.3s ease';
        button.style.opacity = '0';
        button.style.zIndex = '10';
        button.style.boxShadow = '0 0 15px rgba(0, 255, 100, 0.3)';
        blogContainer.appendChild(button);
        return button;
    };
    
    const leftButton = createNavButton('left');
    const rightButton = createNavButton('right');
    
    // 当前页面索引
    let currentPageIndex = 0;
    
    // 导航按钮事件
    leftButton.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePagePosition();
        }
    });
    
    rightButton.addEventListener('click', () => {
        if (currentPageIndex < 2) {
            currentPageIndex++;
            updatePagePosition();
        }
    });
    
    // 更新页面位置
    function updatePagePosition() {
        pagesContainer.style.transform = `translateX(-${currentPageIndex * 33.3333}%)`;
        
        // 更新导航高亮
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            item.style.color = index === currentPageIndex ? '#70ff70' : '#a0d0a0';
            item.style.textShadow = index === currentPageIndex ? '0 0 10px rgba(100, 255, 100, 0.7)' : 'none';
        });
    }
    
    // 鼠标进入左右区域显示按钮
    blogContainer.addEventListener('mousemove', (e) => {
        const rect = blogContainer.getBoundingClientRect();
        const width = rect.width;
        const x = e.clientX - rect.left;
        
        // 左侧1/8区域
        if (x < width / 8) {
            leftButton.style.left = '20px';
            leftButton.style.opacity = '1';
        } else {
            leftButton.style.left = '-50px';
            leftButton.style.opacity = '0';
        }
        
        // 右侧1/8区域
        if (x > width * 7 / 8) {
            rightButton.style.right = '20px';
            rightButton.style.opacity = '1';
        } else {
            rightButton.style.right = '-50px';
            rightButton.style.opacity = '0';
        }
    });
    
    // 导航项点击事件
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            currentPageIndex = index;
            updatePagePosition();
        });
    });
    
    // 添加CSS样式
    const blogStyles = document.createElement('style');
    blogStyles.textContent = `
        #blog-page {
            background: linear-gradient(135deg, #0a200d, #061709);
            font-family: 'Georgia', serif;
        }
        
        #blog-container {
            perspective: 1000px;
        }
        
        #blog-header h1 {
            font-size: 3.5rem;
            letter-spacing: 3px;
            margin: 0;
            animation: glow 2s infinite alternate;
        }
        
        @keyframes glow {
            from { text-shadow: 0 0 10px #00ff40, 0 0 20px #00ff40; }
            to { text-shadow: 0 0 20px #00ff80, 0 0 30px #00ff80; }
        }
        
        .nav-item {
            position: relative;
            transition: all 0.3s ease;
        }
        
        .nav-item:hover {
            transform: translateY(-3px);
            color: #70ff70 !important;
            text-shadow: 0 0 8px rgba(100, 255, 100, 0.6);
        }
        
        .blog-page {
            padding: 20px 5%;
        }
        
        .blog-post, .blog-favorite, .research-placeholder {
            background: rgba(20, 45, 25, 0.8);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(100, 255, 100, 0.1);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .blog-post:hover, .blog-favorite:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 255, 100, 0.3);
        }
        
        .post-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(100, 255, 100, 0.2);
        }
        
        .post-header h3 {
            margin: 0;
            color: #e0ffe0;
            font-size: 1.8rem;
        }
        
        .post-header span {
            color: #90d090;
            font-size: 0.9rem;
        }
        
        .post-content {
            color: #c0e0c0;
            line-height: 1.8;
            margin-bottom: 20px;
            max-height: 150px;
            overflow: hidden;
            position: relative;
        }
        
        .post-content::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(20, 45, 25, 0.8));
        }
        
        .post-footer {
            text-align: right;
        }
        
        .read-more {
            background: linear-gradient(to right, #00b34d, #00802e);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-family: 'Cinzel', serif;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3);
        }
        
        .read-more:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 255, 100, 0.5);
        }
        
        .blog-favorite .fav-header h3 {
            color: #e0ffe0;
            margin-top: 0;
            font-size: 1.8rem;
        }
        
        .image-preview {
            width: 100%;
            height: 250px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
        }
        
        .image-preview::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(to bottom, transparent, rgba(10, 30, 15, 0.9));
            filter: blur(5px);
        }
        
        .quote-preview {
            padding: 20px;
            background: rgba(10, 30, 15, 0.6);
            border-left: 4px solid #00cc66;
            color: #c0e0c0;
            font-style: italic;
            line-height: 1.8;
            border-radius: 5px;
            max-height: 150px;
            overflow: hidden;
            position: relative;
        }
        
        .quote-preview::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(10, 30, 15, 0.8));
        }
        
        .fav-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        
        .view-item, .download-item {
            background: linear-gradient(to right, #00802e, #00b34d);
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-family: 'Cinzel', serif;
            transition: all 0.3s ease;
        }
        
        .view-item:hover, .download-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 10px rgba(0, 255, 100, 0.4);
        }
        
        .research-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 400px;
            color: #a0d0a0;
        }
        
        .research-placeholder h2 {
            font-size: 2.5rem;
            color: #e0ffe0;
            margin-bottom: 20px;
        }
        
        .research-placeholder p {
            font-size: 1.2rem;
            max-width: 600px;
            line-height: 1.8;
        }
        
        .placeholder-icon {
            font-size: 5rem;
            color: #00cc66;
            margin-top: 30px;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        #blog-profile {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .profile-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid rgba(100, 255, 100, 0.3);
            margin-bottom: 20px;
        }
        
        .profile-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .profile-name {
            font-family: 'Cinzel', serif;
            font-size: 1.8rem;
            color: #e0ffe0;
            margin-bottom: 10px;
            text-align: center;
        }
        
        .profile-motto {
            color: #a0d0a0;
            font-style: italic;
            text-align: center;
            line-height: 1.6;
            font-size: 1.1rem;
        }
        
        /* 滚动条样式 */
        .blog-page::-webkit-scrollbar {
            width: 8px;
        }
        
        .blog-page::-webkit-scrollbar-track {
            background: rgba(10, 30, 15, 0.3);
            border-radius: 4px;
        }
        
        .blog-page::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #00cc66, #00802e);
            border-radius: 4px;
        }
        
        .blog-page::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #00ff80, #00b34d);
        }
        
        /* 导航按钮样式 */
        .nav-button {
            transition: all 0.4s ease !important;
        }
        
        .nav-button:hover {
            background: rgba(255, 255, 255, 0.3) !important;
            transform: translateY(-50%) scale(1.1) !important;
        }
        
        .nav-button i {
            font-size: 1.5rem;
            color: #e0ffe0;
        }
    `;
    document.head.appendChild(blogStyles);
    
    // 初始高亮第一项
    updatePagePosition();
    
    // 渐入效果
    setTimeout(() => {
        blogPage.style.opacity = '1';
    }, 100);
    
    // 隐藏时钟控制按钮
    const clockToggle = document.querySelector('.clock-toggle');
    if (clockToggle) clockToggle.style.display = 'none';
}
