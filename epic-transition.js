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
            showBlogPage();
        }
    }, 10);
}

let narrationAudio = null; // 全局保存音频对象
let fireAudio = null;     // 全局保存火焰音频对象

function showBlogPage() {
    const swirlContainer = document.getElementById('swirl-container');
    if (swirlContainer) {
        swirlContainer.remove();
    }

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

    // 创建背景层
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
    background.style.zIndex = '0';
    blogPage.appendChild(background);

    // 创建内容容器
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';
    blogContainer.style.position = 'absolute';
    blogContainer.style.top = '0';
    blogContainer.style.left = '0';
    blogContainer.style.width = '100%';
    blogContainer.style.height = '100%';
    blogContainer.style.display = 'flex';
    blogContainer.style.flexDirection = 'column';
    blogContainer.style.zIndex = '1';
    blogPage.appendChild(blogContainer);

    // 创建导航栏
    const navBar = document.createElement('div');
    navBar.id = 'blog-nav';
    navBar.style.width = '100%';
    navBar.style.padding = '20px 0';
    navBar.style.textAlign = 'center';
    navBar.style.background = 'linear-gradient(to right, rgba(10, 25, 15, 0.9), rgba(20, 50, 30, 0.9))';
    navBar.style.backdropFilter = 'blur(5px)';
    navBar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    blogContainer.appendChild(navBar);

    // 博客标题
    const blogTitle = document.createElement('h1');
    blogTitle.id = 'blog-title';
    blogTitle.textContent = 'Personal Blog';
    blogTitle.style.fontFamily = '"Great Vibes", cursive, "Allura", cursive';
    blogTitle.style.fontSize = '3rem';
    blogTitle.style.color = '#fff';
    blogTitle.style.margin = '0 0 20px 0';
    blogTitle.style.textShadow = '0 0 10px rgba(0, 255, 100, 0.5)';
    navBar.appendChild(blogTitle);

    // 导航标签
    const navTabs = document.createElement('div');
    navTabs.id = 'blog-tabs';
    navTabs.style.display = 'flex';
    navTabs.style.justifyContent = 'center';
    navTabs.style.gap = '30px';
    navBar.appendChild(navTabs);

    const tabs = ['Post', 'Favorite', 'Research'];
    tabs.forEach(tab => {
        const tabElement = document.createElement('div');
        tabElement.className = 'blog-tab';
        tabElement.textContent = tab;
        tabElement.style.fontFamily = '"Cinzel", serif';
        tabElement.style.fontSize = '1.2rem';
        tabElement.style.color = '#aaa';
        tabElement.style.cursor = 'pointer';
        tabElement.style.padding = '10px 20px';
        tabElement.style.borderRadius = '5px';
        tabElement.style.transition = 'all 0.3s ease';
        
        if (tab === 'Post') {
            tabElement.style.color = '#fff';
            tabElement.style.background = 'rgba(0, 255, 100, 0.2)';
            tabElement.style.borderBottom = '2px solid #0f0';
        }
        
        tabElement.addEventListener('click', () => {
            document.querySelectorAll('.blog-tab').forEach(t => {
                t.style.color = '#aaa';
                t.style.background = 'transparent';
                t.style.borderBottom = 'none';
            });
            tabElement.style.color = '#fff';
            tabElement.style.background = 'rgba(0, 255, 100, 0.2)';
            tabElement.style.borderBottom = '2px solid #0f0';
            showBlogSection(tab);
        });
        
        navTabs.appendChild(tabElement);
        
        // 添加分隔符（除了最后一个）
        if (tab !== tabs[tabs.length - 1]) {
            const separator = document.createElement('div');
            separator.className = 'tab-separator';
            separator.innerHTML = '✧';
            separator.style.color = '#555';
            separator.style.fontSize = '1.5rem';
            separator.style.display = 'flex';
            separator.style.alignItems = 'center';
            navTabs.appendChild(separator);
        }
    });

    // 创建内容区域
    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'blog-content-wrapper';
    contentWrapper.style.flex = '1';
    contentWrapper.style.display = 'flex';
    contentWrapper.style.overflow = 'hidden';
    contentWrapper.style.position = 'relative';
    blogContainer.appendChild(contentWrapper);

    // 创建滚动按钮
    const leftScrollBtn = document.createElement('div');
    leftScrollBtn.id = 'blog-scroll-left';
    leftScrollBtn.innerHTML = '&larr;';
    leftScrollBtn.style.position = 'fixed';
    leftScrollBtn.style.left = '0';
    leftScrollBtn.style.top = '50%';
    leftScrollBtn.style.transform = 'translateY(-50%)';
    leftScrollBtn.style.width = '40px';
    leftScrollBtn.style.height = '40px';
    leftScrollBtn.style.borderRadius = '50%';
    leftScrollBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    leftScrollBtn.style.color = '#fff';
    leftScrollBtn.style.display = 'flex';
    leftScrollBtn.style.alignItems = 'center';
    leftScrollBtn.style.justifyContent = 'center';
    leftScrollBtn.style.cursor = 'pointer';
    leftScrollBtn.style.zIndex = '10';
    leftScrollBtn.style.opacity = '0';
    leftScrollBtn.style.transition = 'all 0.3s ease';
    leftScrollBtn.style.fontSize = '1.2rem';
    leftScrollBtn.style.backdropFilter = 'blur(5px)';
    leftScrollBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    blogContainer.appendChild(leftScrollBtn);

    const rightScrollBtn = document.createElement('div');
    rightScrollBtn.id = 'blog-scroll-right';
    rightScrollBtn.innerHTML = '&rarr;';
    rightScrollBtn.style.position = 'fixed';
    rightScrollBtn.style.right = '0';
    rightScrollBtn.style.top = '50%';
    rightScrollBtn.style.transform = 'translateY(-50%)';
    rightScrollBtn.style.width = '40px';
    rightScrollBtn.style.height = '40px';
    rightScrollBtn.style.borderRadius = '50%';
    rightScrollBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    rightScrollBtn.style.color = '#fff';
    rightScrollBtn.style.display = 'flex';
    rightScrollBtn.style.alignItems = 'center';
    rightScrollBtn.style.justifyContent = 'center';
    rightScrollBtn.style.cursor = 'pointer';
    rightScrollBtn.style.zIndex = '10';
    rightScrollBtn.style.opacity = '0';
    rightScrollBtn.style.transition = 'all 0.3s ease';
    rightScrollBtn.style.fontSize = '1.2rem';
    rightScrollBtn.style.backdropFilter = 'blur(5px)';
    rightScrollBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    blogContainer.appendChild(rightScrollBtn);

    // 创建内容区域
    const contentContainer = document.createElement('div');
    contentContainer.id = 'blog-content-container';
    contentContainer.style.display = 'flex';
    contentContainer.style.width = '300%';
    contentContainer.style.height = '100%';
    contentContainer.style.transition = 'transform 0.5s ease';
    contentWrapper.appendChild(contentContainer);

    // 创建三个部分
    const sections = ['post', 'favorite', 'research'];
    sections.forEach((section, index) => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'blog-section';
        sectionElement.id = `blog-${section}`;
        sectionElement.style.width = '33.333%';
        sectionElement.style.height = '100%';
        sectionElement.style.padding = '20px';
        sectionElement.style.boxSizing = 'border-box';
        sectionElement.style.overflowY = 'auto';
        sectionElement.style.background = 'linear-gradient(to bottom, rgba(10, 25, 15, 0.85), rgba(20, 50, 30, 0.85))';
        sectionElement.style.backdropFilter = 'blur(10px)';
        sectionElement.style.borderRadius = '15px';
        sectionElement.style.margin = '0 10px';
        sectionElement.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.5)';
        
        // 右侧固定区域
        const sidebar = document.createElement('div');
        sidebar.className = 'blog-sidebar';
        sidebar.style.position = 'absolute';
        sidebar.style.right = '5%';
        sidebar.style.top = '20%';
        sidebar.style.width = '25%';
        sidebar.style.padding = '20px';
        sidebar.style.background = 'rgba(15, 35, 20, 0.8)';
        sidebar.style.borderRadius = '15px';
        sidebar.style.backdropFilter = 'blur(5px)';
        sidebar.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.4)';
        sectionElement.appendChild(sidebar);

        // 头像框
        const avatarFrame = document.createElement('div');
        avatarFrame.className = 'blog-avatar-frame';
        avatarFrame.style.width = '100px';
        avatarFrame.style.height = '100px';
        avatarFrame.style.borderRadius = '50%';
        avatarFrame.style.overflow = 'hidden';
        avatarFrame.style.margin = '0 auto 15px';
        avatarFrame.style.border = '3px solid rgba(0, 255, 100, 0.5)';
        avatarFrame.style.boxShadow = '0 0 15px rgba(0, 255, 100, 0.3)';
        
        const avatarImg = document.createElement('img');
        avatarImg.src = './avatar.jpg';
        avatarImg.style.width = '100%';
        avatarImg.style.height = '100%';
        avatarImg.style.objectFit = 'cover';
        avatarFrame.appendChild(avatarImg);
        sidebar.appendChild(avatarFrame);

        // 名字
        const name = document.createElement('div');
        name.className = 'blog-name';
        name.textContent = 'Stardust';
        name.style.fontFamily = '"Great Vibes", cursive';
        name.style.fontSize = '1.8rem';
        name.style.color = '#fff';
        name.style.textAlign = 'center';
        name.style.marginBottom = '10px';
        name.style.textShadow = '0 0 5px rgba(0, 255, 100, 0.5)';
        sidebar.appendChild(name);

        // 座右铭
        const motto = document.createElement('div');
        motto.className = 'blog-motto';
        motto.textContent = 'Turn this imperfect story into the way we hope it to be.';
        motto.style.fontFamily = '"Allura", cursive';
        motto.style.fontSize = '1.2rem';
        motto.style.color = '#aaa';
        motto.style.textAlign = 'center';
        motto.style.fontStyle = 'italic';
        sidebar.appendChild(motto);

        // 根据部分类型添加内容
        if (section === 'post') {
            // Posts 部分
            const postsContainer = document.createElement('div');
            postsContainer.className = 'blog-posts';
            postsContainer.style.width = '60%';
            postsContainer.style.marginLeft = '5%';
            sectionElement.insertBefore(postsContainer, sidebar);

            // 添加示例文章
            const samplePosts = [
                {
                    title: 'The Beauty of Mathematics',
                    date: '2023-10-15',
                    content: 'Mathematics, rightly viewed, possesses not only truth but supreme beauty—a beauty cold and austere, like that of sculpture, without appeal to any part of our weaker nature, without the gorgeous trappings of painting or music, yet sublimely pure, and capable of a stern perfection such as only the greatest art can show...',
                    link: '#'
                },
                {
                    title: 'Exploring Quantum Mechanics',
                    date: '2023-09-28',
                    content: 'Quantum mechanics is the body of scientific laws that describe the wacky behavior of photons, electrons and the other particles that make up the universe. At the scale of atoms and electrons, many of the equations of classical mechanics, which describe how things move at everyday sizes and speeds, cease to be useful...',
                    link: '#'
                },
                {
                    title: 'The Art of Problem Solving',
                    date: '2023-08-10',
                    content: 'Problem solving is the essence of what mathematicians do. When faced with a problem, a mathematician seeks not only to solve it but to understand why the solution works and how it connects to other mathematical ideas. This process often involves creativity, persistence, and the ability to see patterns and make connections...',
                    link: '#'
                }
            ];

            samplePosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-post';
                postElement.style.background = 'rgba(20, 40, 25, 0.7)';
                postElement.style.borderRadius = '10px';
                postElement.style.padding = '20px';
                postElement.style.marginBottom = '20px';
                postElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                postElement.style.transition = 'all 0.3s ease';

                // 标题和日期行
                const titleRow = document.createElement('div');
                titleRow.style.display = 'flex';
                titleRow.style.justifyContent = 'space-between';
                titleRow.style.alignItems = 'center';
                titleRow.style.marginBottom = '15px';

                const title = document.createElement('h3');
                title.textContent = post.title;
                title.style.fontFamily = '"Cinzel", serif';
                title.style.fontSize = '1.3rem';
                title.style.color = '#0f0';
                title.style.margin = '0';

                const date = document.createElement('span');
                date.textContent = post.date;
                date.style.fontFamily = 'Arial, sans-serif';
                date.style.fontSize = '0.9rem';
                date.style.color = '#aaa';

                titleRow.appendChild(title);
                titleRow.appendChild(date);
                postElement.appendChild(titleRow);

                // 内容
                const content = document.createElement('p');
                content.textContent = post.content;
                content.style.fontFamily = 'Georgia, serif';
                content.style.fontSize = '1rem';
                content.style.color = '#ddd';
                content.style.lineHeight = '1.6';
                content.style.marginBottom = '15px';
                postElement.appendChild(content);

                // 阅读更多按钮
                const readMore = document.createElement('a');
                readMore.href = post.link;
                readMore.textContent = 'Read more →';
                readMore.style.fontFamily = 'Arial, sans-serif';
                readMore.style.fontSize = '0.9rem';
                readMore.style.color = '#0f0';
                readMore.style.textDecoration = 'none';
                readMore.style.float = 'right';
                readMore.style.transition = 'all 0.3s ease';

                readMore.addEventListener('mouseenter', () => {
                    readMore.style.color = '#fff';
                    readMore.style.textShadow = '0 0 5px rgba(0, 255, 100, 0.5)';
                });

                readMore.addEventListener('mouseleave', () => {
                    readMore.style.color = '#0f0';
                    readMore.style.textShadow = 'none';
                });

                postElement.appendChild(readMore);

                // 悬停效果
                postElement.addEventListener('mouseenter', () => {
                    postElement.style.transform = 'translateY(-5px)';
                    postElement.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                });

                postElement.addEventListener('mouseleave', () => {
                    postElement.style.transform = 'none';
                    postElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                });

                postsContainer.appendChild(postElement);
            });
        } else if (section === 'favorite') {
            // Favorite 部分
            const favoritesContainer = document.createElement('div');
            favoritesContainer.className = 'blog-favorites';
            favoritesContainer.style.width = '60%';
            favoritesContainer.style.marginLeft = '5%';
            favoritesContainer.style.display = 'grid';
            favoritesContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
            favoritesContainer.style.gap = '20px';
            sectionElement.insertBefore(favoritesContainer, sidebar);

            // 添加示例收藏
            const sampleFavorites = [
                {
                    type: 'image',
                    title: 'Northern Lights',
                    content: 'The aurora borealis, also known as the northern lights, is one of the most spectacular displays in the night sky.',
                    image: 'https://example.com/northern-lights.jpg',
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
                    title: 'Mountain Sunset',
                    content: 'The beauty of nature captured at the perfect moment when the sun dips below the mountain peaks.',
                    image: 'https://example.com/mountain-sunset.jpg',
                    link: '#'
                }
            ];

            sampleFavorites.forEach((fav, idx) => {
                const favElement = document.createElement('div');
                favElement.className = 'blog-favorite';
                favElement.style.background = 'rgba(20, 40, 25, 0.7)';
                favElement.style.borderRadius = '10px';
                favElement.style.overflow = 'hidden';
                favElement.style.position = 'relative';
                favElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                favElement.style.transition = 'all 0.3s ease';

                if (fav.type === 'image') {
                    const imageContainer = document.createElement('div');
                    imageContainer.style.height = '200px';
                    imageContainer.style.overflow = 'hidden';
                    imageContainer.style.position = 'relative';

                    const image = document.createElement('div');
                    image.style.height = '100%';
                    image.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${fav.image})`;
                    image.style.backgroundSize = 'cover';
                    image.style.backgroundPosition = 'center';
                    imageContainer.appendChild(image);

                    const overlay = document.createElement('div');
                    overlay.style.position = 'absolute';
                    overlay.style.bottom = '0';
                    overlay.style.left = '0';
                    overlay.style.right = '0';
                    overlay.style.height = '50%';
                    overlay.style.background = 'linear-gradient(to top, rgba(10, 25, 15, 0.9), transparent)';
                    overlay.style.pointerEvents = 'none';
                    imageContainer.appendChild(overlay);

                    const title = document.createElement('h3');
                    title.textContent = fav.title;
                    title.style.position = 'absolute';
                    title.style.bottom = '20px';
                    title.style.left = '20px';
                    title.style.fontFamily = '"Cinzel", serif';
                    title.style.fontSize = '1.2rem';
                    title.style.color = '#fff';
                    title.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
                    title.style.margin = '0';
                    imageContainer.appendChild(title);

                    favElement.appendChild(imageContainer);

                    const content = document.createElement('p');
                    content.textContent = fav.content;
                    content.style.fontFamily = 'Georgia, serif';
                    content.style.fontSize = '0.9rem';
                    content.style.color = '#ddd';
                    content.style.padding = '15px';
                    content.style.margin = '0';
                    favElement.appendChild(content);

                    // 查看和下载按钮
                    const buttons = document.createElement('div');
                    buttons.style.display = 'flex';
                    buttons.style.justifyContent = 'flex-end';
                    buttons.style.padding = '0 15px 15px';

                    const viewBtn = document.createElement('a');
                    viewBtn.href = fav.link;
                    viewBtn.textContent = 'View';
                    viewBtn.style.fontFamily = 'Arial, sans-serif';
                    viewBtn.style.fontSize = '0.8rem';
                    viewBtn.style.color = '#0f0';
                    viewBtn.style.textDecoration = 'none';
                    viewBtn.style.padding = '5px 10px';
                    viewBtn.style.borderRadius = '3px';
                    viewBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                    viewBtn.style.marginLeft = '10px';
                    viewBtn.style.transition = 'all 0.3s ease';

                    const downloadBtn = document.createElement('a');
                    downloadBtn.href = fav.image;
                    downloadBtn.download = '';
                    downloadBtn.textContent = 'Download';
                    downloadBtn.style.fontFamily = 'Arial, sans-serif';
                    downloadBtn.style.fontSize = '0.8rem';
                    downloadBtn.style.color = '#0f0';
                    downloadBtn.style.textDecoration = 'none';
                    downloadBtn.style.padding = '5px 10px';
                    downloadBtn.style.borderRadius = '3px';
                    downloadBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                    downloadBtn.style.transition = 'all 0.3s ease';

                    viewBtn.addEventListener('mouseenter', () => {
                        viewBtn.style.background = 'rgba(0, 255, 100, 0.4)';
                        viewBtn.style.color = '#fff';
                    });

                    viewBtn.addEventListener('mouseleave', () => {
                        viewBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                        viewBtn.style.color = '#0f0';
                    });

                    downloadBtn.addEventListener('mouseenter', () => {
                        downloadBtn.style.background = 'rgba(0, 255, 100, 0.4)';
                        downloadBtn.style.color = '#fff';
                    });

                    downloadBtn.addEventListener('mouseleave', () => {
                        downloadBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                        downloadBtn.style.color = '#0f0';
                    });

                    buttons.appendChild(downloadBtn);
                    buttons.appendChild(viewBtn);
                    favElement.appendChild(buttons);
                } else {
                    const quoteContainer = document.createElement('div');
                    quoteContainer.style.padding = '20px';
                    quoteContainer.style.position = 'relative';

                    const quoteText = document.createElement('blockquote');
                    quoteText.textContent = fav.content;
                    quoteText.style.fontFamily = 'Georgia, serif';
                    quoteText.style.fontSize = '1.1rem';
                    quoteText.style.color = '#ddd';
                    quoteText.style.fontStyle = 'italic';
                    quoteText.style.lineHeight = '1.6';
                    quoteText.style.margin = '0 0 15px 0';
                    quoteText.style.position = 'relative';
                    quoteText.style.paddingLeft = '30px';

                    const quoteMark = document.createElement('span');
                    quoteMark.textContent = '"';
                    quoteMark.style.position = 'absolute';
                    quoteMark.style.left = '0';
                    quoteMark.style.top = '0';
                    quoteMark.style.fontSize = '3rem';
                    quoteMark.style.fontFamily = 'Georgia, serif';
                    quoteMark.style.color = 'rgba(0, 255, 100, 0.3)';
                    quoteMark.style.lineHeight = '1';
                    quoteText.appendChild(quoteMark);

                    quoteContainer.appendChild(quoteText);

                    const quoteAuthor = document.createElement('div');
                    quoteAuthor.textContent = `— ${fav.author}`;
                    quoteAuthor.style.fontFamily = 'Arial, sans-serif';
                    quoteAuthor.style.fontSize = '0.9rem';
                    quoteAuthor.style.color = '#aaa';
                    quoteAuthor.style.textAlign = 'right';
                    quoteContainer.appendChild(quoteAuthor);

                    const viewBtn = document.createElement('a');
                    viewBtn.href = fav.link;
                    viewBtn.textContent = 'View';
                    viewBtn.style.fontFamily = 'Arial, sans-serif';
                    viewBtn.style.fontSize = '0.8rem';
                    viewBtn.style.color = '#0f0';
                    viewBtn.style.textDecoration = 'none';
                    viewBtn.style.padding = '5px 10px';
                    viewBtn.style.borderRadius = '3px';
                    viewBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                    viewBtn.style.position = 'absolute';
                    viewBtn.style.bottom = '15px';
                    viewBtn.style.right = '15px';
                    viewBtn.style.transition = 'all 0.3s ease';

                    viewBtn.addEventListener('mouseenter', () => {
                        viewBtn.style.background = 'rgba(0, 255, 100, 0.4)';
                        viewBtn.style.color = '#fff';
                    });

                    viewBtn.addEventListener('mouseleave', () => {
                        viewBtn.style.background = 'rgba(0, 255, 100, 0.2)';
                        viewBtn.style.color = '#0f0';
                    });

                    quoteContainer.appendChild(viewBtn);
                    favElement.appendChild(quoteContainer);
                }

                // 悬停效果
                favElement.addEventListener('mouseenter', () => {
                    favElement.style.transform = 'translateY(-5px)';
                    favElement.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                });

                favElement.addEventListener('mouseleave', () => {
                    favElement.style.transform = 'none';
                    favElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                });

                favoritesContainer.appendChild(favElement);
            });
        } else {
            // Research 部分
            const researchContainer = document.createElement('div');
            researchContainer.className = 'blog-research';
            researchContainer.style.width = '60%';
            researchContainer.style.marginLeft = '5%';
            researchContainer.style.display = 'flex';
            researchContainer.style.flexDirection = 'column';
            researchContainer.style.alignItems = 'center';
            researchContainer.style.justifyContent = 'center';
            researchContainer.style.height = '100%';
            sectionElement.insertBefore(researchContainer, sidebar);

            const placeholder = document.createElement('div');
            placeholder.className = 'research-placeholder';
            placeholder.textContent = 'Research content coming soon...';
            placeholder.style.fontFamily = '"Cinzel", serif';
            placeholder.style.fontSize = '1.5rem';
            placeholder.style.color = '#aaa';
            placeholder.style.textAlign = 'center';
            researchContainer.appendChild(placeholder);
        }

        contentContainer.appendChild(sectionElement);
    });

    // 滚动按钮显示/隐藏逻辑
    blogPage.addEventListener('mousemove', (e) => {
        const pageWidth = blogPage.clientWidth;
        const mouseX = e.clientX;
        
        if (mouseX < pageWidth / 8) {
            leftScrollBtn.style.opacity = '1';
        } else {
            leftScrollBtn.style.opacity = '0';
        }
        
        if (mouseX > pageWidth * 7 / 8) {
            rightScrollBtn.style.opacity = '1';
        } else {
            rightScrollBtn.style.opacity = '0';
        }
    });

    // 滚动功能
    let currentSection = 0;
    
    leftScrollBtn.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--;
            contentContainer.style.transform = `translateX(-${currentSection * 33.333}%)`;
            updateActiveTab(currentSection);
        }
    });
    
    rightScrollBtn.addEventListener('click', () => {
        if (currentSection < 2) {
            currentSection++;
            contentContainer.style.transform = `translateX(-${currentSection * 33.333}%)`;
            updateActiveTab(currentSection);
        }
    });

    function updateActiveTab(index) {
        const tabs = document.querySelectorAll('.blog-tab');
        tabs.forEach((tab, i) => {
            tab.style.color = i === index ? '#fff' : '#aaa';
            tab.style.background = i === index ? 'rgba(0, 255, 100, 0.2)' : 'transparent';
            tab.style.borderBottom = i === index ? '2px solid #0f0' : 'none';
        });
    }

    function showBlogSection(section) {
        const sections = ['post', 'favorite', 'research'];
        const index = sections.indexOf(section.toLowerCase());
        if (index >= 0) {
            currentSection = index;
            contentContainer.style.transform = `translateX(-${currentSection * 33.333}%)`;
        }
    }

    // 隐藏时钟控制按钮
    const clockToggle = document.querySelector('.clock-toggle');
    if (clockToggle) clockToggle.style.display = 'none';
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
