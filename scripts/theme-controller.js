import { applyColorsBasedOnTheme } from './paper-split-controller.js';

function setTheme(preference) {
    const body = document.body;

    if (preference === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
}

function initializeThemeController() {
    // Always detect the system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialPreference = systemPrefersDark ? 'dark' : 'light';
    console.log(`Current theme detected: ${initialPreference}`); // For debugging

    // Apply the system theme on load (Currently forcing dark for testing)
    const savedTheme = localStorage.getItem('sessionTheme') || initialPreference;
    setTheme('light'); // Force dark mode for testing
    // setTheme(savedTheme); // In future, comment out the above line and uncomment this one for user/system theme

    // Apply colors immediately so .paper-splitter matches the chosen theme
    applyColorsBasedOnTheme();

    // Save the system preference
    localStorage.setItem('systemTheme', initialPreference);
}

function setupThemeController() {
    const controllerButton = document.querySelector('.theme-toggle');

    if (controllerButton) {
        // Load SVG dynamically into the button
        loadSvgIntoButton('.theme-toggle', 'pics/bottons/theme-toggle.svg').then(() => {
            // Add event listener after SVG is loaded
            controllerButton.addEventListener('click', () => {
                const body = document.body;

                // Check current theme and toggle it
                const isDarkTheme = body.classList.contains('dark');
                const newTheme = isDarkTheme ? 'light' : 'dark';

                // Toggle the theme
                setTheme(newTheme);

                // Toggle button animation
                controllerButton.classList.toggle('theme-toggle--toggled', !isDarkTheme);

                // Save the new theme preference
                localStorage.setItem('sessionTheme', newTheme);

                // Update colors after toggling
                applyColorsBasedOnTheme();
            });
        });
    } else {
        console.warn('Theme controller button not found. Skipping event listener setup.');
    }
}

function loadSvgIntoButton(buttonSelector, svgPath) {
    const button = document.querySelector(buttonSelector);

    return fetch(svgPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load SVG: ${response.statusText}`);
            }
            return response.text();
        })
        .then((svgContent) => {
            button.innerHTML = svgContent; // Embed SVG inline
        })
        .catch((err) => console.error('Error loading SVG:', err));
}

export { setTheme, initializeThemeController, setupThemeController };
