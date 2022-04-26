//stack animation

const img = document.querySelector('.stack__image');

window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled >= 1070) {
        img.style.transform = "rotate("+window.pageYOffset/6 +"deg)";
    }
}

//scroll to contacts

const btn_contact = document.querySelector('header > .btn');
const contacts = document.querySelector('#contacts');
btn_contact.onclick = () => {
    contacts.scrollIntoView( {behavior: "smooth"} );
}