// Script to change the theme based on system preference
const toggleDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};

// Check for system preference on load
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
toggleDarkMode(mediaQuery.matches);

// Listen for changes in system preference
mediaQuery.addListener((e) => toggleDarkMode(e.matches));
