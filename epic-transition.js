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

    // Create multiple swirl layers for enhanced effect
    const swirlLayers = [];
    const layerCount = 5; // Increased from 3 to 5 for more depth
    for (let i = 0; i < layerCount; i++) {
        const swirl = document.createElement('div');
        swirl.style.position = 'absolute';
        swirl.style.width = `${150 + i * 30}px`; // Varying sizes
        swirl.style.height = `${150 + i * 30}px`;
        swirl.style.borderRadius = '50%';
        
        // Different styles for each layer
        if (i === 0) {
            swirl.style.background = `
                conic-gradient(
                    from 0deg,
                    rgba(0, 20, 40, 0.95) 0%,
                    rgba(0, 80, 160, 0.95) 20%,
                    rgba(20, 20, 60, 0.95) 30%,
                    rgba(0, 80, 160, 0.95) 40%,
                    rgba(20, 20, 60, 0.95) 50%,
                    rgba(0, 80, 160, 0.95) 60%,
                    rgba(20, 20, 60, 0.95) 70%,
                    rgba(0, 80, 160, 0.95) 80%,
                    rgba(20, 20, 60, 0.95) 90%,
                    rgba(0, 20, 40, 0.95) 100%
                )
            `;
            swirl.style.filter = 'blur(2px)';
        } else if (i === 1) {
            swirl.style.background = `
                radial-gradient(
                    circle,
                    rgba(0, 150, 255, 0.8) 0%,
                    rgba(0, 80, 200, 0.9) 50%,
                    rgba(0, 40, 120, 0.95) 100%
                )
            `;
            swirl.style.filter = 'blur(1px)';
        } else if (i === 2) {
            swirl.style.background = `
                repeating-radial-gradient(
                    circle at center,
                    rgba(0, 180, 255, 0.7) 0%,
                    rgba(0, 100, 220, 0.8) 10%,
                    rgba(0, 60, 150, 0.9) 20%
                )
            `;
        } else if (i === 3) {
            swirl.style.background = `
                repeating-conic-gradient(
                    from 45deg,
                    rgba(0, 100, 200, 0.8) 0deg 30deg,
                    rgba(50, 0, 150, 0.8) 30deg 60deg
                )
            `;
            swirl.style.filter = 'blur(1.5px)';
        } else {
            swirl.style.background = `
                radial-gradient(
                    circle,
                    rgba(100, 0, 200, 0.7) 0%,
                    rgba(50, 0, 150, 0.8) 50%,
                    rgba(20, 0, 100, 0.9) 100%
                )
            `;
            swirl.style.filter = 'blur(3px)';
        }
        
        swirl.style.left = `${avatarCenter.x - (75 + i * 15)}px`;
        swirl.style.top = `${avatarCenter.y - (75 + i * 15)}px`;
        swirl.style.transformOrigin = 'center center';
        swirl.style.boxShadow = `0 0 ${30 + i * 10}px rgba(0,100,255,0.7)`;
        swirlContainer.appendChild(swirl);
        swirlLayers.push(swirl);
    }

    // Enhanced swirl animation with longer duration
    let scale = 1;
    let opacity = 1;
    const rotations = [0, 180, 90, 270, 45]; // Different rotation directions
    const swirlAnimation = setInterval(() => {
        scale += 0.075;  // Slower scaling for longer duration
        opacity -= 0.0075; // Slower fade for longer duration
        
        swirlLayers.forEach((swirl, index) => {
            rotations[index] += (index + 1) * 8;  // Different rotation speeds
            swirl.style.transform = `scale(${scale * (1 + index * 0.15)}) rotate(${rotations[index]}deg)`;
            swirl.style.opacity = opacity * (1 - index * 0.08);
            
            // Add pulsing effect
            if (index % 2 === 0) {
                swirl.style.boxShadow = `0 0 ${30 + index * 10}px rgba(0,${100 + index * 30},255,${opacity * 0.7})`;
            }
        });
        
        if (scale > 20) {  // Increased from 15 to 20 for longer animation
            clearInterval(swirlAnimation);
            showEpicScrollPage();
        }
    }, 16); // Slightly faster frame rate for smoother animation
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

    // Preload fire animation
    const fireImg = new Image();
    fireImg.src = './assets/animation/fire-animation.gif';

    // Make entire scroll clickable for fire animation
    scrollContent.style.cursor = 'pointer';
    scrollContent.addEventListener('click', function() {
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
                
                // Play narration and fire sounds together
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
    
    const scroll = document.getElementById('epic-scroll');
    const epicPage = document.getElementById('epic-scroll-page');
    
    // Create fire elements
    const fireBottom = document.createElement('img');
    fireBottom.src = './assets/animation/fire-animation.gif';
    fireBottom.style.position = 'absolute';
    fireBottom.style.bottom = '0';
    fireBottom.style.left = '0';
    fireBottom.style.width = '100%';
    fireBottom.style.height = '0';
    fireBottom.style.objectFit = 'cover';
    fireBottom.style.transition = 'height 3s ease-in-out';
    fireBottom.style.zIndex = '5';
    fireBottom.style.transformOrigin = 'bottom';
    
    const fireTop = document.createElement('img');
    fireTop.src = './assets/animation/fire-animation.gif';
    fireTop.style.position = 'absolute';
    fireTop.style.top = '0';
    fireTop.style.left = '0';
    fireTop.style.width = '100%';
    fireTop.style.height = '0';
    fireTop.style.objectFit = 'cover';
    fireTop.style.transition = 'height 3s ease-in-out';
    fireTop.style.zIndex = '5';
    fireTop.style.transform = 'scaleY(-1)';
    fireTop.style.transformOrigin = 'top';
    
    scroll.appendChild(fireBottom);
    scroll.appendChild(fireTop);
    
    // Start fire spread
    setTimeout(() => {
        fireBottom.style.height = '50%';
        fireTop.style.height = '50%';
        
        // Final full-screen fire
        setTimeout(() => {
            const fullFire = document.createElement('div');
            fullFire.style.position = 'fixed';
            fullFire.style.top = '0';
            fullFire.style.left = '0';
            fullFire.style.width = '100%';
            fullFire.style.height = '100%';
            fullFire.style.background = 'url("./assets/animation/fire-animation.gif") center/cover';
            fullFire.style.zIndex = '1002';
            fullFire.style.opacity = '0';
            fullFire.style.transition = 'opacity 1.5s ease-in-out';
            document.body.appendChild(fullFire);
            
            setTimeout(() => {
                fullFire.style.opacity = '1';
                
                // Transition to blog page after fire is fully visible
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
                }, 1500);
            }, 50);
        }, 2000);
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
