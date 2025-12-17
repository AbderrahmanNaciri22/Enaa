  let win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
  
 var histo = [];

 function FilterWinner(Player){
       let resultat = histo.filter(histo=>histo.player === Player);
      console.table(resultat)
      for(i=0;i<resultat.length;i++){
           console.log(resultat[i].squareid);
           for(j=0;j<win.length;j++){
                  for(g=0;g<win[j].length;g++){
                        console.log
                   }
           }
      }
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
             console.table(histo);
             FilterWinner(PlayerX);
       }else{
            let square = document.getElementById(squareid);
            square.innerHTML = PlayerO;
            square.disabled= true;
             histo.push({
                squareid:squareid,
                player : PlayerO,
             })
             console.table(histo);
             FilterWinner(PlayerO);
       }
       
      
      

        // document.getElementById(squareid).innerHTML = PlayerX;

        
   }