//for show button
function show(newValue){
    buttonText = newValue.target.innerText;
    document.getElementById("type").innerHTML += buttonText; 
}

buttons = document.getElementsByClassName("btn");

for (button of buttons){
    button.addEventListener("click",show);
}
// for cancel button
function erase(){
    document.getElementById("type").innerHTML= '';
    document.getElementById("result").innerHTML = "";
}
button = document.getElementById("cancel");

button.addEventListener("click", erase);

//for equal button

function equal() {
    document.getElementById("result").innerHTML = eval(document.getElementById("type").innerHTML);
}
answer = document.getElementById("ans");

answer.addEventListener("click",equal);

//for E button

function delele(){
    document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, document.getElementById("type").innerHTML.length-1 ) ;
}
erase =  document.getElementById("erase");

erase.addEventListener("click",delele);

//for keyboard

window.addEventListener("keydown", (e)=>{
    if( 
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "." ){
        clickButtonE(e.key);
    }  
});
buttons = document.getElementsByClassName("btn");
function clickButtonE(key){
    buttons.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    });
}


