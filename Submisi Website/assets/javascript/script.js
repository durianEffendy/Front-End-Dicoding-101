
const toggleButton = document.querySelector('.toggle-button input')
const nav = document.querySelector('nav ul')
const header = document.querySelector('header')
toggleButton.addEventListener('click', function() {
  nav.classList.toggle('slide')
  header.classList.toggle('slide')
})
