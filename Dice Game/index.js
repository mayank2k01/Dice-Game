var num1=Math.ceil(Math.random()*6);
var num2=Math.ceil(Math.random()*6);

var random1='images/dice'+num1+'.png';
var random2='images/dice'+num2+'.png';

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",random1);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",random2);

var res=document.querySelector("h1");
if(num1>num2) res.innerHTML="Player 1 wins";
else if(num2>num1) res.innerHTML="Player 2 wins";
else res.innerHTML="Match Draw";