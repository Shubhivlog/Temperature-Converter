let btn=document.querySelector('button');
let number=document.getElementById('num');

btn.addEventListener('click',()=>{
    let h3tag=document.querySelectorAll('h3');
    let temp=document.getElementById('temp');
   // h3tag[0].innerText=number.value+temp.value;
    if(temp.value=='Celcius')
    {
        let f=(9/5*number.value)+32;
        h3tag[0].innerText=f+" Degree Ferenhite";
    }
    else if(temp.value=='Ferenhite')
    {
        let c=5/9*(number.value-32);
        h3tag[0].innerText=c+" Degree Celcius";
    }
})