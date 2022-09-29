//NAVIGATION BAR: toggle menu button 
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const links = document.getElementsByClassName('links')[0]

// when you click on the hamburger menu the navbar links will display
hamburgerMenu.addEventListener('click', () => {
  links.classList.toggle('active')
})


