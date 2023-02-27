const language = document.getElementById('language');
const langPicker = document.getElementById('language-picker');
const theme = document.getElementById('theme');

theme.addEventListener('change', () => {
    localStorage.setItem('theme', theme.value);
    window.location.reload();
});

language.addEventListener('click', () => {
    langPicker.classList.toggle('active');
});

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
} else if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    theme.value = 'dark';
}

console.log('The theme of the website is ' + localStorage.getItem('theme'));