var button1=document.getElementById("p1");
var button2=document.getElementById("p2");
var resetButton=document.getElementById("reset");
var p1Score=0; var p2Score=0;
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var numinput=document.querySelector("input");
var gameOver=false;
var winningScore=5;

button1.addEventListener("click",function(){
if(!gameOver){
	p1Score++;
	if(p1Score===winningScore){
		gameOver=true;
		p1display.classList.add("winner");
	}
}

p1display.textContent=p1Score;
});
button2.addEventListener("click",function(){
	if(!gameOver){
	p2Score++;
	if(p2Score===winningScore){
		gameOver=true;
		p2display.classList.add("winner");
	}
}
p2display.textContent=p2Score;
});
resetButton.addEventListener("click",function(){
	reset();

});
function reset(){
p1display.textContent=p2display.textContent=0;
	p1Score=p2Score=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver=false;}

numinput.addEventListener("change",function(){
	var playto=document.getElementById("playto")
	playto.textContent=Number(numinput.value);
	winningScore=Number(numinput.value);
	reset();
});
