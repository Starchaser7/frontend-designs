const navigation = document.querySelector('.navigation')
document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}


//abaixo só muda as cores aleatorias
function changeColor() {
    const hex = (Math.random()*0xFFFFFF<<0).toString(16);
    return `#${hex}`
}


const spanSelector = document.querySelectorAll('span');
document.getElementById('change').addEventListener('click', () =>{
    let cor = changeColor();
    for (i = 0; i < spanSelector.length; i++){
        spanSelector[i].style.background = cor
    }
})


// function addEventListenerBySelector (event, fn) {
//     const aSelector = document.querySelectorAll('a');
//     for (let i = 0; i < aSelector.length; i++){
//         aSelector[i].addEventListener(event, fn)
//     }
// }

const aSelector = document.querySelectorAll('a');
// let seletor = document.querySelector('a')

// const changeA = () => {
//     let cor = changeColor();
//     for (i = 0; i < aSelector.length; i++){
//         aSelector[i].style.color = cor
//     }
// };

    
// const changeB = () => {
//     let cor = 'white';
//     for (i = 0; i < aSelector.length; i++){
//         aSelector[i].style.color = cor
//     }
// };

// addEventListenerBySelector('mouseover', changeA);
// addEventListenerBySelector('mouseout', changeB);

aSelector.forEach(element => {
    element.onmouseover = function() {
        let cor = changeColor()
        element.style.color = cor;
    }
    element.onmouseout = function() {
        element.style.color = 'white';
    }
})