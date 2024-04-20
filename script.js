document.querySelector('.search-toggle').addEventListener('click', function() {
    var searchBox = document.getElementById('search-box');
    if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
    } else {
        searchBox.style.display = 'block';
    }
});


const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check the user's system preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If the system is in dark mode, select the 'Dark' option
    darkModeToggle.value = 'dark';
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // If the system is in light mode, select the 'Light' option
    darkModeToggle.value = 'light';
} else {
    // If the system preferred color mode cannot be detected, you can choose a default option, such as 'Auto'
    darkModeToggle.value = 'auto';
}

