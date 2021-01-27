


let loginIn = document.querySelector('.header__btn--sign')
let overlay = document.querySelector('.overlay')
let modalLogin = document.getElementById('login');
let closeBtn = document.querySelector('.modal__closebtn');

loginIn.addEventListener('click', function(){
    overlay.style.display = 'block'
    // modalLogin.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none'
    // modalLogin.style.display = 'none'
})

window.addEventListener('click', function(event){
    if (event.target === overlay){
        // modalLogin.style.display = 'none'
        overlay.style.display = 'none'
    }
})

