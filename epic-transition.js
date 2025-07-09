/* 博客页面样式 */
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
