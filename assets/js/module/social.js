document.write(`
<div id="social">
    <button id="toggle-btn-social">
      <span><i class="fas fa-sun"></i></span>
    </button>
    <div id="clock-social">GMT+8 00:00</div>
    <div class="container">
      <div class="social-heading">Connect With Me</div>
      
      <div class="social-grid">
        <!-- YouTube card -->
        <div class="social-card">
          <div class="social-icon"><i class="fab fa-youtube"></i></div>
          <div class="social-title">YouTube</div>
          <div class="social-description">My video content and playlists</div>
          <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
            <a href="https://www.youtube.com/channel/UCemKYMAMJk8FggZ5NI36i1Q" class="social-link" target="_blank">Channel</a>
            <span class="social-divider">/</span>
            <a href="https://www.youtube.com/@JinghaoChen-Stardust" class="social-link" target="_blank">Handle</a>
          </div>
        </div>
        
        <!-- TikTok card -->
        <div class="social-card">
          <div class="social-icon"><i class="fab fa-tiktok"></i></div>
          <div class="social-title">TikTok (Chinese)</div>
          <div class="social-description">Short-form videos in Chinese</div>
          <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
            <a href="https://www.douyin.com/user/MS4wLjABAAAAqb9M45SaGeb8yI28lL3lDFHm48c4kl32Xq7BfRk3I24" class="social-link" target="_blank">Link 1</a>
            <span class="social-divider">/</span>
            <a href="https://v.douyin.com/PzIS6mSXJGY/" class="social-link" target="_blank">Link 2</a>
          </div>
        </div>
        
        <!-- REDnote (Xiaohongshu) card -->
        <div class="social-card">
          <div class="social-icon"><i class="fas fa-book"></i></div>
          <div class="social-title">REDnote</div>
          <div class="social-description">Chinese lifestyle and knowledge sharing</div>
          <a href="https://www.xiaohongshu.com/user/profile/64c696da000000000b005093" class="social-link" target="_blank">Profile</a>
        </div>
        
        <!-- Quora card -->
        <div class="social-card">
          <div class="social-icon"><i class="fab fa-quora"></i></div>
          <div class="social-title">Quora</div>
          <div class="social-description">Various questions and answers</div>
          <a href="https://www.quora.com/profile/Jinghao-Chen-11/" class="social-link" target="_blank">Profile</a>
        </div>
        
        <!-- Twitter/X card -->
        <div class="social-card">
          <div class="social-icon"><i class="fab fa-twitter"></i></div>
          <div class="social-title">X (Twitter)</div>
          <div class="social-description">Notes and sharing</div>
          <a href="https://x.com/stardust_math" class="social-link" target="_blank">Profile</a>
        </div>
        
        <!-- Bilibili card -->
        <div class="social-card">
          <svg class="bilibili-icon" viewBox="0 0 24 24" width="2.5rem" height="2.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.99 6.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6.01a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2.75l-1-3a.5.5 0 0 1 .33-.63l.94-.3a.5.5 0 0 1 .63.32l1.1 3.1h2.64l1.1-3.1a.5.5 0 0 1 .63-.32l.94.3a.5.5 0 0 1 .33.63l-1 3h2.75zm-2.74 2.5H8.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h6.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z" fill="#3498db" stroke="#3498db" stroke-width="0.2"/>
            <circle cx="10.5" cy="11.5" r="1" fill="#3498db"/>
            <circle cx="13.5" cy="11.5" r="1" fill="#3498db"/>
          </svg>
          <div class="social-title">Bilibili</div>
          <div class="social-description">Chinese video platform for my content</div>
          <a href="https://space.bilibili.com/470364718" class="social-link" target="_blank">Channel</a>
        </div>

        <!-- GitHub card -->
        <div class="social-card">
          <div class="social-icon"><i class="fab fa-github"></i></div>
          <div class="social-title">GitHub</div>
          <div class="social-description">My code repositories and projects</div>
          <a href="https://github.com/Stardust-math" class="social-link" target="_blank">Profile</a>
        </div>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="social-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
  </div>
`);