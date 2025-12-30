  let win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
 var histo = [];
    function recommancer(){
            const squares = document.querySelectorAll(".square");
            squares.forEach(square => {
                square.innerHTML = "";
                square.disabled = false;
            });
            histo.length = 0;
            let winner = document.getElementById("winner");
            winner.innerHTML = "";
    }
            function FilterWinner(Player) {
            const playerMoves = histo.filter(function (h) { return h.player === Player;}).map(function (h) {  return h.squareid; });
             for (let j = 0; j < win.length; j++) {
                let isWinner = true;

                for (let i = 0; i < win[j].length; i++) {
                    if (!playerMoves.includes(String(win[j][i]))) {
                        isWinner = false;
                        break;
                    }
                }
                if (isWinner) {
                    let winner = document.getElementById("winner");
                    winner.innerHTML = "Winner is " + Player;
                    const squares = document.querySelectorAll(".square");
                    squares.forEach(function (square) {
                        square.disabled = true;
                    });
                    return 1;
                }
            }
            if(histo.length === 9){
            let winner = document.getElementById("winner");
            winner.innerHTML = "No winner";
            }

            return 0;
        }

  function XODisplay(squareid){
        PlayerX = "X";
        PlayerO = "O";
       if(histo.length%2===0 ){
            let square = document.getElementById(squareid);
            square.innerHTML = PlayerX;
            square.disabled = true;
             histo.push({
                squareid:squareid,
                player : PlayerX,
             })
             FilterWinner(PlayerX);
       }else{
            let square = document.getElementById(squareid);
            square.innerHTML = PlayerO;
            square.disabled= true;
             histo.push({
                squareid:squareid,
                player : PlayerO,
             })
             FilterWinner(PlayerO);
       } 
   }