const box2=document.querySelector('#box-2');
const box1=document.querySelector('#box-1');
const submitBtn=document.querySelector('#submit');

function storeVar(number){
  const btnValue=document.querySelector('#num');
  btnValue.innerText=number;
  btnValue.classList.add("paragraph");
  btnValue.style.color="hsl(25, 97%, 53%)";
}

submitBtn.addEventListener('click',function (){
    box1.style.dispaly='none';
    box1.classList.add('hidden');
    box2.classList.add('box');
    box2.classList.remove('hidden');
});




