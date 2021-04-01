const navigation = document.querySelector('.navigation')
document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

//pegar cores do arco iris
const cores = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF'];

function pegarCor () {
    return cores[Math.floor(Math.random() * cores.length)]
}

//abaixo só muda as cores aleatorias

const spanSelector = document.querySelectorAll('span');
document.getElementById('change').addEventListener('click', () =>{
    for (let i = 0; i < spanSelector.length; i++){
        spanSelector[i].style.background = `${cores[i]}50`
    }
})

const aSelector = document.querySelectorAll('a');

aSelector.forEach((element, index) => {
    element.onmouseover = () => {
        element.style.color = cores[index];
    }
    element.onmouseout = () => {
        element.style.color = 'white';
    }
})