window.onload = function(){
	var board = document.getElementById("board").children;
	for (let i= 0; i<board.length; i++){
		board[i].classList.add("square");
	} 
}