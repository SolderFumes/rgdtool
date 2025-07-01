let themeButton = document.getElementById('themeButton');
themeButton.onclick = toggleTheme;

let darkModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=000000'
let lightModeIcon = 'https://img.icons8.com/?size=40&id=45475&format=png&color=ffffff'

//check for local storage
if (sessionStorage['mode'] == 'dark') {
    dark();
}
else if (sessionStorage['mode'] == 'light') {
    light();
} 
else if (sessionStorage.getItem('mode') == undefined) {
    prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
    //initialize theme
    if (prefersLightTheme.matches) {
        console.log('prefers lightmode');
        light();
    }
    else {
        console.log('prefers darkmode');
        dark();
    }
}

function toggleTheme() {
    if (document.body.getAttribute('data-theme') == 'dark') {
        light();
    }
    else {
        dark();
    }
}

function dark() {
    sessionStorage.setItem('mode', 'dark');
    document.body.setAttribute('data-theme', 'dark');
    themeButton.src = lightModeIcon;
}

function light() {
    sessionStorage.setItem('mode', 'light');
    document.body.setAttribute('data-theme', 'light');
    themeButton.src = darkModeIcon;
}