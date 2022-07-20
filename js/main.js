let toggle_btn = document.getElementById('toggle-btn');
let nav = document.getElementById('nav');

toggle_btn.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})

// owl-carousel for bolg

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,

        },
        
        850:{
            items:3,

        },
        1000:{
            items:4,

        }
    }
});

// Click To Scrool Top

const scroll_btn = document.getElementById('scroll-top'); 
scroll_btn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// AOS Initialize
AOS.init();