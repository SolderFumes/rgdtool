let themeButton = document.getElementById('themeButton');
themeButton.onclick = toggleTheme;

let darkModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=000000'
let lightModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=ffffff'

prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
//initialize theme
if (prefersLightTheme.matches) {
    console.log('prefers lightmode');
    document.body.setAttribute('data-theme', 'light');
    themeButton.src = darkModeIcon;
}
else {
    console.log('prefers darkmode');
    document.body.setAttribute('data-theme', 'dark');
    themeButton.src = lightModeIcon;
}

function toggleTheme() {
    if (document.body.getAttribute('data-theme') == 'dark') {
        document.body.setAttribute('data-theme', 'light');
        themeButton.src = darkModeIcon;
    }
    else {
        document.body.setAttribute('data-theme', 'dark');
        themeButton.src = lightModeIcon;
    }
}