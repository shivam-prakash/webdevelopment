var button1=document.getElementById("p1");
var button2=document.getElementById("p2");
var p1Score=0; var p2Score=0;
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var gameOver=false;
var winningScore=5;

button1.addEventListener("click",function(){
if(!gameOver){
	p1Score++;
	if(p1Score===winningScore){
		gameOver=true;
	}
}

p1display.textContent=p1Score;
});
button2.addEventListener("click",function(){
	if(!gameOver){
	p2Score++;
	if(p2Score===winningScore){
		gameOver=true;
	}
}
p2display.textContent=p2Score;
});