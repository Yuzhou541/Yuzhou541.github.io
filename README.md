Stardust Math - Personal Academic Website
Overview
The Stardust Math Academic Website is a sophisticated and comprehensive digital portfolio tailored for academic professionals, researchers, and scholars. This responsive web application serves as a centralized hub for showcasing academic achievements, managing professional resources, and organizing schedules. Built with modern web technologies—HTML5, CSS3, and JavaScript—it integrates four core modules: Professional Resume Presentation, Social Media Aggregation, Academic Toolkit Collection, and Interactive Schedule Management. The website features a sleek, user-friendly interface with advanced UI elements such as theme switching (dark and light modes), animated transitions, custom cursor effects, and persistent local storage for user data.
This project is designed to meet the needs of academics who require a professional online presence that is both functional and aesthetically pleasing. Whether you are a researcher looking to display your publications, a professor managing your teaching schedule, or a student organizing academic resources, this website provides a versatile and customizable solution.

Website Structure
The website is organized into four main sections, accessible from the cover page:
graph TD
    A[Cover Page] -->|Enter| B[Resume]
    A -->|Enter| C[Social]
    A -->|Enter| D[Toolkit]
    A -->|Enter| E[Schedule]
    B --> F[Education & Publications]
    C --> G[Social Media Cards]
    D --> H[Academic Tools]
    E --> I[Calendar & Timetables]


Core Features
1. Professional Resume
The resume section is designed to present your academic and professional credentials in a structured and visually appealing manner. Key features include:

Education History: A detailed, structured display of your academic background, including degrees, institutions, and graduation dates.
Publications Section: An organized list of your research outputs, such as journal articles, conference papers, and books.
Skills Matrix: A comprehensive overview of your technical proficiencies, languages, and other relevant skills.
Dynamic PDF Integration: Downloadable versions of your resume, CV, or other academic materials.
Dark/Light Theme: A toggle for switching between dark and light modes to enhance readability and user comfort.

This section ensures that your professional profile is presented clearly and professionally, making it easy for visitors to understand your academic journey and achievements.
2. Social Media Hub
The social media hub aggregates your online presence across various platforms, providing a centralized location for visitors to connect with you. Features include:

Platform Integration: Seamless integration with platforms like YouTube, TikTok, GitHub, LinkedIn, and more.
Card-Based Design: A consistent and visually appealing card layout for each social media platform.
Direct Links: One-click access to your profiles on each platform.
Responsive Grid: A flexible grid layout that adapts to different screen sizes, ensuring usability on both desktop and mobile devices.
Hover Animations: Interactive animations that provide visual feedback when users engage with the cards.

This hub makes it easy for colleagues, students, and collaborators to find and follow your work across multiple platforms.
3. Academic Toolkit
The academic toolkit is a curated collection of tools and resources essential for academic work, organized for quick access and ease of use. Key features include:

Categorized Tools: Tools are grouped into categories such as Development, Communication, Media, and more.
Dynamic Filtering: Users can filter tools by category for quick navigation.
Search Functionality: A search bar allows for instant discovery of specific tools.
Custom Icons: Each tool is represented by a platform-specific icon, with variants for both dark and light themes.
Dark Mode Support: All icons and UI elements are optimized for dark mode.

This section serves as a personalized dashboard for the tools you use most frequently, enhancing productivity and organization.
4. Schedule System
The schedule system is a powerful tool for managing academic timetables, classes, and events. It is particularly tailored for users affiliated with the University of Science and Technology of China (USTC), but can be adapted for other institutions. Features include:

Calendar View: Integration with FullCalendar.js for a dynamic and interactive calendar interface.
USTC Timetable: A pre-configured timetable system based on USTC's academic periods.
Event Management: Functionality to create, edit, and delete classes or events.
Week Navigation: Easy switching between weeks with dynamic updates to the displayed schedule.
Local Storage: All schedule data is saved locally, ensuring persistence across sessions.
Responsive Design: The layout is optimized for both desktop and mobile devices.

This system helps users stay organized and manage their academic commitments efficiently.

Customization Guide
The Stardust Math Academic Website is highly customizable, allowing you to tailor the content and appearance to your specific needs. Below are detailed instructions for modifying each section.
Modifying Content
Resume Section
To update your education history, publications, or skills, locate the relevant HTML sections and adjust the content accordingly. For example:
<!-- Update education details -->
<div class="subheading">
  <span class="subheading-title">University Name</span>
  <span>Expected June 2027</span>
</div>
<div class="subsubheading">Degree Program</div>

<!-- Add a new publication -->
<div class="section">
  <h2>Publications</h2>
  <ul>
    <li>New Paper Title (Journal, 2025)</li>
  </ul>
</div>

<!-- Update skills -->
<ul>
  <li><strong>New Skill:</strong> Description</li>
</ul>

Social Media Links
To add a new social media platform, insert a new card into the social media grid:
<!-- Add a new social platform -->
<div class="social-card">
  <div class="social-icon"><i class="fab fa-new-platform"></i></div>
  <div class="social-title">Platform Name</div>
  <div class="social-description">Description</div>
  <a href="https://profile-link" class="social-link" target="_blank">Visit</a>
</div>

Academic Toolkit
To add a new tool or category, modify the toolkit section:
<!-- Add a new tool -->
<div class="toolkit-card" data-title="tool-name" data-categories="category">
  <div class="toolkit-icon" style="background:linear-gradient(...)">
    <i class="fas fa-icon"></i>
  </div>
  <div class="toolkit-title">Tool Name</div>
  <a href="https://tool-link" class="toolkit-link" target="_blank">Visit</a>
</div>

<!-- Add a new category -->
<div class="category-section" data-category="new-category">
  <h3 class="category-title">New Category</h3>
  <div class="toolkit-grid">
    <!-- Tool cards here -->
  </div>
</div>

Theme Customization
The website's theme can be customized by adjusting the CSS variables for both dark and light modes:
body.dark-mode {
  --primary-dark: #1a1a2e;
  --secondary-dark: #16213e;
  --accent-dark: #6a3093;
}

body.light-mode {
  --primary-light: #f8f9fa;
  --secondary-light: #e9ecef;
  --accent-light: #3498db;
}

USTC Schedule Configuration
To modify the schedule's period times or add new classes, adjust the JavaScript configuration:
// Modify period times
const periodTimes = {
  1: { start: '8:00', end: '8:45' },
  // ... update other periods
};

// Add a new class template
const newClass = {
  id: Date.now().toString(),
  periodStart: '3',
  periodEnd: '4',
  courseName: 'Advanced Mathematics',
  instructor: 'Dr. Smith',
  days: [1, 3, 5] // Monday, Wednesday, Friday
};


Technical Implementation Details
The Stardust Math Academic Website incorporates several advanced technical features to enhance user experience and performance.
Custom Cursor System
A custom cursor system provides a unique and interactive user experience. The system includes an outer circle and an inner dot that follow the mouse, with ripple effects on clicks.
sequenceDiagram
    participant User as User
    participant DOM as Document
    participant Cursor as Cursor System
    User->>DOM: Moves Mouse
    DOM->>Cursor: Update Position
    Cursor->>DOM: Render Outer Circle
    Cursor->>DOM: Render Inner Dot
    User->>DOM: Clicks
    Cursor->>DOM: Create Ripple Effect
    Cursor->>DOM: Apply Click Animation

Image Loading Optimization
To ensure fast load times, critical images are preloaded, and non-critical images are lazy-loaded:
<!-- Preload critical assets -->
<link rel="preload" href="./assets/images/avatar.jpg" as="image">
<link rel="preload" href="./assets/images/background.jpg" as="image">

<!-- Lazy loading for non-critical images -->
<img src="./assets/images/avatar.jpg" alt="Profile" loading="lazy">

Local Storage Management
User data, such as schedule events and classes, is stored locally to ensure persistence across sessions:
// Saving timetable events
localStorage.setItem('timetableEvents', JSON.stringify(events));

// Retrieving classes
const ustcClasses = JSON.parse(localStorage.getItem('ustcClasses')) || [];

Responsive Design Features
The website is fully responsive, with CSS media queries ensuring optimal layout on all devices:
@media (max-width: 768px) {
  .social-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .toolkit-card {
    height: 160px;
    padding: 15px;
  }
}


Deployment Instructions
Follow these steps to deploy the website locally:

Clone the repository:git clone https://github.com/your-repo.git


Install live server (if not already installed):npm install -g live-server


Run the project:live-server --port=8000


Access the website at:http://localhost:8000



If you encounter issues, ensure that all dependencies are correctly installed and that your browser supports the latest web standards.

Dependencies
The project relies on the following external libraries and tools:

Font Awesome 6 - For icons
FullCalendar 5 - For the interactive calendar
Google Fonts - For typography
Mermaid.js - For generating diagrams


License
This project is licensed under the MIT License. For more details, see the LICENSE file.

