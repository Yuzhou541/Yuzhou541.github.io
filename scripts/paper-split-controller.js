function applyColorsBasedOnTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark');
  
  // If your CSS is defined so that dark theme uses --splitter-colors-dark, 
  // and light theme uses --splitter-colors-light, we just follow that logic.
  const variableName = isDark ? '--splitter-colors-dark' : '--splitter-colors-light';

  const colors = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .split(',')
      .map(color => color.trim())
      .filter(color => color.length > 0);

  const splitters = document.querySelectorAll('.paper-splitter');
  splitters.forEach((splitter, index) => {
      splitter.style.borderLeftColor = colors[index % colors.length];
  });
}

export { applyColorsBasedOnTheme };
