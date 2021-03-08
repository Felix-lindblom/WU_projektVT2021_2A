// gör klart mig!!!

const nav = document.querySelector('.nav-link-mobil')
const circle = document.querySelector('.circle')

function toggleMeny() {
    nav.classList.toggle('nav-active')
    circle.classList.toggle('toggle')
}

circle.addEventListener('click', toggleMeny)