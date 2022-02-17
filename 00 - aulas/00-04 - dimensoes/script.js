function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
}

function hideButton() {
    if (window.scrollY === 0) {
        document.querySelector('.scroll-button').style.display = 'none';
    } else {
        document.querySelector('.scroll-button').style.display = 'block';
    }
}

window.addEventListener('scroll', hideButton);