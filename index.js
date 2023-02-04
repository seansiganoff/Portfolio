

//////////////////////////////////////// Ease in elements on scroll ///////////////////////////////
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

/////////////////////////////////////////// Navbar //////////////////////////////////////

document.querySelector('.btn').onclick = function (e) {
    let menu = document.getElementById('menu');
    let btn = document.getElementById('btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}



/////////////////////////////////////////////////////// Typewriter /////////////////////////////

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if(this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt-type">${this.txt}</span>`

        let typeSpeed = 100;
        

        if(!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000
        } 
        
        setTimeout(() => this.type(), typeSpeed)
    }
}

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

document.addEventListener("DOMContextLoaded", init());

///////////////////////////// black out ////////////////////////////



let changeBackground = () => {
    if(window.scrollY > 150) {
        document.getElementById('background-for-the-whole-page-overlay').style.background = 'rgba(0, 0, 0, 0.157)';
        console.log('its working!')
    } else {
        document.getElementById('background-for-the-whole-page-overlay').style.background = 'rgba(0, 0, 0)';
    }
}

window.addEventListener('scroll', changeBackground)