let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
mobileNav.classList.add('open');
});


times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: [ "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
