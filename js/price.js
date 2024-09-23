setTimeout(function() {
    document.querySelector('.hero').classList.add('animate');
}, 300);
setTimeout(function() {
    document.querySelector('.hero').classList.add('animate-end');
}, 800);


const moreButtons = document.querySelectorAll('.transportation__more');
moreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentBlock = button.closest('.transportation__block');
        if (parentBlock) {
            parentBlock.classList.toggle('show');
        }
    });
});


const selectSelected = document.querySelector('.calculation__select-selected');
const selectItems = document.querySelectorAll('.calculation__select-item');
const blocks = document.querySelectorAll('.calculation__block');
const itemSelect = document.querySelector('.calculation__item-select');
selectSelected.addEventListener('click', () => {
    itemSelect.classList.toggle('active');
});
selectItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        selectItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        selectSelected.textContent = item.textContent;
        blocks.forEach(block => block.classList.remove('active'));
        if (index < blocks.length) {
            blocks[index].classList.add('active');
        }
        itemSelect.classList.remove('active');
    });
});