let isMagnified = false;
let isContrastMode = false;
let isDarkMode = false;

// Toggle Accessibility Popup
document.getElementById('accessibility-btn').addEventListener('click', function() {
    let popup = document.getElementById('accessibility-popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
});

// Toggle Options Popup
document.getElementById('options-btn').addEventListener('click', function() {
    let popup = document.getElementById('options-popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
});

// Magnify Button Functionality
document.getElementById('magnify').addEventListener('click', function() {
    if (!isMagnified) {
        document.body.style.fontSize = '1.5em';  // Increase font size
    } else {
        document.body.style.fontSize = '1em';    // Reset font size
    }
    isMagnified = !isMagnified;
});

// Contrast Button Functionality
document.getElementById('contrast').addEventListener('click', function() {
    if (!isContrastMode) {
        document.body.classList.add('contrast-mode');
    } else {
        document.body.classList.remove('contrast-mode');
    }
    isContrastMode = !isContrastMode;
});

// Dark Mode Button Functionality
document.getElementById('dark-mode').addEventListener('click', function() {
    if (!isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    isDarkMode = !isDarkMode;
});

// Speech Button (Dummy Implementation for Now)
document.getElementById('speech').addEventListener('click', function() {
    alert("Speech functionality coming soon!");
});

// Options Button Functionality (Help, Expert, FAQ, etc.)
document.getElementById('help').addEventListener('click', function() {
    alert("Help section is under construction.");
});
document.getElementById('expert').addEventListener('click', function() {
    alert("Kya expert advice chaiye bc?");
});
document.getElementById('faq').addEventListener('click', function() {
    alert("FAQ section is under construction.");
});
document.getElementById('social').addEventListener('click', function() {
    alert("Social section is under construction.");
});
document.getElementById('downloads').addEventListener('click', function() {
    alert("Downloads section is under construction.");
});