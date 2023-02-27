const language = document.getElementById('language');
const langPicker = document.getElementById('language-picker');
const theme = document.getElementById('theme');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('username');
const userNameForm = document.getElementById('username-form');

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

if (localStorage.getItem('avatar') === null) {
    localStorage.setItem('avatar', 'default');
} else if (avatar.value === 'default') {
    localStorage.setItem('avatar', 'default');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'lego') {
   localStorage.setItem('avatar', 'lego');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'lnp-group') {
    localStorage.setItem('avatar', 'lnp-group');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'lnp-productions') {
    localStorage.setItem('avatar', 'lnp-productions');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'ninjago') {
    localStorage.setItem('avatar', 'ninjago');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'lloyd') {
    localStorage.setItem('avatar', 'lloyd');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'kai') {
    localStorage.setItem('avatar', 'kai');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'zane') {
    localStorage.setItem('avatar', 'zane');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'jay') {
    localStorage.setItem('avatar', 'jay');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'cole') {
    localStorage.setItem('avatar', 'cole');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'nya') {
    localStorage.setItem('avatar', 'nya');
    avatar.value = localStorage.getItem('avatar');
} else if (avatar.value === 'master-wu') {
    localStorage.setItem('avatar', 'master-wu');
    avatar.value = localStorage.getItem('avatar');
} else {
    localStorage.setItem('avatar', 'default');
    avatar.value = localStorage.getItem('avatar');
}

if (localStorage.getItem('username') === null) {
    localStorage.setItem('username', 'Guest');
}

userNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('username', userName.value.toString());
    window.location.reload();
});

console.log('The avatar of the user is ' + localStorage.getItem('avatar'));

console.log('The username of the user is ' + localStorage.getItem('username'));

console.log('The theme of the website is ' + localStorage.getItem('theme'));