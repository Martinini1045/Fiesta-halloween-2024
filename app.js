const secondHeader = document.querySelector('.oops');
const form = document.querySelector('.form');
const hiddenBtn = document.querySelector('.signup__button--hidden');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('mouseenter', (e) => {
    hiddenBtn.style.display = 'block';
});

submitBtn.addEventListener('mouseleave', (e) => {
    hiddenBtn.style.display = 'none';
});

const removeForm = function() {
    form.style.display = 'none';
    setTimeout( ()=> {secondHeader.style.display = 'block';}, 500);
}

hiddenBtn.addEventListener('click', removeForm );
