# Personal Information and Schedule Management Webpage

This repository contains a static HTML webpage designed to serve as a comprehensive personal portfolio and schedule management tool. Built using HTML, it integrates personal details, social media links, an academic toolkit, and an interactive schedule system. The project is styled with CSS (assumed to be linked externally or embedded) and enhanced with JavaScript (assumed for interactivity), offering a user-friendly interface for both personal reference and public sharing.

## Table of Contents

- [Features](#features)
  - [About Section](#about-section)
  - [Social Section](#social-section)
  - [Toolkit Section](#toolkit-section)
  - [Schedule Section](#schedule-section)
- [Installation](#installation)
- [Usage](#usage)
- [Modifying the Webpage](#modifying-the-webpage)
  - [Adding, Deleting, or Editing Major Features](#adding-deleting-or-editing-major-features)
  - [Detailed Adjustments to Sub-Features](#detailed-adjustments-to-sub-features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

This webpage is divided into four primary sections, each serving a distinct purpose. Below is a detailed breakdown of their functionality and content.

### About Section

The "About" section provides a detailed overview of the individual’s background, structured as follows:

- **Personal Information**: Displays essential contact details:
  - Name: Jinghao Chen
  - Location: Hefei, Anhui, 230026
  - Emails: `chenjinghao@mail.ustc.edu.cn`, `stardust.math26@gmail.com`
  - Telephone: +86 18806590966
- **Education**: Outlines academic credentials:
  - Institution: University of Science and Technology of China (USTC)
  - Degree: Bachelor of Science in Mathematics (Information and Computing Science), expected June 2027
  - Minor: Computer Science and Technology
- **Honors and Awards**: Lists notable achievements:
  - "Zhang Zongzhi Sci-Tech Scholarship"
  - "Outstanding Freshman Scholarship (Grade 2)"
  - Honorable Mention, Mathematical Contest in Modeling (MCM), Problem B, 2025
- **Work Experience**: Details professional roles:
  - Teaching Assistant for "Probability Theory and Mathematical Statistics" under Shuguang Zhang (September 2025 – January 2026)
  - Responsibilities include compiling reference answers for the course textbook by Baiqi Miu and Weiping Zhang, with a downloadable link provided.
- **Research Projects**: Highlights ongoing and planned research:
  - Three projects listed (September 2024 – Present, July 2025 – Present), with placeholders for collaborators.
- **Publications**: Reserved space for academic papers (currently empty).
- **Additional Skills/Information**: Showcases diverse competencies:
  - Computer Skills: Proficient in Mathematica and LaTeX; experienced in Python (4 years) and C (2 years)
  - Languages: Native Chinese, fluent English (TOEFL scores: Reading 22, Listening 21, Speaking 24, Writing 24)
  - Hobbies: Bamboo flute, swimming, singing
  - Reflections: Links to "Stardust Meditations" (downloadable essay).

This section serves as a digital resume, ideal for academic or professional networking.

### Social Section

The "Social" section connects visitors to various online platforms, enhancing visibility and interaction:

- **Platforms and Links**:
  - YouTube: Channel and handle for video content
  - TikTok (Chinese): Dual links for short-form videos
  - REDnote: Profile for lifestyle and knowledge sharing
  - Quora: Profile for Q&A engagement
  - X (Twitter): Profile for notes and updates
  - Bilibili: Channel for Chinese video content
  - GitHub: Profile for code repositories

Each entry includes a brief description and a direct hyperlink placeholder (e.g., "Channel", "Profile"), facilitating seamless navigation to external profiles.

### Toolkit Section

The "Toolkit" section curates a collection of academic and productivity tools, organized into eight categories:

- **Categories and Tools**:
  1. **Development**: GitHub, Maple, DeepSeek, ChatGPT, Grok, DeepL, Overleaf, Jupyter, Wolfram Alpha, GitLab, CodeSandbox, LeetCode, Tableau Public, Colab
  2. **Communication**: Gmail, QQ Mail, NetEase Mail, Quora, X (Twitter)
  3. **Media & Video**: YouTube, TikTok, REDnote, Bilibili, iQIYI, Tencent Video (dual links)
  4. **Music**: QQ Music, NetEase Cloud Music, KuGou Music, Spotify
  5. **Knowledge**: Wikipedia, Google Scholar, Z-Library, CNKI, ScienceDirect, Web of Science, MathOverflow, OEIS
  6. **Productivity**: Notion, Obsidian, Tencent Docs, Typora, Yuque, Canva, Remove.bg, TinyPNG
  7. **Document and Management**: EndNote, Zotero, Mendeley, Academia
  8. **USTC Services**: USTC Blackboard, USTC Mail, USTC Flyer, USTC Website, Academic Affairs System, Course Review Community, USTC Software, Hanhai Teaching Network

- **Design**: Tools are filterable by category via buttons, with each tool linked to its respective website (placeholder "Visit"). A fallback message ("No matching tools found") ensures usability.

This section is a valuable resource for students and researchers, consolidating essential tools in one accessible hub.

### Schedule Section

The "Schedule" section offers an interactive system for managing time, featuring:

- **Components**:
  - **Calendar**: Displays a weekly view (e.g., Mon, Jan 1 – Sun, Jan 7) with an "Add Event" button to input new events via a modal:
    - Fields: Event Title, Description, Start, End, Recurring Event (checkbox)
    - Actions: Delete, Cancel, Save
  - **Timetable**: A table spanning Monday to Sunday across 13 periods (Morning: 1-5, Afternoon: 6-10, Evening: 11-13), with an "Add Class/Event" button.
  - **USTC Timetable**: A detailed class tracker with columns for Period Range, Course Name, Instructor, Days, and Actions, plus an "Add Class" button opening a modal:
    - Fields: Period Start/End (dropdowns), Course Name, Instructor, Days (checkboxes), Delete/Cancel/Save options

- **Functionality**: Users can visualize their weekly commitments and dynamically add or modify events and classes, with time slots aligned to a typical academic schedule (e.g., Period 1: 7:50-8:35).

This section is particularly useful for students managing coursework and extracurricular activities.

## Installation

To set up this webpage locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yourrepository
   ```
3. Open `index.html` in a web browser (e.g., Chrome, Firefox) by double-clicking the file or using:
   ```bash
   open index.html  # macOS
   start index.html # Windows
   ```

No additional dependencies are required, assuming CSS and JavaScript are embedded or properly linked.

## Usage

- **Navigation**: Use the top navigation bar (`About`, `Social`, `Toolkit`, `Schedule`) to jump between sections.
- **Interacting with Schedule**:
  - Click "Add Event" to create a new calendar entry.
  - Click "Add Class" to schedule a recurring course, selecting days and periods.
- **Exploring Tools**: Filter the Toolkit by category and click "Visit" to access each resource.
- **Downloading Resources**: Use links in the About section (e.g., "Reference Answer", "Stardust Meditations") to retrieve files (placeholders currently).

## Modifying the Webpage

### Adding, Deleting, or Editing Major Features

To customize the webpage’s core structure:

- **Adding a New Section**:
  1. In `index.html`, locate the `<nav>` element:
     ```html
     <nav> <ul> <li><a href="#about">About</a></li> ... </ul> </nav>
     ```
  2. Add a new `<li><a href="#new-section">New Section</a></li>` to the list.
  3. Below the existing `<section>` tags, insert:
     ```html
     <section id="new-section">
       <div class="section-content">
         <h2>GMT+8 00:00</h2>
         <h1>New Section</h1>
         <!-- Add content here -->
       </div>
     </section>
     ```
  4. Style the new section in your CSS file (e.g., `styles.css`) to match existing sections.

- **Deleting a Section**:
  1. Remove the corresponding `<li>` from the `<nav>` element.
  2. Delete the entire `<section>` tag with the matching `id` (e.g., `<section id="social">...</section>`).

- **Editing a Section**:
  1. Locate the `<section>` by its `id` (e.g., `id="toolkit"`).
  2. Modify the `<h1>` title or inner content as needed. For example, to rename "Toolkit" to "Resources":
     ```html
     <h1>Resources</h1>
     ```

### Detailed Adjustments to Sub-Features

#### About Section Adjustments

- **Personal Information**:
  - Edit: Update text within `<p>` tags under `<div class="personal-info">`.
    ```html
    <p>Jinghao Chen</p>
    <p>New Address</p>
    ```
  - Add: Insert a new `<p>` (e.g., `<p>Website: example.com</p>`).
  - Delete: Remove unwanted `<p>` tags.

- **Education/Work Experience**:
  - Add Entry: Copy an existing `<div>` block (e.g., under `<div class="education">`) and adjust details:
    ```html
    <div>
      <p>New Institution</p>
      <p>Expected June 2028</p>
    </div>
    ```
  - Edit: Modify text within `<p>` tags.
  - Delete: Remove the entire `<div>` block.

- **Download Links**:
  - Update: Replace the `href` in `<a>` tags (e.g., `<a href="new-link.pdf">New File</a>`).

#### Social Section Adjustments

- **Adding a Platform**:
  - Within `<div class="social-links">`, add:
    ```html
    <div class="social-item">
      <p>New Platform</p>
      <p>Description</p>
      <p><a href="https://newplatform.com">Link</a></p>
    </div>
    ```
- **Editing Links**:
  - Update `<a>` tags with new URLs or text (e.g., `<a href="https://updated.com">Updated Profile</a>`).
- **Deleting a Platform**:
  - Remove the entire `<div class="social-item">` block.

#### Toolkit Section Adjustments

- **Adding a Category**:
  1. Add a button under `<div class="filter-buttons">`:
     ```html
     <button>New Category</button>
     ```
  2. Add a corresponding `<div>`:
     ```html
     <div class="tool-category">
       <h3>New Category</h3>
       <div class="tool-list">
         <div class="tool-item">
           <p>New Tool</p>
           <p><a href="https://newtool.com">Visit</a></p>
         </div>
       </div>
     </div>
     ```

- **Adding a Tool**:
  - Within an existing `<div class="tool-list">`, insert:
    ```html
    <div class="tool-item">
      <p>New Tool</p>
      <p><a href="https://newtool.com">Visit</a></p>
    </div>
    ```

- **Editing/Deleting Tools**:
  - Modify `<p>` text or `<a>` URLs; remove `<div class="tool-item">` blocks as needed.

#### Schedule Section Adjustments

- **Calendar**:
  - Update Week: Change text in `<p>` under `<div class="calendar-header">` (e.g., `<p>Week of Mon, Feb 1 - Sun, Feb 7</p>`).
  - Modify Modal: Adjust `<select>` options or `<input>` fields in the "Add New Event" `<div>`.

- **Timetable**:
  - Add Row: Copy a `<tr>` from the `<table>` and adjust period numbers.
  - Edit Cells: Update `<td>` content (e.g., add course names).
  - Delete Row: Remove unwanted `<tr>` tags.

- **USTC Timetable**:
  - Add Class: Append a `<tr>` to the `<table>` under "My Classes":
    ```html
    <tr>
      <td>1-2</td>
      <td>New Course</td>
      <td>New Instructor</td>
      <td>Mon, Wed</td>
      <td><!-- Actions --></td>
    </tr>
    ```
  - Edit Modal: Adjust dropdowns or checkboxes in the "Add New Class" `<div>`.

## Project Structure

| File/Folder     | Description                                      |
|-----------------|--------------------------------------------------|
| `index.html`    | Main webpage with all content and structure      |
| `styles.css`    | (Assumed) Stylesheet for layout and design       |
| `scripts.js`    | (Assumed) JavaScript for interactivity           |

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make changes and commit: `git commit -m "Add feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Submit a pull request with a detailed description.

Please ensure changes align with the project’s academic and functional focus.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, contact:
- Email: `chenjinghao@mail.ustc.edu.cn` or `stardust.math26@gmail.com`
- GitHub Issues: Open an issue in this repository.