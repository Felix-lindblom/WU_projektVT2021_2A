// gör klart mig!!!

const Nav = document.querySelector('.mobil-nav')
const circle = document.querySelector('.circle')

function toggleMeny(){
    Nav.classList.toggle('.nav-active')
    circle.classList.toggle('toggle')
}

circle.addEventListener('click', toggleMeny)