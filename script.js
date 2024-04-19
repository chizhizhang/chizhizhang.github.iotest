document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    const hasDarkMode = document.body.classList.contains('dark-mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (hasDarkMode || (!hasDarkMode && !systemPrefersDark)) {
        document.body.classList.remove('dark-mode');
        // Save the user's preference in local storage or cookies
    } else {
        document.body.classList.add('dark-mode');
        // Save the user's preference in local storage or cookies
    }
});
