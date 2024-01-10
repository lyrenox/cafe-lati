// Detect system theme
if (localStorage.getItem("overrideSysColour") !== 'true') {
    darkThemeEnabled = window.matchMedia("(prefers-color-scheme: dark)").matches;
} else {
    darkThemeEnabled = (localStorage.getItem("darkThemeEnabled") === 'true');
};
console.log(darkThemeEnabled)

// Set webpage theme
const content = document.getElementById("iconName");
const sneakPeak = document.getElementById("sneakpeak");
if (darkThemeEnabled) {
    document.body.classList.add("dark-mode");
    sneakPeak.classList.add("dark");
    content.innerText = "dark_mode";
};

// Switch theme
function switchTheme() {
    document.body.classList.toggle("dark-mode");
    if (darkThemeEnabled) {
        content.innerText = "light_mode";
        darkThemeEnabled = false;
        console.log("Switched to Light Mode");
        sneakPeak.classList.remove("dark");
    } else {
        content.innerText = "dark_mode";
        darkThemeEnabled = true;
        console.log("Switched to Dark Mode");
        sneakPeak.classList.add("dark");
    };
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled.toString()); // Save theme
    localStorage.setItem("overrideSysColour", 'true'); // Override system theme on next visit
}
