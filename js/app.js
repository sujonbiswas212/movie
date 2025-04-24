
// navbar
var navlinks = document.getElementById('navlinks');
var navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click',function(){
    navlinks.classList.toggle('active');
})

// hero
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        smartSpeed:1000,
        dots:true,
        responsive:{
            0:{

            },
            600:{
                items:2
               
                
            },
            1000:{
                items:3,
            }
        }
    })

})


