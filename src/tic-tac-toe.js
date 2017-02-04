class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
        this.playerX = 'x';
        this.playerO = 'o';
        this.currentPlayer = this.playerX;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;

    }

    nextTurn(rowIndex, columnIndex) {

        if(this.matrix[rowIndex][columnIndex] == null){        
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            if(this.currentPlayer == this.playerX){
                this.currentPlayer=this.playerO;
            }else {
                this.currentPlayer=this.playerX;
            }
        }
    }

    isFinished() {
        var fin =  this.getWinner();
        if(fin!=null){
            return true;
        }else{
            if(this.noMoreTurns()){
                return true;
            }
        }
        return false;
    }

    getWinner() {
        this.checkRows();
        this.checkColumns();
        this.checkLeftDiagonal();
        this.checkRightDiagonal();
        return this.winner;

    }

    noMoreTurns() {
        for(var row=0; row<3; row++){
            for(var column=0; column<3; column++){
                var element = this.matrix[row][column];
                if(element == null){
                    return false;
                }
            }
        }
        return true;        
    }

    isDraw() {
        if(this.noMoreTurns()==true){
            if(this.getWinner()!=null){
                return false;
            }
            return true;
        }else{
           
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }

    checkRows() {

        for (var row = 0; row < 3; row++) {
            var firstElement = this.matrix[row][0];
            var secondElement = this.matrix[row][1];
            var thirdElement = this.matrix[row][2];
            if(firstElement != null && firstElement == secondElement && secondElement == thirdElement){
                this.winner = firstElement;  
            }
        }
    }

    checkColumns(){
        for (var column = 0; column < 3; column++) {
            var firstElement = this.matrix[0][column];
            var secondElement = this.matrix[1][column];        
            var thirdElement = this.matrix[2][column];
            if(firstElement !=null && firstElement == secondElement && secondElement == thirdElement){
                this.winner = firstElement;
            }
        }
    }

    checkLeftDiagonal(){
        var firstElement = this.matrix[0][0];
        var secondElement = this.matrix[1][1];
        var thirdElement = this.matrix[2][2];
        if(firstElement != null && firstElement == secondElement && secondElement == thirdElement){
            this.winner = firstElement;
        }
    }
    checkRightDiagonal(){
        var firstElement = this.matrix[0][2];
        var secondElement = this.matrix[1][1];
        var thirdElement = this.matrix[2][0];
        if (firstElement != null && firstElement == secondElement && secondElement == thirdElement){
            this.winner = firstElement;
        }
    }   
}

module.exports = TicTacToe;
