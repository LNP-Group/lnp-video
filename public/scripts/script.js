const theme = localStorage.getItem('theme');
const avatar = localStorage.getItem('avatar');
const username = localStorage.getItem('username');
const usernameItem = document.getElementById('username');
const avatarImage = document.getElementById('avatar');

if (theme === 'dark') {
    document.body.classList.add('dark');
}

if (avatar === 'default') {
    avatarImage.src = "/images/avatar/default.jpg";
} else if (avatar === 'lego') {
    avatarImage.src = "/images/avatar/lego.jpg";
} else if (avatar === 'lnp-group') {
    avatarImage.src = "/images/avatar/lnp-group.jpg";
} else if (avatar === 'lnp-productions') {
    avatarImage.src = "/images/avatar/lnp-productions.jpg";
} else if (avatar === 'ninjago') {
    avatarImage.src = "/images/avatar/ninjago.jpg";
} else if (avatar === 'lloyd') {
    avatarImage.src = "/images/avatar/lloyd.jpg";
} else if (avatar === 'kai') {
    avatarImage.src = "/images/avatar/kai.jpg";
} else if (avatar === 'zane') {
    avatarImage.src = "/images/avatar/zane.jpg";
} else if (avatar === 'jay') {
    avatarImage.src = "/images/avatar/jay.jpg";
} else if (avatar === 'cole') {
    avatarImage.src = "/images/avatar/cole.jpg";
} else if (avatar === 'nya') {
    avatarImage.src = "/images/avatar/nya.jpg";
} else if (avatar === 'master-wu') {
    avatarImage.src = "/images/avatar/master-wu.jpg";
} else {
    avatarImage.src = "/images/avatar/default.jpg";
}

username.setItem('Guest');

if (username === 'Guest') {
    usernameItem.innerHTML = 'Guest';
} else {
    usernameItem.innerHTML = username;
}



