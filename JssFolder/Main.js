/*

*/

const TextSticks = document.getElementById("TextStick");
const ButtonAddStick = document.getElementById("ButtonAddStick");

var sticks = 0;

function UpdSticks(){
    TextSticks.innerHTML = sticks + " Sticks";
}
ButtonAddStick.onClick=function(){
    sticks++;
    UpdSticks();
}


