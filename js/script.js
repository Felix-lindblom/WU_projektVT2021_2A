const mobilNav = document.querySelector('.mobil-nav')
const circle = document.querySelector('circle')

function toggleMeny(){
    document.querySelector('.mobil-nav').classList.toggle('nav-active')
    document.querySelector('.circle').classList.toggle('toggle')
}

document.querySelector('.circle').addEventListener('click', toggleMeny)