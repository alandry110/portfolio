//NAVIGATION BAR: toggle menu button 
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const links = document.getElementsByClassName('links')[0]

hamburgerMenu.addEventListener('click', () => {
  links.classList.toggle('active')
})


