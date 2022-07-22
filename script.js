let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar')
menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
}
mynav.onclick = () => {
    mynav.classList.toggle('active')
}
