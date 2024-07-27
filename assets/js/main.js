/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const Active = () =>{
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click',Active))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');

    if(this.scrollY>=50) 
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*=============== POPULAR SWIPER ===============*/

var swiperPopular = new Swiper(".popular__container", {
    loop:true,
    spaceBetween:24,
    slidesPerView:'auto',
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active featured */ 

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured () {
    linkFeatured.forEach(i => i.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(x => x.addEventListener('click',activeFeatured))


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
