



setInterval(function(){
    
let a= new Date();
let hour=a.getHours();
let min=a.getMinutes();
let sec=a.getSeconds();


let d1=document.querySelector(".d1").innerHTML=hour;
let d2=document.querySelector(".d2").innerHTML=min;
let d3=document.querySelector(".d3").innerHTML=sec;

},1000);