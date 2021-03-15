// gör klart mig!!!
const nav = document.querySelector('.nav-link')
const circle = document.querySelector('.nav-but')

function toggleMeny() {
    nav.classList.toggle('nav-active')
    circle.classList.toggle('toggle')
}

circle.addEventListener('click', toggleMeny)