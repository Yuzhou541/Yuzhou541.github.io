import { initializeThemeController, setupThemeController } from './theme-controller.js';
import { applyColorsBasedOnTheme } from './paper-split-controller.js';


document.addEventListener('DOMContentLoaded', () => {
    initializeThemeController();
    setupThemeController();
    applyColorsBasedOnTheme();
});
