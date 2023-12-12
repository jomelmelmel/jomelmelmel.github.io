function changeText() {
    // Get the button element by its ID
    var button = document.getElementById("dmButton");

    // Check the current text of the button
    if (button.innerHTML === "🌙" && localStorage.getItem('dark-mode') === 'enabled') {
        // Change the text if it's the original text
        button.innerHTML = "☀️";
    } if (button.innerHTML === "🌙" && localStorage.getItem('dark-mode') === 'disabled'){
        // Change the text back to the original if it's already changed
        button.innerHTML = "☀️";
    } else {button.innerHTML = "🌙";}
};

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-checkbox');
    const body = document.body;

    // Check the user's preference from local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});