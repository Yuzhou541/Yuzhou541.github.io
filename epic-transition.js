// epic-transition.js
document.addEventListener('DOMContentLoaded', function() {
    // 获取头像元素
    const avatar = document.querySelector('#avatar-frame img');
    
    // 为头像添加点击事件
    avatar.addEventListener('click', function() {
        // 开始漩涡动画
        startSwirlAnimation();
    });
});

function startSwirlAnimation() {
    // 创建漩涡动画容器
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

    // 获取头像位置和尺寸
    const avatar = document.querySelector('#avatar-frame');
    const avatarRect = avatar.getBoundingClientRect();
    const avatarCenter = {
        x: avatarRect.left + avatarRect.width / 2,
        y: avatarRect.top + avatarRect.height / 2
    };

    // 创建漩涡效果 - 修改为条纹漩涡效果
    const swirl = document.createElement('div');
    swirl.style.position = 'absolute';
    swirl.style.width = '150px';
    swirl.style.height = '150px';
    swirl.style.borderRadius = '50%';
    swirl.style.background = `
        conic-gradient(
            from 0deg,
            rgba(0, 20, 40, 0.9) 0%,
            rgba(0, 50, 100, 0.9) 20%,
            rgba(10, 10, 30, 0.9) 30%,
            rgba(0, 50, 100, 0.9) 40%,
            rgba(10, 10, 30, 0.9) 50%,
            rgba(0, 50, 100, 0.9) 60%,
            rgba(10, 10, 30, 0.9) 70%,
            rgba(0, 50, 100, 0.9) 80%,
            rgba(10, 10, 30, 0.9) 90%,
            rgba(0, 20, 40, 0.9) 100%
        )
    `;
    swirl.style.left = `${avatarCenter.x - 75}px`;
    swirl.style.top = `${avatarCenter.y - 75}px`;
    swirl.style.transformOrigin = 'center center';
    swirl.style.boxShadow = '0 0 30px rgba(0,100,255,0.7)';
    swirlContainer.appendChild(swirl);

    // 漩涡动画 - 加快动画速度
    let scale = 1;
    let opacity = 1;
    let rotation = 0;
    const swirlAnimation = setInterval(() => {
        scale += 0.1;  // 加快放大速度
        rotation += 10;  // 加快旋转速度
        opacity -= 0.01;
        
        swirl.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
        swirl.style.opacity = opacity;
        
        if (scale > 20) {
            clearInterval(swirlAnimation);
            showEpicScrollPage();
        }
    }, 10);  // 减少间隔时间
}

function showEpicScrollPage() {
    // 移除漩涡容器
    const swirlContainer = document.getElementById('swirl-container');
    if (swirlContainer) {
        swirlContainer.remove();
    }

    // 创建史诗卷轴页面
    const epicPage = document.createElement('div');
    epicPage.id = 'epic-scroll-page';
    epicPage.style.position = 'fixed';
    epicPage.style.top = '0';
    epicPage.style.left = '0';
    epicPage.style.width = '100%';
    epicPage.style.height = '100%';
    epicPage.style.zIndex = '1001';
    epicPage.style.background = 'url("./assets/images/background.jpeg") center/cover no-repeat';
    epicPage.style.display = 'flex';
    epicPage.style.flexDirection = 'column';
    epicPage.style.justifyContent = 'center';
    epicPage.style.alignItems = 'center';
    epicPage.style.opacity = '0';
    epicPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(epicPage);

    // 添加背景装饰元素
    addEpicBackgroundElements(epicPage);

    // 创建羊皮纸卷轴 - 修改边框效果
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

    // 添加卷轴边缘装饰 - 更精致的边缘效果
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

    // 添加卷轴内容
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

    // 添加史诗文本
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

    // 添加火苗按钮 - 改进火焰效果
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
            color: #3a2c1a; 
            font-size: 0.9rem;
        ">Ignite</div>
    `;
    scrollContent.appendChild(flameButton);

    // 添加火焰动画
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

    // 显示页面
    setTimeout(() => {
        epicPage.style.opacity = '1';
        
        setTimeout(() => {
            scroll.style.opacity = '1';
            scroll.style.transform = 'scale(1)';
            
            setTimeout(() => {
                epicText.style.opacity = '1';
                epicText.style.transform = 'translateY(0)';
                
                // 播放旁白声音
                playNarration();
            }, 500);
        }, 500);
    }, 100);

    // 火苗点击事件
    flameButton.addEventListener('click', function() {
        startFlameAnimation();
    });
}

function addEpicBackgroundElements(container) {
    // 添加飘动的粒子效果
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = `rgba(100, 150, 255, ${Math.random() * 0.2 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particle.style.transition = 'opacity 2s ease-in-out';
        container.appendChild(particle);

        // 随机动画
        animateParticle(particle);
        
        // 淡入
        setTimeout(() => {
            particle.style.opacity = '1';
        }, Math.random() * 1000);
    }

    // 添加一些装饰性元素
    const decor1 = document.createElement('div');
    decor1.style.position = 'absolute';
    decor1.style.top = '20px';
    decor1.style.left = '20px';
    decor1.style.width = '100px';
    decor1.style.height = '100px';
    decor1.style.backgroundImage = 'radial-gradient(circle, transparent 60%, rgba(0,50,150,0.3) 60%)';
    decor1.style.opacity = '0.3';
    decor1.style.filter = 'blur(2px)';
    container.appendChild(decor1);

    const decor2 = document.createElement('div');
    decor2.style.position = 'absolute';
    decor2.style.bottom = '20px';
    decor2.style.right = '20px';
    decor2.style.width = '150px';
    decor2.style.height = '150px';
    decor2.style.backgroundImage = 'radial-gradient(circle, transparent 60%, rgba(0,50,150,0.3) 60%)';
    decor2.style.opacity = '0.3';
    decor2.style.filter = 'blur(2px)';
    container.appendChild(decor2);
}

function animateParticle(particle) {
    const duration = Math.random() * 20000 + 10000;
    const xMovement = (Math.random() - 0.5) * 200;
    const yMovement = (Math.random() - 0.5) * 200;
    
    particle.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xMovement}px, ${yMovement}px)` }
    ], {
        duration: duration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}

function playNarration() {
    const audio = new Audio('./assets/audio/prologue.m4a');
    audio.volume = 0.7;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

function startFlameAnimation() {
    const flame = document.getElementById('flame');
    const scroll = document.getElementById('epic-scroll');
    const epicPage = document.getElementById('epic-scroll-page');
    
    // 播放火焰声音
    const fireAudio = new Audio('./assets/audio/fire-sound.mp3');
    fireAudio.volume = 0.6;
    fireAudio.play().catch(e => console.log('Fire audio play failed:', e));
    
    // 移除点击事件以防止多次触发
    const flameButton = document.getElementById('flame-button');
    flameButton.style.pointerEvents = 'none';
    
    // 改进火焰扩大动画
    let flameSize = 1;
    let flameOpacity = 1;
    const flameAnimation = setInterval(() => {
        flameSize += 0.08;
        flameOpacity -= 0.008;
        
        flame.style.transform = `scale(${flameSize})`;
        flame.style.opacity = flameOpacity;
        
        // 添加燃烧效果到羊皮纸
        if (flameSize > 3) {
            const burnOpacity = (flameSize - 3) / 10;
            scroll.style.boxShadow = `
                0 0 50px rgba(255, 100, 0, ${burnOpacity * 0.5}),
                inset 0 0 50px rgba(0,0,0,0.3),
                0 0 0 10px rgba(139, 69, 19, ${0.3 - burnOpacity * 0.1}),
                0 0 0 15px rgba(160, 82, 45, ${0.2 - burnOpacity * 0.1}),
                0 0 0 20px rgba(139, 69, 19, ${0.1 - burnOpacity * 0.05})
            `;
            
            // 创建更真实的燃烧痕迹
            if (flameSize > 5 && Math.random() > 0.6) {
                createBurnMark(scroll, flameSize);
            }
        }
        
        if (flameSize > 15) {
            clearInterval(flameAnimation);
            
            // 过渡到博客页面
            setTimeout(() => {
                transitionToBlogPage();
            }, 500);
        }
    }, 16);
}

function createBurnMark(container, size) {
    const burn = document.createElement('div');
    burn.style.position = 'absolute';
    const width = Math.random() * 50 + 20;
    burn.style.width = `${width}px`;
    burn.style.height = `${width * (0.5 + Math.random() * 0.5)}px`;
    burn.style.background = `
        radial-gradient(
            ellipse at center,
            rgba(255,100,0,${0.3 + Math.random() * 0.2}) 0%,
            rgba(100,30,0,${0.5 + Math.random() * 0.2}) 70%,
            transparent 100%
        )
    `;
    burn.style.borderRadius = '50%';
    burn.style.left = `${Math.random() * 70 + 15}%`;
    burn.style.top = `${Math.random() * 70 + 15}%`;
    burn.style.opacity = '0';
    burn.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    burn.style.transform = 'scale(0.8) rotate(10deg)';
    burn.style.filter = 'blur(1px)';
    container.appendChild(burn);
    
    setTimeout(() => {
        burn.style.opacity = '1';
        burn.style.transform = 'scale(1) rotate(0)';
    }, 100);
}

function transitionToBlogPage() {
    // 创建博客页面容器
    const blogPage = document.createElement('div');
    blogPage.id = 'blog-page';
    blogPage.style.position = 'fixed';
    blogPage.style.top = '0';
    blogPage.style.left = '0';
    blogPage.style.width = '100%';
    blogPage.style.height = '100%';
    blogPage.style.zIndex = '1002';
    blogPage.style.backgroundColor = '#f5f5f5';
    blogPage.style.display = 'flex';
    blogPage.style.justifyContent = 'center';
    blogPage.style.alignItems = 'center';
    blogPage.style.opacity = '0';
    blogPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(blogPage);
    
    // 博客页面内容
    const blogContent = document.createElement('div');
    blogContent.style.textAlign = 'center';
    blogContent.innerHTML = `
        <h1 style="font-family: 'Georgia', serif; color: #333; margin-bottom: 20px;">Welcome to My Blog</h1>
        <p style="font-family: 'Georgia', serif; color: #666; max-width: 600px; margin: 0 auto;">
            This is a placeholder for the blog page. Content will be added here in the future.
        </p>
    `;
    blogPage.appendChild(blogContent);
    
    // 移除史诗页面
    const epicPage = document.getElementById('epic-scroll-page');
    if (epicPage) {
        epicPage.style.opacity = '0';
        
        setTimeout(() => {
            epicPage.remove();
            
            // 显示博客页面
            blogPage.style.opacity = '1';
        }, 1000);
    } else {
        blogPage.style.opacity = '1';
    }
}
