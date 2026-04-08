function setFaviconBasedOnTheme() {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  console.log(`Current theme detected: ${theme}`); // Log the current theme for debugging

  const favicon = document.getElementById('favicon');
  if (favicon) {
    // console.log('Favicon link element found.');
    favicon.href = theme === 'dark' ? './pics/avatar/favicon_dark.ico' : './pics/avatar/favicon_light.ico';
    // console.log(`Favicon updated to: ${favicon.href}`); // Log the new favicon URL
  } else {
    console.error('Favicon link element not found.');
  }
}

setFaviconBasedOnTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  // console.log('Theme change detected.');
  setFaviconBasedOnTheme();
});
