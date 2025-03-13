let toggle_menu = document.querySelector('.menu-responsive');
let menu = document.querySelector('.menu');
toggle_menu.onclick = function(){
    toggle_menu.classList.toggle('active')
    menu.classList.toggle('responsive')
}