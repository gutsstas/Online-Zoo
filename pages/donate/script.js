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
});

let scale = document.querySelectorAll('.donate-scale')[0];
let circle = document.querySelectorAll('.donate-scale-circle');
let scaleAmount = document.querySelectorAll('.amount-item');
let inputAmount = document.querySelectorAll('.another-amount')[0];

scale.addEventListener('click', (e) => {
  let indexCircle;
  if(e.target.classList.contains("donate-scale-circle")){
    circle.forEach(i => i.classList.remove('active-circle'));
    e.target.classList.add('active-circle');
    scaleAmount.forEach(i => i.classList.remove('amount-item-active'));
    e.target.classList.add('active-circle');
    circle.forEach((i,index) =>{
      if (i.classList.contains('active-circle')) indexCircle = index;
    })
    scaleAmount[indexCircle].classList.add('amount-item-active')
    let amount = (+(scaleAmount[indexCircle].firstChild.data).slice(1));
    inputAmount.value = amount;
  }
});
inputAmount.addEventListener('input', (e) => {
  let scaleAmount = document.querySelectorAll('.amount-item');
  circle.forEach(i => i.classList.remove('active-circle'))
  scaleAmount.forEach(i => i.classList.remove('amount-item-active'));
  let array = [];
  if(inputAmount.value > 9999) inputAmount.value = 9999;
  if(inputAmount.value < -9999) inputAmount.value = -9999;
  scaleAmount.forEach(i => array.push(i));
  let arrayAmount = array.map(i => (+(i.firstChild.data).slice(1)));
  arrayAmount.forEach((i,index) =>{
    if (i == inputAmount.value) {
      circle[index].classList.add('active-circle');
      scaleAmount[index].classList.add('amount-item-active');
    }
  })
})
