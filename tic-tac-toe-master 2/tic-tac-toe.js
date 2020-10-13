window.onload = function(){
	var board = document.getElementById("board").children;
	var tracker = 0;
	for (let i= 0; i<board.length; i++){
		board[i].classList.add("square");
		board[i].addEventListener("click",function(){
			if (tracker%2==0){
				board[i].innerHTML="X";
				board[i].classList.add("X");
			}else{
				board[i].innerHTML="O";
				board[i].classList.add("O");
			}
			tracker++;
		});
	} 
}