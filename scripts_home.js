
// Event listener for the theme toggle button
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// Apply the saved theme when the page loads
window.addEventListener("load", applySavedTheme);

// Theme Switching Functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    // Save the theme preference in localStorage
    const isDarkTheme = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

