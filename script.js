const themeBtn = document.getElementById("themeBtn");

let dark = true;

themeBtn.onclick = () => {

dark = !dark;

if(dark){

document.body.style.background="#0f172a";

document.body.style.color="white";

themeBtn.innerHTML="🌙";

}

else{

document.body.style.background="white";

document.body.style.color="black";

themeBtn.innerHTML="☀️";

}

}