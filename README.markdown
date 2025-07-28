# Stardust Portfolio

**Live Demo**: [https://stardust-math.github.io/](https://stardust-math.github.io/)

## Overview

The **Stardust Portfolio** is a personal portfolio website designed to showcase my academic journey, professional experiences, and digital presence in a visually engaging and interactive manner. Built with HTML, CSS, and JavaScript, the website serves as a comprehensive platform to present my educational background, research projects, publications, skills, and social media profiles. The design emphasizes a clean, responsive layout with intuitive navigation, making it accessible across devices. An optional JavaScript component, `epic-transition.js`, introduces a dynamic, narrative-driven animation sequence to enhance user engagement, enriching the static portfolio with an immersive storytelling layer.

This project is a reflection of my academic and creative aspirations, encapsulated in the tagline: *“Turn this imperfect story into the way we hope it to be.”* It is intended for academic peers, potential collaborators, and anyone interested in exploring my work. What follows is a detailed breakdown of the project’s functionality, structure, customization methods, and design considerations to facilitate understanding and potential contributions.

## Project Structure

The repository contains two primary files and an assets directory for static resources:

- **index.html**: The core HTML file defining the website’s structure and content.
- **epic-transition.js** (optional): A JavaScript file that adds an interactive animation sequence triggered by clicking the avatar image.
- **assets/**: Directory containing static resources, organized into subdirectories:
  - **images/**: Stores images such as `avatar.jpg`, `background.jpg`, `old-paper-texture.jpg`, and `scroll-texture.png`.
  - **audio/**: Contains audio files like `prologue.m4a` and `fire-sound.mp3`.
  - **animation/**: Includes animation assets like `fire-animation.gif`.

### File Structure
| File/Folder          | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `index.html`         | Defines the portfolio’s layout, content, and static elements.                |
| `epic-transition.js` | Implements an optional animation sequence with a narrative scroll and blog.  |
| `assets/images/`     | Houses images used in the website (e.g., `avatar.jpg`, `background.jpg`).    |
| `assets/audio/`      | Includes audio files for the animation sequence (e.g., `prologue.m4a`).      |
| `assets/animation/`  | Stores animation assets (e.g., `fire-animation.gif`).                         |
| `assets/js/`  | Contains additional .js files (e.g., `epic-transition.js`).                         |
| `assets/fonts/`  | Holds font files(e.g., `CygnetRound.ttf`).                         |
| `assets/pdf/`  | Retains pdf files reserved for downloading in links(e.g., `Reference_Answer_of_''Probability_Theory_and_Mathematical_Statistics''_(by Baiqi Miu and Weiping Zhang)`).                         |

## Functional Overview

### HTML Structure (`index.html`)

The `index.html` file is a single-page application divided into four main sections, each accessible via a navigation bar. These sections are designed to provide a comprehensive view of my profile:

1. **About Section**:
   - **Purpose**: Introduces my identity, educational background, work experience, research projects, publications, and additional skills.
   - **Content**:
     - Personal details (name, contact information, location).
     - Academic history (University of Science and Technology of China, expected graduation June 2027).
     - Honors and awards (e.g., Zhang Zongzhi Sci-Tech Scholarship).
     - Work experience (e.g., Teaching Assistant for Probability Theory).
     - Research projects (ongoing, with placeholders for collaborators).
     - Publications (currently empty, to be updated).
     - Additional skills (e.g., programming proficiency in Python, LaTeX; languages; hobbies).
     - Downloadable resources (e.g., *Reference Answer of "Probability Theory and Mathematical Statistics"* and *Stardust Meditations*).

2. **Social Section**:
   - **Purpose**: Links to my social media profiles and content platforms.
   - **Content**: Includes links to YouTube, TikTok (Chinese), REDnote, Quora, X (Twitter), Bilibili, and GitHub, each with a brief description and profile/channel links.

3. **Toolkit Section**:
   - **Purpose**: Provides a curated list of tools and services I use for academic and creative work.
   - **Content**: Categorized links to tools in Development, Communication, Media & Video, Music, Knowledge, Productivity, Document and Management, and USTC Services. Each tool includes a “Visit” link for easy access.

4. **Schedule Section**:
   - **Purpose**: Displays my academic and personal schedule, including a calendar and timetable.
   - **Content**:
     - Weekly calendar view (Monday to Sunday).
     - Timetable with 13 periods across morning, afternoon, and evening.
     - Modals for adding new classes or events, with fields for period, course name, instructor, and days.

The HTML structure leverages Bootstrap for responsive design and Font Awesome for icons, ensuring a polished and professional appearance. The layout is organized using a combination of flexbox and grid systems, with a sticky navigation bar for seamless section transitions.

### JavaScript Functionality (`epic-transition.js`)

The `epic-transition.js` file is an optional enhancement that introduces an interactive animation sequence triggered by clicking the avatar image in the About section. This feature is designed to create a memorable user experience through a narrative-driven interface. Key functionalities include:

1. **Vortex Animation**:
   - Triggered by clicking the avatar image.
   - Creates a multi-layered swirling effect centered on the avatar, using CSS gradients and animations.
   - Transitions smoothly to the narrative scroll page after completion.

2. **Narrative Scroll Page**:
   - Displays a parchment-style interface with a textured background and decorative edges.
   - Features a narrative text block with a fantasy-inspired tone.
   - Includes an interactive “Ignite” button with a flickering flame animation, accompanied by audio (narration and ambient fire sounds).

3. **Blog Interface**:
   - Accessed after the flame animation.
   - Features a responsive, multi-panel layout with three sections: Post, Favorite, and Research.
   - Includes a collapsible profile sidebar with avatar, name, and motto.
   - Supports navigation via clickable links and left/right arrows, with smooth transitions.
   - Posts and favorites are populated with placeholder content (e.g., blog posts, inspirational quotes).

4. **Audio Integration**:
   - Plays a narrative audio (`prologue.m4a`) and looping fire sound (`fire-sound.mp3`) during the scroll page.
   - Ensures single-instance audio playback with error handling.

**Note**: The JavaScript functionality is optional. If you prefer to keep the portfolio static and lightweight, you can remove the `<script src="epic-transition.js"></script>` line from `index.html` and delete the `epic-transition.js` file. This will disable the animation sequence while preserving the core portfolio functionality.

## Quick Start

To get a quick start with the Stardust Portfolio:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Add Assets**:
   - Place required images (e.g., `avatar.jpg`, `background.jpg`) in `assets/images/`.
   - Place audio files (e.g., `prologue.m4a`, `fire-sound.mp3`) in `assets/audio/`.
   - Place animation assets (e.g., `fire-animation.gif`) in `assets/animation/`.

3. **Run Locally**:
   - Start a local server:
     ```bash
     python -m http.server
     ```
   - Open `http://localhost:8000` in your browser to view the portfolio.

4. **Deploy to GitHub Pages**:
   - Push changes to your GitHub repository.
   - Enable GitHub Pages in the repository settings (select `main` branch, `/ (root)` directory).
   - Access the live site at `https://your-username.github.io/your-repository`.

**Optional**: To disable animations, remove `<script src="epic-transition.js"></script>` from `index.html` and delete the `epic-transition.js` file.

## Customization and Modification

### Modifying `index.html`

To tailor the portfolio to your needs, you can modify the content within each section. Below are detailed instructions for adding, removing, or updating elements:

#### General Modifications
- **Navigation Bar**:
  - **Location**: `<nav class="navbar">` in the `<header>` section.
  - **Add a New Section**:
    1. Add a new `<a>` element in the `<ul class="navbar-nav">` with a unique `href` (e.g., `#new-section`).
    2. Create a corresponding `<section>` with the matching `id` (e.g., `new-section`).
    3. Update the CSS in `<style>` to style the new section consistently.
  - **Remove a Section**:
    1. Delete the `<a>` element from the `<ul class="navbar-nav">`.
    2. Remove the corresponding `<section>` element.
    3. Ensure no broken links remain in the navigation.

- **Styling**:
  - **Location**: `<style>` tag within `<head>`.
  - **Modify**: Adjust CSS properties (e.g., colors, fonts) to match your branding. For example, change the background color of `.navbar` to `background-color: #your-color;`.
  - **Add**: Include new CSS rules for custom elements or layouts.
  - **External CSS**: Move styles to a separate `.css` file and link it via `<link rel="stylesheet" href="styles.css">`.

#### Section-Specific Modifications
1. **Cover Images**:
   - **Update and Change Cover Images**:
     - Change the cover images from the ./assets/images to your own and change the number, names and suffixes in the last `<script>` before `</body>`.

2. **About Section**:
   - **Update Personal Information**:
     - Edit the `<div class="col-md-4">` containing name, address, email, and phone number.
     - Example: Change `Jinghao Chen` to your name by modifying the `<h2>` text.
   - **Add Education Entry**:
     - Duplicate the `<div>` under `<h3>Education</h3>` and update institution, dates, and degree details.
   - **Add Award**:
     - Append a new `<li>` under `<ul>` in the `<h3>Honors and Awards</h3>` section.
   - **Add Work Experience**:
     - Duplicate the `<div>` under `<h3>Work Experience</h3>` and update role, dates, and description.
   - **Add Research Project**:
     - Duplicate the `<div>` under `<h3>Research Projects</h3>` and fill in project details and collaborators.
   - **Add Publication**:
     - Populate the `<div>` under `<h3>Publications</h3>` with citation details in a consistent format.
   - **Update Skills**:
     - Modify the `<ul>` under `<h3>Additional Skills/Information</h3>` to reflect your skills, languages, or hobbies.
   - **Update Download Links**:
     - Replace `href` attributes in `<a>` tags with paths to your files.

3. **Social Section**:
   - **Add Social Media Profile**:
     - Duplicate a `<div class="col-md-4">` block under `<div class="row social-links">`.
     - Update the platform name, description, and links (e.g., `href="your-profile-url"`).
   - **Remove Profile**:
     - Delete the `<div class="col-md-4">` block for the platform you wish to remove.
   - **Update Links**:
     - Modify `href` attributes to point to your profiles or handles.

4. **Toolkit Section**:
   - **Add Tool Category**:
     - Duplicate a `<div class="toolkit-category">` block.
     - Update the `<h3>` title and add new `<div class="col-md-4">` blocks for tools.
   - **Add Tool**:
     - Duplicate a `<div class="col-md-4">` block within a category.
     - Update the tool name, image, and `href` in the `<a>` tag.
   - **Remove Tool/Category**:
     - Delete the specific `<div class="col-md-4">` or `<div class="toolkit-category">` block.

5. **Schedule Section**:
   - **Update Calendar**:
     - Modify the `<div class="week-display">` text to reflect the desired week.
   - **Add Class/Event**:
     - For static entries, add rows to the timetable `<table>` or classes `<table>` with appropriate details.
     - For dynamic additions, rely on the modal forms (`#add-class-modal`, `#add-event-modal`) and ensure JavaScript handles form submissions (not implemented in the provided code).
   - **Modify Modal Forms**:
     - Update options in `<select>` elements for `Period Start` and `Period End` to match your schedule structure.
     - Add or remove days in the `<div class="days-checkboxes">` block.
   - **Modify Personal Courses**:
     - Fill in, modify and integrate the course information according to the existing information in the code.

#### Adding New Resources
- **Assets**: Place images, PDFs, or other files in the `assets/` directory and reference them in `index.html` (e.g., `<img src="./assets/images/your-image.jpg">`).
- **External Libraries**: Add CDNs for additional libraries (e.g., jQuery) in the `<head>` section.

### Modifying `epic-transition.js`

The JavaScript file enhances the portfolio with an interactive animation sequence. Below are instructions for customizing or extending its functionality:

#### General Modifications
- **Disable JavaScript**:
  - Remove `<script src="epic-transition.js"></script>` from `index.html`.
  - Delete the `epic-transition.js` file from the repository.
- **Update Asset Paths**:
  - Modify paths in `epic-transition.js` (e.g., `./assets/images/avatar.jpg`) to match your asset directory structure.
- **Adjust Animation Timing**:
  - Change intervals (e.g., `setInterval` duration in `startSwirlAnimation`) or timeouts (e.g., `setTimeout` in `showEpicScrollPage`) to alter animation speed.

#### Function-Specific Modifications
1. **Vortex Animation (`startSwirlAnimation`)**:
   - **Change Colors**:
     - Modify the `background` properties of `swirl` elements to use different gradients or colors.
     - Example: Replace `conic-gradient(...)` with `radial-gradient(circle, #your-color1, #your-color2)`.
   - **Adjust Scale/Opacity**:
     - Alter `scale += 0.18` or `opacity -= 0.012` to change animation speed or intensity.
   - **Add Layers**:
     - Increase the loop counter (`i < 5`) and add new gradient cases in the `switch` statement.
   - **Remove Animation**:
     - Comment out or remove the `startSwirlAnimation` call in the avatar click event listener.

2. **Narrative Scroll Page (`showEpicScrollPage`)**:
   - **Update Text**:
     - Modify `epicText.innerHTML` to change the narrative content.
   - **Change Background**:
     - Update `epicPage.style.background` to use a different image or color.
   - **Customize Scroll Design**:
     - Adjust `scroll.style` properties (e.g., `backgroundImage`, `boxShadow`) for a different aesthetic.
   - **Modify Audio**:
     - Replace `narrationAudio` and `fireAudio` sources with your audio files in `playNarration` and `playFireSound`.

3. **Blog Interface (`transitionToBlogPage`)**:
   - **Add New Page**:
     - Update the `pages` array to include a new page name.
     - Add a corresponding `<div class="blog-page">` in `pagesContainer` with custom content.
     - Update `gradientColors` and `navLinks` to reflect the new page.
   - **Modify Content**:
     - Edit `createBlogPost` or `createFavoriteItem` to change post/quote content or structure.
     - Add new content types by creating new functions similar to `createBlogPost`.
   - **Change Profile Sidebar**:
     - Update `profileAvatar.src`, `profileName.textContent`, or `profileSlogan.textContent`.
     - Adjust `profileSidebar.style` for different dimensions or styling.
   - **Customize Navigation**:
     - Modify `navLinks` styling or add new separators.
     - Adjust `navigateToPage` to support different transition effects (e.g., fade instead of slide).

4. **Audio Management**:
   - **Change Volume**:
     - Adjust `narrationAudio.volume` or `fireAudio.volume` (0.0 to 1.0).
   - **Disable Audio**:
     - Comment out `playNarration` and `playFireSound` calls.
   - **Add New Audio**:
     - Create new audio instances and integrate them into the animation sequence.

## Detailed Design and Functionality Adjustments

### HTML Design Details
- **Responsive Layout**:
  - Bootstrap’s grid system ensures responsiveness. To enhance mobile support, test and adjust `col-md-*` classes to `col-sm-*` or `col-*` for smaller screens.
  - Example: Change `<div class="col-md-4">` to `<div class="col-12 col-md-4">` for full-width mobile display.
- **Typography**:
  - Uses Google Fonts (e.g., Cinzel, Georgia) for a professional look. Add new fonts by including `<link>` tags in `<head>`.
- **Icons**:
  - Font Awesome icons are used for visual cues. Replace or add icons by updating `class="fas fa-icon-name"`.
- **Accessibility**:
  - Add `aria-label` attributes to interactive elements (e.g., `<a aria-label="Visit GitHub">`).
  - Ensure sufficient color contrast for text and backgrounds.

### JavaScript Design Details
- **Animation Performance**:
  - The vortex animation uses `setInterval` at 100Hz for smoothness. Reduce frequency (e.g., to 50Hz by changing `10` to `20`) for lower-performance devices.
  - Use `requestAnimationFrame` instead of `setInterval` for better performance:
    ```javascript
    function animateSwirl(timestamp) {
        scale += 0.18;
        opacity -= 0.012;
        // ... rest of animation logic ...
        if (scale <= 20) requestAnimationFrame(animateSwirl);
        else showEpicScrollPage();
    }
    requestAnimationFrame(animateSwirl);
    ```
- **Error Handling**:
  - Audio playback includes error catching. Extend this to other async operations (e.g., image loading).
- **Interactivity**:
  - The profile sidebar toggle uses a cubic-bezier transition for a dynamic effect. Adjust the `cubic-bezier` values for different animation curves.
  - Add keyboard navigation for accessibility (e.g., `keydown` events for page navigation).

### Visual Diagram
Below is a simplified diagram illustrating the website’s structure and optional JavaScript flow:

```mermaid
graph TD
    A[index.html] --> B[About Section]
    A --> C[Social Section]
    A --> D[Toolkit Section]
    A --> E[Schedule Section]
    E --> O[Calendar]
    E --> P[Timetable]
    E --> Q[USTC Timetable]
    E --> R[My Timetable]
    A -->|Optional| F[epic-transition.js]
    F --> G[Avatar Click]
    G --> H[Vortex Animation]
    H --> I[Narrative Scroll Page]
    I --> J[Flame Animation]
    J --> K[Blog Interface]
    K --> L[Post Page]
    K --> M[Favorite Page]
    K --> N[Research Page]
```

## Deployment Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Add Assets**:
   - Place images, audio files, and other resources in the `assets/` directory.
   - Update paths in `index.html` and `epic-transition.js` to match.

3. **Host Locally**:
   - Use a local server (e.g., `python -m http.server` or Live Server in VS Code) to test the website.
   - Ensure all assets load correctly.

4. **Deploy to GitHub Pages**:
   - Push the repository to GitHub.
   - Enable GitHub Pages in the repository settings, selecting the `main` branch and `/ (root)` directory.
   - Access the site at `https://your-username.github.io/your-repository`.

## Limitations and Future Improvements

This project, while functional, is a static website with limited dynamic interactivity in its base form. The HTML structure relies on Bootstrap, which may increase load times for users with slow connections. The JavaScript animation sequence, while visually engaging, may not be suitable for all audiences due to its resource-intensive nature and reliance on external assets (e.g., audio, images). Future improvements could include:
- Implementing a backend (e.g., Node.js, Firebase) for dynamic content updates.
- Adding accessibility features (e.g., screen reader support, keyboard navigation).
- Optimizing animations for low-end devices.
- Expanding the blog interface with real content and database integration.

## Conclusion

The Stardust Portfolio is a personal endeavor to present my academic and creative journey in a structured and visually appealing manner. I have strived to create a project that is both functional and inspirational, reflecting my commitment to turning an “imperfect story” into something meaningful. While the project has limitations, such as its static nature and dependency on external libraries, I hope it serves as a useful resource for others looking to build similar portfolios. I welcome feedback and contributions to enhance its functionality and accessibility. Thank you for exploring this project, and I hope it inspires you in your own endeavors.
