let menu = document.querySelectorAll('.burger-menu-btn')[0];
let background = document.querySelectorAll('.background-body')[0];
function burgerMenu(){
    document.querySelectorAll('.nav')[0].classList.toggle('active-nav');
    document.querySelectorAll('.nav')[0].classList.toggle('shadow');
    document.querySelectorAll('.nav-list')[0].classList.toggle('nav-list-active');
    menu.classList.toggle('active-menu-btn');
    document.querySelectorAll('.burger-menu')[0].classList.toggle('active-menu');
    document.querySelectorAll('.logo')[0].classList.toggle('logo-active');
    document.querySelectorAll('.nav-link.about')[0].classList.toggle('link-about');
    document.querySelectorAll('.nav-link.about')[0].classList.toggle('nav-link-about-active');
    document.querySelectorAll('.background-body')[0].classList.toggle('background-body-active');
    document.querySelectorAll('.body')[0].classList.toggle('body-active');    
}
menu.addEventListener('click', burgerMenu);
background.addEventListener('click', () => {
    if (background.classList.contains('background-body-active'))
    burgerMenu();
})
let arrayCardsPets = document.querySelectorAll('.pets-item');
let petsList = document.querySelectorAll('.pets-list')[0];
let rightButtonSlider = document.querySelectorAll('.slider-btn.right')[0];
let leftButtonSlider = document.querySelectorAll('.slider-btn.left')[0];

function rightButton(){
    let str = '';
    let arrayItem = [];
    let listSlider = document.querySelectorAll('.container-pets-list-slider')[0];
    let containerList = document.querySelectorAll('.container-pets-list')[0];
    let widthContainerList = containerList.offsetWidth;
    arrayCardsPets.forEach((i,index) => arrayItem.push(index)); //создаем массив из последовательных чисел, равных количеству карточек
    arrayItem.sort(() => Math.random() - 0.5); //перемешиваем в случайном порядке массив
    arrayItem.forEach(i => str += arrayCardsPets[i].outerHTML);
    // увеличиваем ширину слайдера
    listSlider.style.width = listSlider.offsetWidth + widthContainerList + 'px';
    listSlider.innerHTML+= `<ul class='${petsList.classList[0]}'>${str}</ul>`
}

function leftButton(){
    let str = '';
    let arrayItem = [];
    let listSlider = document.querySelectorAll('.container-pets-list-slider')[0];
    let containerList = document.querySelectorAll('.container-pets-list')[0];
    let widthContainerList = containerList.offsetWidth;
    arrayCardsPets.forEach((i,index) => arrayItem.push(index)); //создаем массив из последовательных чисел, равных количеству карточек
    arrayItem.sort(() => Math.random() - 0.5); //перемешиваем в случайном порядке массив
    arrayItem.forEach(i => str += arrayCardsPets[i].outerHTML);
    // увеличиваем ширину слайдера
    listSlider.style.width = listSlider.offsetWidth + containerList.offsetWidth + 'px';
    let newListSlider = listSlider.innerHTML;
    listSlider.innerHTML = `<ul class='${petsList.classList[0]}'>${str}</ul>` + newListSlider;
    listSlider.style.transition = void 0;
    if (listSlider.style.left) listSlider.style.left = parseInt(listSlider.style.left) - widthContainerList + 'px';
    else    listSlider.style.left = listSlider.offsetLeft - widthContainerList + 'px';
}

let clicked = false;
rightButtonSlider.addEventListener('click', () => {
    if(clicked == false) {
        clicked = true;
        let listSlider = document.querySelectorAll('.container-pets-list-slider')[0];
        let containerList = document.querySelectorAll('.container-pets-list')[0];
        let widthContainerList = containerList.offsetWidth; 
        rightButton()
        if (listSlider.style.left) listSlider.style.left = parseInt(listSlider.style.left) - widthContainerList + 'px';
        else    listSlider.style.left = listSlider.offsetLeft - widthContainerList + 'px';
        listSlider.style.transition = 'left 0.5s';
        setTimeout(() => {
            let lastch = listSlider.lastChild;
            listSlider.style.transition = void 0;
            listSlider.innerHTML = lastch.outerHTML;
            listSlider.style.left = 0;
            listSlider.style.width = widthContainerList + 'px';
            clicked = false;
        },500)
    }
})

leftButtonSlider.addEventListener('click', () => {
    if(clicked == false){
        clicked = true;
        let listSlider = document.querySelectorAll('.container-pets-list-slider')[0];
        let containerList = document.querySelectorAll('.container-pets-list')[0];
        let widthContainerList = containerList.offsetWidth; 
        leftButton();
        setTimeout(() => {
            listSlider.style.left = parseInt(listSlider.style.left) + widthContainerList + 'px';
            listSlider.style.transition = 'left 0.5s';
        },0)
        setTimeout(() => {
            let lastch = listSlider.firstChild;
            listSlider.style.transition = void 0;
            listSlider.innerHTML = lastch.outerHTML;
            listSlider.style.left = 0;
            listSlider.style.width = widthContainerList + 'px';
            clicked = false;  
        },500)
    }
})

//Testimonials
let scrollTesti = document.querySelectorAll(".scroll")[0];
let valueStart = scrollTesti.value;
scrollTesti.addEventListener("input", () => {
    let item = document.querySelectorAll(".testimonials-slider-item")[0];
    let list = document.querySelectorAll(".testimonials-slider-list")[0];
    list.style.transition = 'left 0.5s';
    let marginLeft = parseInt(getComputedStyle(item, true).marginLeft);
    let marginRight = parseInt(getComputedStyle(item, true).marginRight);
    let widthFull = marginLeft + marginRight + item.offsetWidth;
    if (parseInt(scrollTesti.value) > valueStart) {
        if (list.style.left) list.style.left = parseInt(list.style.left) - widthFull + 'px';
        else    list.style.left = list.offsetLeft - widthFull + 'px';
    } else {
        if (list.style.left) list.style.left = parseInt(list.style.left) + widthFull + 'px';
        else    list.style.left = list.offsetLeft + widthFull + 'px';
    }
    valueStart = parseInt(scrollTesti.value);
});

// Popap
let list = document.querySelectorAll(".testimonials-slider-list")[0];
list.addEventListener('click', (e) => {
    let popup = document.querySelectorAll(".popup")[0];
    let item = e.path.find(i => i.classList == 'testimonials-slider-item');
    popup.innerHTML = item.outerHTML;
    // popup.classList.toggle('popup-active');
    document.querySelectorAll('.container-popup')[0].classList.toggle('popup-active');
    document.querySelectorAll('.background-popup')[0].classList.toggle('background-popup-active');
    document.querySelectorAll('.body')[0].classList.toggle('body-active');
});
document.querySelectorAll(".btn-popup")[0].addEventListener('click', () => {
    document.querySelectorAll(".container-popup")[0].classList.toggle('popup-active');
    document.querySelectorAll('.background-popup')[0].classList.toggle('background-popup-active');
    document.querySelectorAll('.body')[0].classList.toggle('body-active');
});
document.querySelectorAll(".background-popup")[0].addEventListener('click', () => {
    document.querySelectorAll(".container-popup")[0].classList.toggle('popup-active');
    document.querySelectorAll('.background-popup')[0].classList.toggle('background-popup-active');
    document.querySelectorAll('.body')[0].classList.toggle('body-active');
});

