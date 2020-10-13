window.onload = function(){
	var boards = document.querySelector("#board").children;
	/*var tracker = 0;*/
	var turn = "X";
    console.log(boards.length);
	for (let i= 0; i<boards.length; i++){
		alert("sym this nah work");
		boards[i].classList.add("square");
		boards[i].addEventListener("click",function(){
			if (turn=="X"){
				boards[i].innerHTML="X";
			}else{
				boards[i].innerHTML="O";
			}
			
		});
	} 
}