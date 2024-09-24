AOS.init({
  once: true,
});

const body = document.querySelector('.body');
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerLink = document.querySelectorAll('.header__link');
headerLink.forEach(element => {
  element.addEventListener('click', function() {
      if (window.innerWidth < 621) {
        headerOpened()
    }
  });
});
burger.addEventListener('click', function() {
    headerOpened()
});
function headerOpened(){
    headerMenu.classList.toggle('active');
    burger.classList.toggle('active');
    if (headerMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
function checkScreenWidth() {
    if (window.innerWidth > 940) {
        document.body.style.overflow = '';
        headerMenu.classList.remove('active');
        burger.classList.remove('active');
    }
}
window.addEventListener('resize', handleResize);
handleResize()

function handleResize() {
  const headerInner = document.querySelector('.header__inner');
  const headerMenu = document.querySelector('.header__menu');
  const headerEnd = document.querySelector('.header__end');
  
  if (window.innerWidth < 1000) {
    if (!headerMenu.contains(headerEnd)) {
      headerMenu.appendChild(headerEnd);
    }
  } else {
    headerInner.appendChild(headerEnd);
  }
}

function handleScroll() {
    let header = document.querySelector('header');
    
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('load', handleScroll);


window.addEventListener('resize', handleResizeSocial);
handleResizeSocial()
function handleResizeSocial() {
  const headerEnd = document.querySelector('.header__end');
  const headerEndSocials = document.querySelector('.header__end-socials');
  const headerSocialsBlock = document.querySelector('.header__socials-block');
  
  if (window.innerWidth < 621) {
    headerEnd.appendChild(headerSocialsBlock);
  } else {
    headerEndSocials.appendChild(headerSocialsBlock);
  }
}
const langSelect = document.querySelector('.header__lang-select');
const langContent = document.querySelector('.header__end-lang');
langSelect.addEventListener('click', () => {
  langContent.classList.toggle('active');
});


if(document.querySelector('.popup')){
  document.querySelector('.popup-open').addEventListener('click', function() {
    document.querySelector('.popup').classList.add('active');
    document.querySelector('.body').classList.add('no-scroll');
  });
  
  document.querySelector('.popup__close').addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('active');
    document.querySelector('.body').classList.remove('no-scroll');
  });
}