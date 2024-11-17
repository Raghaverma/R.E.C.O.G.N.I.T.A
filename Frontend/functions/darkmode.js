export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');  // Toggle the dark-mode class on the body

    // Save the current dark mode state to localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Function to initialize dark mode based on the stored preference
export function initializeDarkMode() {
    // Check if dark mode is enabled in localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode if it's enabled
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}
