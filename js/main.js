document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        document.querySelector('.hero').classList.add('animate');
    }, 300);
    setTimeout(function() {
        document.querySelector('.hero').classList.add('animate-end');
    }, 800);
});



const advantagesItems = document.querySelectorAll('.advantages__item');

advantagesItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        advantagesItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
});

function moveAboutImages() {
  const aboutBox = document.querySelector('.about__box');
  const aboutImages = document.querySelectorAll('.about__image');
  const aboutContent = document.querySelector('.about__content');
  const paragraphs = aboutContent.querySelectorAll('p');
  if (window.innerWidth < 541) {
    if (paragraphs.length >= 3) {
      if (!paragraphs[2].contains(aboutImages[0])) {
        paragraphs[2].appendChild(aboutImages[0]);
      }
    }
    if (!paragraphs[paragraphs.length - 1].nextSibling?.contains(aboutImages[1])) {
      paragraphs[paragraphs.length - 1].after(aboutImages[1]);
    }
  } else {
    if (!aboutBox.contains(aboutImages[0])) {
      aboutBox.appendChild(aboutImages[0]);
    }
    if (!aboutBox.contains(aboutImages[1])) {
      aboutBox.appendChild(aboutImages[1]);
    }
  }
}
window.addEventListener('resize', moveAboutImages);
moveAboutImages();

