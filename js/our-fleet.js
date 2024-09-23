document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        document.querySelector('.hero').classList.add('animate');
    }, 300);
    setTimeout(function() {
        document.querySelector('.hero').classList.add('animate-end');
    }, 800);
});