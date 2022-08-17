const toggleMenu = document.querySelector('.menu-toggle')
const closeMenu = document.querySelector('.menu-close')
const mobileMenu = document.getElementById('mobileMenu')

toggleMenu.addEventListener('click', (e) => {
	mobileMenu.classList.add('show')
})

closeMenu.addEventListener('click', (e) => {
	mobileMenu.classList.remove('show')
})


