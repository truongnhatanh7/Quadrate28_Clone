const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navbarFloat = $('#navbar-float')
const root = $('.root')
const body = $('body')

console.log(navbarFloat)
navbarFloat.classList.add('navbar-float')

let prevVal = 0;
body.onscroll = () => {
    prevVal = scrollY
    console.log(scrollY)
    if (scrollY >= 400) {
        navbarFloat.classList.add('navbar-float')

    } else {
        
        navbarFloat.style.animation = 'flyOut 0.2s'
        navbarFloat.classList.remove('navbar-float')
    }
}
