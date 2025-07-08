// epic-transition.js
document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar-frame img');
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

    // Create 5 swirl layers
    const swirlLayers = [];
    for (let i = 0; i < 5; i++) {
        const swirl = document.createElement('div');
        swirl.style.position = 'absolute';
        swirl.style.width = `${150 + i * 30}px`;
        swirl.style.height = `${150 + i * 30}px`;
        swirl.style.borderRadius = '50%';
        swirl.style.background = `
            conic-gradient(
                from ${i * 72}deg,
                rgba(0, 20, 40, 0.95) 0%,
                rgba(0, 50, 100, 0.95) 20%,
                rgba(10, 10, 30, 0.95) 30%,
                rgba(0, 50, 100, 0.95) 40%,
                rgba(10, 10, 30, 0.95) 50%,
                rgba(0, 50, 100, 0.95) 60%,
                rgba(10, 10, 30, 0.95) 70%,
                rgba(0, 50, 100, 0.95) 80%,
                rgba(10, 10, 30, 0.95) 90%,
                rgba(0, 20, 40, 0.95) 100%
            )
        `;
        swirl.style.left = `${avatarCenter.x - (75 + i * 15)}px`;
        swirl.style.top = `${avatarCenter.y - (75 + i * 15)}px`;
        swirl.style.transformOrigin = 'center center';
        swirl.style.boxShadow = `0 0 ${15 + i * 5}px rgba(0,100,255,0.7)`;
        swirlContainer.appendChild(swirl);
        swirlLayers.push(swirl);
    }

    // Animation with doubled duration
    let scale = 1;
    let opacity = 1;
    const rotations = [0, 180, 90, 270, 45];
    const swirlAnimation = setInterval(() => {
        scale += 0.05;
        opacity -= 0.005;
        
        swirlLayers.forEach((swirl, index) => {
            rotations[index] += (index + 1) * 4;
            swirl.style.transform = `scale(${scale * (1 + index * 0.1)}) rotate(${rotations[index]}deg)`;
            swirl.style.opacity = opacity * (1 - index * 0.1);
        });
        
        if (scale > 20) {
            clearInterval(swirlAnimation);
            showEpicScrollPage();
        }
    }, 20);
}

let narrationAudio = null;
let fireAudio = null;
let isTransitioning = false;

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
    epicPage.style.background = 'url("./assets/images/background.jpeg") center/cover no-repeat';
    epicPage.style.display = 'flex';
    epicPage.style.flexDirection = 'column';
    epicPage.style.justifyContent = 'center';
    epicPage.style.alignItems = 'center';
    epicPage.style.opacity = '0';
    epicPage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(epicPage);

    // Create initial fire at bottom of screen
    const initialFire = document.createElement('div');
    initialFire.id = 'initial-fire';
    initialFire.style.position = 'fixed';
    initialFire.style.bottom = '0';
    initialFire.style.left = '0';
    initialFire.style.width = '100%';
    initialFire.style.height = '100px';
    initialFire.style.background = 'url("./assets/animation/fire-animation.gif") bottom/cover no-repeat';
    initialFire.style.zIndex = '1001';
    initialFire.style.transition = 'height 0.5s ease-in-out';
    initialFire.style.pointerEvents = 'none';
    document.body.appendChild(initialFire);

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

    // Scroll edge decorations
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
    epicText.style.fontFamily = '"UnifrakturMaguntia", cursive';
    epicText.style.fontSize = '2.2rem'; // 稍微加大字号
    epicText.style.lineHeight = '1.5';
    epicText.style.color = '#3a2c1a';
    epicText.style.textShadow = `
        1px 1px 2px rgba(0,0,0,0.3),
        0 0 5px rgba(139, 69, 19, 0.5)
    `; // 添加古铜色光晕
    epicText.style.marginBottom = '40px';
    epicText.style.opacity = '0';
    epicText.style.transform = 'translateY(20px)';
    epicText.style.transition = 'all 1s ease-in-out 0.5s';
    epicText.style.letterSpacing = '1px'; // 增加字母间距
    epicText.style.fontWeight = 'bold';
    epicText.style.textTransform = 'uppercase'; // 全部大写更显古典
    scrollContent.appendChild(epicText);

    // Make entire page clickable for fire animation
    epicPage.style.cursor = 'pointer';
    epicPage.addEventListener('click', function() {
        startFlameAnimation();
    });

    setTimeout(() => {
        epicPage.style.opacity = '1';
        
        setTimeout(() => {
            scroll.style.opacity = '1';
            scroll.style.transform = 'scale(1)';
            
            setTimeout(() => {
                epicText.style.opacity = '1';
                epicText.style.transform = 'translateY(0)';
                
                // Play narration sound
                playNarration();
                
            }, 500);
        }, 500);
    }, 100);
}

function playNarration() {
    // Stop any previous audio
    if (narrationAudio) {
        narrationAudio.pause();
        narrationAudio.currentTime = 0;
    }
    
    if (fireAudio) {
        fireAudio.pause();
        fireAudio.currentTime = 0;
    }
    
    narrationAudio = new Audio('./assets/audio/prologue.m4a');
    narrationAudio.volume = 0.7;
    
    fireAudio = new Audio('./assets/audio/fire-sound.mp3');
    fireAudio.volume = 0.6;
    fireAudio.loop = true;
    
    // Play both sounds
    narrationAudio.play().catch(e => console.log('Audio play failed:', e));
    fireAudio.play().catch(e => console.log('Fire audio play failed:', e));
    
    // Stop narration after its duration (but let fire continue)
    narrationAudio.addEventListener('ended', () => {
        if (!isTransitioning) {
            narrationAudio.pause();
            narrationAudio.currentTime = 0;
        }
    });
}

function startFlameAnimation() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    // Remove initial small fire
    const initialFire = document.getElementById('initial-fire');
    if (initialFire) {
        initialFire.remove();
    }

    // Create full-screen fire overlay
    const fireOverlay = document.createElement('div');
    fireOverlay.id = 'fire-overlay';
    fireOverlay.style.position = 'fixed';
    fireOverlay.style.bottom = '0';
    fireOverlay.style.left = '0';
    fireOverlay.style.width = '100%';
    fireOverlay.style.height = '0';
    fireOverlay.style.background = `
        url("./assets/animation/fire-animation.gif") bottom/cover no-repeat,
        linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 30%)
    `;
    fireOverlay.style.zIndex = '1002';
    fireOverlay.style.transition = 'height 3s ease-in-out';
    document.body.appendChild(fireOverlay);

    // Start fire spread
    setTimeout(() => {
        fireOverlay.style.height = '100%';
        
        // When fire reaches top
        setTimeout(() => {
            // Transition to blog page
            setTimeout(() => {
                if (narrationAudio) {
                    narrationAudio.pause();
                    narrationAudio.currentTime = 0;
                }
                if (fireAudio) {
                    fireAudio.pause();
                    fireAudio.currentTime = 0;
                }
                transitionToBlogPage();
            }, 1000);
        }, 3000);
    }, 100);
}

function transitionToBlogPage() {
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
    
    const blogContent = document.createElement('div');
    blogContent.style.textAlign = 'center';
    blogContent.innerHTML = `
        <h1 style="font-family: 'Georgia', serif; color: #333; margin-bottom: 20px;">Welcome to My Blog</h1>
        <p style="font-family: 'Georgia', serif; color: #666; max-width: 600px; margin: 0 auto;">
            This is a placeholder for the blog page. Content will be added here in the future.
        </p>
    `;
    blogPage.appendChild(blogContent);
    
    const epicPage = document.getElementById('epic-scroll-page');
    if (epicPage) {
        epicPage.style.opacity = '0';
        
        setTimeout(() => {
            epicPage.remove();
            blogPage.style.opacity = '1';
        }, 1000);
    } else {
        blogPage.style.opacity = '1';
    }
    
    isTransitioning = false;
}
