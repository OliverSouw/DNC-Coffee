let btnFunc = document.querySelector('.btn-funcionamento');
let modal = document.querySelector('.modal-funcionamento');
let btnClose = document.querySelector('.close');

let card = document.querySelectorAll('.card');
let btnComprar = document.querySelectorAll('.btn-info');

btnFunc.addEventListener('click', () => {
    modal.style.visibility = 'visible';
});

btnClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
});

for (let i in card) {
    card[i].addEventListener('mouseover', () => {
        btnComprar[i].style.visibility = 'visible';
    })

    card[i].addEventListener('mouseout', () => {
        btnComprar[i].style.visibility = 'hidden';
    })
}