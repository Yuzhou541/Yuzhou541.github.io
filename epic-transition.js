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
    document.body.appendChild(blogPage);
    
    // 添加背景图片
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
    
    // 添加博客容器
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';
    blogContainer.style.position = 'relative';
    blogContainer.style.width = '100%';
    blogContainer.style.height = '100%';
    blogContainer.style.overflow = 'hidden';
    blogPage.appendChild(blogContainer);
    
    // 添加导航栏
    const navBar = document.createElement('div');
    navBar.id = 'blog-nav';
    navBar.style.position = 'fixed';
    navBar.style.top = '0';
    navBar.style.left = '0';
    navBar.style.width = '100%';
    navBar.style.height = '80px';
    navBar.style.zIndex = '10';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'center';
    navBar.style.alignItems = 'center';
    navBar.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))';
    navBar.style.backdropFilter = 'blur(5px)';
    navBar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    blogContainer.appendChild(navBar);
    
    // 添加博客标题
    const blogTitle = document.createElement('h1');
    blogTitle.id = 'blog-title';
    blogTitle.textContent = 'Personal Blog';
    blogTitle.style.fontFamily = '"Allura", cursive, "Great Vibes", cursive';
    blogTitle.style.fontSize = '2.5rem';
    blogTitle.style.fontWeight = 'normal';
    blogTitle.style.color = '#333';
    blogTitle.style.margin = '0';
    blogTitle.style.textShadow = '1px 1px 3px rgba(0,0,0,0.1)';
    navBar.appendChild(blogTitle);
    
    // 添加页面导航
    const pageNav = document.createElement('div');
    pageNav.id = 'blog-page-nav';
    pageNav.style.position = 'absolute';
    pageNav.style.bottom = '0';
    pageNav.style.left = '0';
    pageNav.style.width = '100%';
    pageNav.style.height = '50px';
    pageNav.style.display = 'flex';
    pageNav.style.justifyContent = 'center';
    pageNav.style.alignItems = 'center';
    pageNav.style.background = 'rgba(255,255,255,0.7)';
    pageNav.style.borderTop = '1px solid rgba(0,0,0,0.1)';
    navBar.appendChild(pageNav);
    
    // 添加导航按钮
    const pages = ['Post', 'Favorite', 'Research'];
    pages.forEach((page, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'blog-nav-item';
        navItem.textContent = page;
        navItem.style.padding = '0 20px';
        navItem.style.fontFamily = '"Georgia", serif';
        navItem.style.fontSize = '1.1rem';
        navItem.style.color = '#555';
        navItem.style.cursor = 'pointer';
        navItem.style.transition = 'all 0.3s ease';
        
        if (index < pages.length - 1) {
            const separator = document.createElement('span');
            separator.style.margin = '0 10px';
            separator.style.color = '#ccc';
            separator.textContent = '✦';
            pageNav.appendChild(separator);
        }
        
        pageNav.appendChild(navItem);
    });
    
    // 添加页面容器
    const pagesContainer = document.createElement('div');
    pagesContainer.id = 'blog-pages';
    pagesContainer.style.position = 'absolute';
    pagesContainer.style.top = '80px';
    pagesContainer.style.left = '0';
    pagesContainer.style.width = '300%';
    pagesContainer.style.height = 'calc(100% - 80px)';
    pagesContainer.style.display = 'flex';
    pagesContainer.style.transition = 'transform 0.5s ease-in-out';
    blogContainer.appendChild(pagesContainer);
    
    // 添加三个页面
    pages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.className = 'blog-page';
        pageElement.id = `blog-${page.toLowerCase()}`;
        pageElement.style.width = '33.333%';
        pageElement.style.height = '100%';
        pageElement.style.padding = '20px';
        pageElement.style.boxSizing = 'border-box';
        pageElement.style.overflowY = 'auto';
        
        // 添加页面内容
        if (page === 'Post') {
            // Posts页面
            pageElement.style.display = 'flex';
            pageElement.style.flexDirection = 'column';
            pageElement.style.alignItems = 'center';
            
            // 示例文章
            const posts = [
                {
                    title: 'The Beauty of Mathematics',
                    date: '2023-10-15',
                    content: 'Mathematics, rightly viewed, possesses not only truth but supreme beauty—a beauty cold and austere, like that of sculpture...',
                    link: '#'
                },
                {
                    title: 'Exploring the Universe',
                    date: '2023-09-28',
                    content: 'The cosmos is all that is or ever was or ever will be. Our feeblest contemplations of the Cosmos stir us...',
                    link: '#'
                },
                {
                    title: 'Artificial Intelligence Ethics',
                    date: '2023-08-12',
                    content: 'The development of full artificial intelligence could spell the end of the human race. It would take off on its own...',
                    link: '#'
                }
            ];
            
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-post';
                postElement.style.width = 'calc(66.666% - 40px)';
                postElement.style.margin = '20px';
                postElement.style.padding = '25px';
                postElement.style.background = 'rgba(255,255,255,0.85)';
                postElement.style.borderRadius = '15px';
                postElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                
                // 文章标题和日期
                const postHeader = document.createElement('div');
                postHeader.style.display = 'flex';
                postHeader.style.justifyContent = 'space-between';
                postHeader.style.marginBottom = '15px';
                postHeader.style.paddingBottom = '10px';
                postHeader.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
                
                const postTitle = document.createElement('h3');
                postTitle.textContent = post.title;
                postTitle.style.margin = '0';
                postTitle.style.fontFamily = '"Georgia", serif';
                postTitle.style.color = '#333';
                
                const postDate = document.createElement('span');
                postDate.textContent = post.date;
                postDate.style.fontFamily = '"Arial", sans-serif';
                postDate.style.color = '#777';
                postDate.style.fontSize = '0.9rem';
                
                postHeader.appendChild(postTitle);
                postHeader.appendChild(postDate);
                postElement.appendChild(postHeader);
                
                // 文章内容
                const postContent = document.createElement('p');
                postContent.textContent = post.content;
                postContent.style.fontFamily = '"Georgia", serif';
                postContent.style.color = '#555';
                postContent.style.lineHeight = '1.6';
                postContent.style.marginBottom = '20px';
                postElement.appendChild(postContent);
                
                // 阅读更多按钮
                const readMore = document.createElement('a');
                readMore.textContent = 'Read more →';
                readMore.href = post.link;
                readMore.style.fontFamily = '"Arial", sans-serif';
                readMore.style.color = '#3498db';
                readMore.style.textDecoration = 'none';
                readMore.style.fontWeight = 'bold';
                readMore.style.transition = 'color 0.3s ease';
                readMore.addEventListener('mouseenter', () => {
                    readMore.style.color = '#2980b9';
                });
                readMore.addEventListener('mouseleave', () => {
                    readMore.style.color = '#3498db';
                });
                postElement.appendChild(readMore);
                
                pageElement.appendChild(postElement);
            });
        } else if (page === 'Favorite') {
            // Favorites页面
            pageElement.style.display = 'flex';
            pageElement.style.flexWrap = 'wrap';
            pageElement.style.justifyContent = 'center';
            pageElement.style.alignContent = 'flex-start';
            
            // 示例收藏项
            const favorites = [
                {
                    type: 'image',
                    title: 'Starry Night',
                    content: 'A beautiful night sky full of stars',
                    image: 'https://example.com/starry-night.jpg',
                    link: '#'
                },
                {
                    type: 'quote',
                    title: 'Einstein Quote',
                    content: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
                    author: 'Albert Einstein',
                    link: '#'
                },
                {
                    type: 'image',
                    title: 'Mountain View',
                    content: 'Majestic mountains at sunrise',
                    image: 'https://example.com/mountain-view.jpg',
                    link: '#'
                }
            ];
            
            favorites.forEach((fav, i) => {
                const favElement = document.createElement('div');
                favElement.className = 'blog-favorite';
                favElement.style.width = 'calc(50% - 40px)';
                favElement.style.margin = '20px';
                favElement.style.background = 'rgba(255,255,255,0.85)';
                favElement.style.borderRadius = '15px';
                favElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                favElement.style.overflow = 'hidden';
                favElement.style.position = 'relative';
                
                if (fav.type === 'image') {
                    const imgContainer = document.createElement('div');
                    imgContainer.style.height = '200px';
                    imgContainer.style.overflow = 'hidden';
                    imgContainer.style.position = 'relative';
                    
                    const img = document.createElement('div');
                    img.style.height = '100%';
                    img.style.backgroundImage = `url(${fav.image})`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                    img.style.filter = 'blur(2px)';
                    img.style.transition = 'filter 0.3s ease';
                    
                    const overlay = document.createElement('div');
                    overlay.style.position = 'absolute';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.background = 'rgba(0,0,0,0.3)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.color = 'white';
                    overlay.style.fontFamily = '"Georgia", serif';
                    overlay.style.fontSize = '1.5rem';
                    overlay.style.textShadow = '1px 1px 3px rgba(0,0,0,0.5)';
                    overlay.textContent = fav.title;
                    
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(overlay);
                    favElement.appendChild(imgContainer);
                    
                    // 悬停效果
                    favElement.addEventListener('mouseenter', () => {
                        img.style.filter = 'none';
                    });
                    favElement.addEventListener('mouseleave', () => {
                        img.style.filter = 'blur(2px)';
                    });
                } else {
                    const quoteContainer = document.createElement('div');
                    quoteContainer.style.padding = '25px';
                    quoteContainer.style.fontFamily = '"Georgia", serif';
                    quoteContainer.style.color = '#555';
                    quoteContainer.style.lineHeight = '1.6';
                    
                    const quoteContent = document.createElement('blockquote');
                    quoteContent.textContent = fav.content;
                    quoteContent.style.fontSize = '1.1rem';
                    quoteContent.style.fontStyle = 'italic';
                    quoteContent.style.margin = '0 0 15px 0';
                    
                    const quoteAuthor = document.createElement('p');
                    quoteAuthor.textContent = `— ${fav.author}`;
                    quoteAuthor.style.textAlign = 'right';
                    quoteAuthor.style.fontSize = '0.9rem';
                    quoteAuthor.style.color = '#777';
                    
                    quoteContainer.appendChild(quoteContent);
                    quoteContainer.appendChild(quoteAuthor);
                    favElement.appendChild(quoteContainer);
                }
                
                // 查看按钮
                const viewBtn = document.createElement('a');
                viewBtn.textContent = 'View';
                viewBtn.href = fav.link;
                viewBtn.style.position = 'absolute';
                viewBtn.style.bottom = '15px';
                viewBtn.style.right = '15px';
                viewBtn.style.padding = '8px 15px';
                viewBtn.style.background = '#3498db';
                viewBtn.style.color = 'white';
                viewBtn.style.borderRadius = '20px';
                viewBtn.style.fontFamily = '"Arial", sans-serif';
                viewBtn.style.fontSize = '0.9rem';
                viewBtn.style.textDecoration = 'none';
                viewBtn.style.transition = 'all 0.3s ease';
                viewBtn.addEventListener('mouseenter', () => {
                    viewBtn.style.background = '#2980b9';
                    viewBtn.style.transform = 'translateY(-2px)';
                });
                viewBtn.addEventListener('mouseleave', () => {
                    viewBtn.style.background = '#3498db';
                    viewBtn.style.transform = 'none';
                });
                
                // 如果是图片，添加下载按钮
                if (fav.type === 'image') {
                    const downloadBtn = document.createElement('a');
                    downloadBtn.textContent = 'Download';
                    downloadBtn.href = fav.image;
                    downloadBtn.download = fav.title.toLowerCase().replace(/\s+/g, '-') + '.jpg';
                    downloadBtn.style.position = 'absolute';
                    downloadBtn.style.bottom = '15px';
                    downloadBtn.style.left = '15px';
                    downloadBtn.style.padding = '8px 15px';
                    downloadBtn.style.background = '#2ecc71';
                    downloadBtn.style.color = 'white';
                    downloadBtn.style.borderRadius = '20px';
                    downloadBtn.style.fontFamily = '"Arial", sans-serif';
                    downloadBtn.style.fontSize = '0.9rem';
                    downloadBtn.style.textDecoration = 'none';
                    downloadBtn.style.transition = 'all 0.3s ease';
                    downloadBtn.addEventListener('mouseenter', () => {
                        downloadBtn.style.background = '#27ae60';
                        downloadBtn.style.transform = 'translateY(-2px)';
                    });
                    downloadBtn.addEventListener('mouseleave', () => {
                        downloadBtn.style.background = '#2ecc71';
                        downloadBtn.style.transform = 'none';
                    });
                    favElement.appendChild(downloadBtn);
                }
                
                favElement.appendChild(viewBtn);
                pageElement.appendChild(favElement);
            });
        } else {
            // Research页面
            pageElement.style.display = 'flex';
            pageElement.style.justifyContent = 'center';
            pageElement.style.alignItems = 'center';
            
            const placeholder = document.createElement('div');
            placeholder.style.textAlign = 'center';
            placeholder.style.fontFamily = '"Georgia", serif';
            placeholder.style.color = '#555';
            placeholder.style.fontSize = '1.2rem';
            placeholder.textContent = 'Research content will be added here in the future.';
            pageElement.appendChild(placeholder);
        }
        
        pagesContainer.appendChild(pageElement);
    });
    
    // 添加侧边栏
    const sidebar = document.createElement('div');
    sidebar.id = 'blog-sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '80px';
    sidebar.style.right = '5%'; // 右边留1/20
    sidebar.style.width = 'calc(33.333% - 10%)'; // 右边1/3减去留白
    sidebar.style.height = 'calc(100% - 80px)';
    sidebar.style.padding = '20px';
    sidebar.style.boxSizing = 'border-box';
    sidebar.style.overflowY = 'auto';
    blogContainer.appendChild(sidebar);
    
    // 添加头像和名字
    const avatarContainer = document.createElement('div');
    avatarContainer.style.textAlign = 'center';
    avatarContainer.style.marginBottom = '30px';
    
    const sidebarAvatar = document.createElement('div');
    sidebarAvatar.style.width = '120px';
    sidebarAvatar.style.height = '120px';
    sidebarAvatar.style.margin = '0 auto 15px';
    sidebarAvatar.style.borderRadius = '50%';
    sidebarAvatar.style.overflow = 'hidden';
    sidebarAvatar.style.border = '3px solid rgba(255,255,255,0.8)';
    sidebarAvatar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    
    const avatarImg = document.createElement('img');
    avatarImg.src = './avatar.jpg';
    avatarImg.style.width = '100%';
    avatarImg.style.height = '100%';
    avatarImg.style.objectFit = 'cover';
    sidebarAvatar.appendChild(avatarImg);
    
    const sidebarName = document.createElement('h2');
    sidebarName.textContent = 'Stardust';
    sidebarName.style.fontFamily = '"Great Vibes", cursive';
    sidebarName.style.fontSize = '1.8rem';
    sidebarName.style.color = '#333';
    sidebarName.style.margin = '0';
    
    avatarContainer.appendChild(sidebarAvatar);
    avatarContainer.appendChild(sidebarName);
    sidebar.appendChild(avatarContainer);
    
    // 添加座右铭
    const motto = document.createElement('div');
    motto.style.fontFamily = '"Georgia", serif';
    motto.style.fontStyle = 'italic';
    motto.style.color = '#555';
    motto.style.textAlign = 'center';
    motto.style.lineHeight = '1.6';
    motto.textContent = 'Turn this imperfect story into the way we hope it to be.';
    sidebar.appendChild(motto);
    
    // 添加导航按钮
    const leftNav = document.createElement('div');
    leftNav.id = 'blog-nav-left';
    leftNav.style.position = 'fixed';
    leftNav.style.left = '0';
    leftNav.style.top = '50%';
    leftNav.style.transform = 'translateY(-50%)';
    leftNav.style.width = '50px';
    leftNav.style.height = '50px';
    leftNav.style.background = 'rgba(255,255,255,0.7)';
    leftNav.style.borderRadius = '50%';
    leftNav.style.display = 'flex';
    leftNav.style.justifyContent = 'center';
    leftNav.style.alignItems = 'center';
    leftNav.style.cursor = 'pointer';
    leftNav.style.opacity = '0';
    leftNav.style.transition = 'all 0.3s ease';
    leftNav.style.zIndex = '5';
    leftNav.innerHTML = '<i class="fas fa-chevron-left" style="font-size: 1.2rem; color: #555;"></i>';
    blogContainer.appendChild(leftNav);
    
    const rightNav = document.createElement('div');
    rightNav.id = 'blog-nav-right';
    rightNav.style.position = 'fixed';
    rightNav.style.right = '0';
    rightNav.style.top = '50%';
    rightNav.style.transform = 'translateY(-50%)';
    rightNav.style.width = '50px';
    rightNav.style.height = '50px';
    rightNav.style.background = 'rgba(255,255,255,0.7)';
    rightNav.style.borderRadius = '50%';
    rightNav.style.display = 'flex';
    rightNav.style.justifyContent = 'center';
    rightNav.style.alignItems = 'center';
    rightNav.style.cursor = 'pointer';
    rightNav.style.opacity = '0';
    rightNav.style.transition = 'all 0.3s ease';
    rightNav.style.zIndex = '5';
    rightNav.innerHTML = '<i class="fas fa-chevron-right" style="font-size: 1.2rem; color: #555;"></i>';
    blogContainer.appendChild(rightNav);
    
    // 添加导航按钮悬停效果
    leftNav.addEventListener('mouseenter', () => {
        leftNav.style.background = 'rgba(255,255,255,0.9)';
        leftNav.style.transform = 'translateY(-50%) scale(1.1)';
    });
    leftNav.addEventListener('mouseleave', () => {
        leftNav.style.background = 'rgba(255,255,255,0.7)';
        leftNav.style.transform = 'translateY(-50%)';
    });
    
    rightNav.addEventListener('mouseenter', () => {
        rightNav.style.background = 'rgba(255,255,255,0.9)';
        rightNav.style.transform = 'translateY(-50%) scale(1.1)';
    });
    rightNav.addEventListener('mouseleave', () => {
        rightNav.style.background = 'rgba(255,255,255,0.7)';
        rightNav.style.transform = 'translateY(-50%)';
    });
    
    // 添加导航按钮显示/隐藏逻辑
    blogContainer.addEventListener('mousemove', (e) => {
        const containerWidth = blogContainer.offsetWidth;
        const mouseX = e.clientX;
        
        // 左侧1/8区域
        if (mouseX < containerWidth / 8) {
            leftNav.style.opacity = '1';
        } else {
            leftNav.style.opacity = '0';
        }
        
        // 右侧1/8区域
        if (mouseX > containerWidth * 7 / 8) {
            rightNav.style.opacity = '1';
        } else {
            rightNav.style.opacity = '0';
        }
    });
    
    // 添加导航功能
    let currentPageIndex = 0;
    const pageCount = pages.length;
    
    leftNav.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePagePosition();
            updateNavHighlight();
        }
    });
    
    rightNav.addEventListener('click', () => {
        if (currentPageIndex < pageCount - 1) {
            currentPageIndex++;
            updatePagePosition();
            updateNavHighlight();
        }
    });
    
    // 添加页面导航点击功能
    const navItems = document.querySelectorAll('.blog-nav-item');
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentPageIndex = index;
            updatePagePosition();
            updateNavHighlight();
        });
    });
    
    function updatePagePosition() {
        const translateX = -currentPageIndex * 33.333;
        pagesContainer.style.transform = `translateX(${translateX}%)`;
    }
    
    function updateNavHighlight() {
        navItems.forEach((item, index) => {
            if (index === currentPageIndex) {
                item.style.color = '#3498db';
                item.style.fontWeight = 'bold';
            } else {
                item.style.color = '#555';
                item.style.fontWeight = 'normal';
            }
        });
    }
    
    // 初始化高亮
    updateNavHighlight();
    
    // 添加滚动时侧边栏固定效果
    const mainContent = document.querySelectorAll('.blog-page');
    mainContent.forEach(content => {
        content.addEventListener('scroll', () => {
            const scrollTop = content.scrollTop;
            sidebar.style.transform = `translateY(${-scrollTop}px)`;
        });
    });
    
    // 显示博客页面
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
}
