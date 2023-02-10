// Menu
const menu = document.querySelector('.js-menu')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal_close')

function showMenu() {
    modal.classList.add('open')
}

function hideMenu() {
    modal.classList.remove('open')
}

menu.addEventListener('click', showMenu)
modalClose.addEventListener('click', hideMenu)


// Contact 
const contact  = document.querySelector('.js-contact')
const contactFooter = document.querySelector('.js-contact_footer')
const contactClose = document.querySelector('.js-contact_footer-icon')

function showContact() {
    contactFooter.classList.add('open2')
}

function hideContact() {
    contactFooter.classList.remove('open2')
}


contact.addEventListener('click', showContact)
contactClose.addEventListener('click', hideContact)

