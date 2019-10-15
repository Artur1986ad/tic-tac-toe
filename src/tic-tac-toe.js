class TicTacToe {
    constructor() {
      this.Player = "x";
      this.playersField =   [[null,null,null],
                            [null,null,null],
                            [null,null,null]];
    }

    getCurrentPlayerSymbol() {
       return this.Player;
    }

    nextTurn(rowIndex, columnIndex) {
       if(this.playersField[rowIndex][columnIndex]==null)
       {
           this.playersField[rowIndex][columnIndex] =this.Player;
           if(this.Player == "x")
           {
               this.Player ="o";
           }
           else {
               this.Player = "x";
           }
       }
       return null;
    }

    isFinished() {
             if(this.isDraw() || this.getWinner())
    {
        return true;
    }
    return false;
    }

    getWinner() {
         if((this.playersField[0][0] == "x" && this.playersField[0][1] == "x" && this.playersField[0][2] == "x") ||
         (this.playersField[1][0] == "x" && this.playersField[1][1] == "x" && this.playersField[1][2] == "x") ||
         (this.playersField[2][0] == "x" && this.playersField[2][1] == "x" && this.playersField[2][2] == "x") ||
         (this.playersField[0][0] == "x" && this.playersField[1][0] == "x" && this.playersField[2][0] == "x") ||
         (this.playersField[0][1] == "x" && this.playersField[1][1] == "x" && this.playersField[2][1] == "x") ||
         (this.playersField[0][2] == "x" && this.playersField[1][2] == "x" && this.playersField[2][2] == "x") ||
         (this.playersField[0][0] == "x" && this.playersField[1][1] == "x" && this.playersField[2][2] == "x") ||
         (this.playersField[2][0] == "x" && this.playersField[1][1] == "x" && this.playersField[0][2] == "x")) {
             return "x";
         }
         if((this.playersField[0][0] == "o" && this.playersField[0][1] == "o" && this.playersField[0][2] == "o") ||
         (this.playersField[1][0] == "o" && this.playersField[1][1] == "o" && this.playersField[1][2] == "o") ||
         (this.playersField[2][0] == "o" && this.playersField[2][1] == "o" && this.playersField[2][2] == "o") ||
         (this.playersField[0][0] == "o" && this.playersField[1][0] == "o" && this.playersField[2][0] == "o") ||
         (this.playersField[0][1] == "o" && this.playersField[1][1] == "o" && this.playersField[2][1] == "o") ||
         (this.playersField[0][2] == "o" && this.playersField[1][2] == "o" && this.playersField[2][2] == "o") ||
         (this.playersField[0][0] == "o" && this.playersField[1][1] == "o" && this.playersField[2][2] == "o") ||
         (this.playersField[2][0] == "o" && this.playersField[1][1] == "o" && this.playersField[0][2] == "o") ){
             return "o";
         }
         return null;
    }

    noMoreTurns() {
        for(let i = 0 ; i < 3 ; i++)
        {
            for(let j = 0 ; j <3 ; j++)
            {
                if(this.playersField[i][j] == null){
                return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner() == null && this.noMoreTurns())
        {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
return this.playersField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

