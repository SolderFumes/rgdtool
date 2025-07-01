let themeButton = document.getElementById('themeButton');
themeButton.onclick = toggleTheme;

let darkModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=000000'
let lightModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=ffffff'

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.body.setAttribute('data-theme', 'dark');
        themeButton.src = lightModeIcon;
    }
    else {
        document.body.setAttribute('data-theme', light);
        themeButton.src = darkModeIcon;
    }
});

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