const nav = document.querySelector('.nav-menu')
const circle = document.querySelector('#bak-circle')
const cross = document.querySelector('#cross')

function toggleMeny() {
    nav.classList.toggle('nav-active')
    circle.classList.toggle('toggle')
    cross.classList.toggle('toggle')
}

circle.addEventListener('click', toggleMeny)
cross.addEventListener('click', toggleMeny)