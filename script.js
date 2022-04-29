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

//loader 

const header = document.querySelector('header');
const loaded = () => {
	return new Promise((resolve) => {
  	    setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
            header.style.zIndex = 1;
            resolve();
        }, 500);
	})
};
  
window.onload = setTimeout(async function () {
    document.body.classList.add('loaded_hiding');
    let res = loaded();
    await res;
}, 2000)




