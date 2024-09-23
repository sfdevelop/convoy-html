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

const moreButtons = document.querySelectorAll('.routes__more');
moreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentBlock = button.closest('.routes__content');
        if (parentBlock) {
            parentBlock.classList.toggle('show');
        }
    });
});