// // prendo contenitore  dove staranno i miei box
// let boxItem = document.querySelector('.box-items');

// //genero box da 100 item con ciclo
// function generate(number) {
//     boxItem.innerHTML = '';
//     for (let i = 1; i <= number; i++) {

//         let funcCreoBox = creoBox(number);
//         boxItem.append(funcCreoBox);
//         funcCreoBox.innerText += i;

//         funcCreoBox.addEventListener('change', function () {

//             this.className = 'coral';

//         })

//         funcCreoBox.addEventListener('click', function () {

//             this.classList.add('coral');
//             console.log(i, 'numero cliccato')

//         })
//         boxItem.append(funcCreoBox);
//     }
// }
// generate(100);



// // let select =document.querySelector('#')


// // bottone input
// let liSelect = document.querySelector('.list-select');
// let btn = document.querySelector('.btn').addEventListener('click', function () {
//     liSelect.classList.remove('d-none');
// })





// // creo funzione personalizata custom box 100
// function creoBox(number) {
//     let element = document.createElement('div');
//     if (number) {
//         element.className= `box box-${number}`;
//     } else {
//         element.className = 'box';
//     }

//     // element.innerText = 'text'
//     return element;
// }





// prendo contenitore  dove staranno i miei box
let boxItems = document.querySelector('.box-items');

// genero 100box con ciclo
function boxes(numero) {
    boxItems.innerHTML = '';
    for (let i = 1; i <= numero; i++) {
        // console.log(`box-${numero}`);
        let item = elementBox('div',`box-${numero}`, i);

        item.addEventListener('click', function () {
            this.classList.add('blue');
            console.log(i, 'numero cliccato');
        })


        boxItems.append(item);
    }
}



// bottone
let level = document.querySelector('.list-select');
let btnPlay = document.querySelector('.btn').addEventListener('click', function () {
    let select = document.querySelector('#select').value;
    boxes(select);
    
})


// change select
// document.querySelector('#select').addEventListener('change', function (e) {
//     console.log(e.currentTarget.value);
//     boxes(e.currentTarget.value);
// })



// creo function custom
function elementBox(tag, classi, text) {
    let element = document.createElement(tag);
    element.className = classi;
    element.innerText = text;
    return element;
}