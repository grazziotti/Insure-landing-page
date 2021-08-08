const header = document.querySelector('#header')
const mobileBtn = document.querySelector('.mobile-btn')
const nav = document.querySelector('.header-nav')

const toggleMenu = () => {
    nav.classList.toggle('show')
    nav.classList.contains('show') 
        ? mobileBtn.src = './images/icon-close.svg'     
        : mobileBtn.src = './images/icon-hamburger.svg'
    header.classList.toggle('fixed')
}

mobileBtn.addEventListener('click', toggleMenu)
