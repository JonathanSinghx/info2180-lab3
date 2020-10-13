window.onload = function(){
	var board = document.getElementById("board").children;
	var tracker = 0;
	var checkWin = ["","","","","","","","",""];
	var full=0;
	for (let i= 0; i<board.length; i++){
		board[i].classList.add("square");
		board[i].addEventListener("click",function(){
			if (tracker%2==0){
				board[i].innerHTML="X";
				board[i].classList.add("X");
				checkWin[i]="X";
				checkforwin(tracker);
			}else{
				board[i].innerHTML="O";
				board[i].classList.add("O");
				checkWin[i]="O";
				checkforwin(tracker);
			}
			full++;
			tracker++;
		});
		board[i].onmouseenter= function(){
			board[i].classList.add("hover");
		}
		board[i].onmouseleave=function(){
			board[i].classList.remove("hover");
		}	
	}
	function checkforwin(tracker){
		var status= document.getElementById("status");
		if (checkWin[0]=="X" && checkWin[1]=="X" && checkWin[2]=="X" || 
			checkWin[0]=="O" && checkWin[1]=="O" && checkWin[2]=="O" ||
			checkWin[3]=="X" && checkWin[4]=="X" && checkWin[5]=="X" || 
			checkWin[3]=="O" && checkWin[4]=="O" && checkWin[5]=="O" ||
			checkWin[6]=="X" && checkWin[7]=="X" && checkWin[8]=="X" || 
			checkWin[6]=="O" && checkWin[7]=="O" && checkWin[8]=="O" ||
			checkWin[0]=="X" && checkWin[3]=="X" && checkWin[6]=="X" || 
			checkWin[0]=="O" && checkWin[3]=="O" && checkWin[6]=="O" ||
			checkWin[1]=="X" && checkWin[4]=="X" && checkWin[7]=="X" || 
			checkWin[1]=="O" && checkWin[4]=="O" && checkWin[7]=="O" ||
			checkWin[2]=="X" && checkWin[5]=="X" && checkWin[8]=="X" || 
			checkWin[2]=="O" && checkWin[5]=="O" && checkWin[8]=="O" ||
			checkWin[0]=="X" && checkWin[4]=="X" && checkWin[8]=="X" || 
			checkWin[0]=="O" && checkWin[4]=="O" && checkWin[8]=="O" ||
			checkWin[2]=="X" && checkWin[4]=="X" && checkWin[6]=="X" || 
			checkWin[2]=="O" && checkWin[4]=="O" && checkWin[6]=="O"
			){

			if (tracker%2==0){
				status.classList.add("you-won");
				status.innerHTML="Congratulations! X is the Winner!";
			}else{
				status.classList.add("you-won");
				status.innerHTML="Congratulations! O is the Winner!";
			}
		}
		else if(full==8){

			status.innerHTML="Draw";
		}

	}

	
}