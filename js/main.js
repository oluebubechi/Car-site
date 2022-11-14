let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}


//Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//Hide menu and search bar
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

(function () {
    var userCurrentPreference = localStorage.getItem("mode");
    if (userCurrentPreference = "dark") document.documentElement.classList.toggle("dark");
    else if (userCurrentPreference = "light") document.documentElement.classList.toggle("light");
})();

