game.module(
    'game.main'
)
.require(
    'game.assets',
    'game.objects'
)
.body(function() {
    game.createScene('Main', {
    turn: 'x',
    squareSize: 0,
    startpoint: 0,
    lineLength: 0,
    mousePostion: {'x':null,'y':null},
    lastMiniGame:0,
    gameData: {
        "nextMove": 9,
        "creator": 'christoffee',
        "guest": "Silly Moose",
        "miniGames": [
            {
                "game": 1,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 2,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 3,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 4,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 5,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 6,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 7,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 8,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
            },
            {
                "game": 9,
                "winner": 'tbc',
                "data": [
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false},
                    {"O": false,"X": false}
                ]
                
            }
        ]
    },
    init: function() {
        game.system.stage.setBackgroundColor(0x429867);
        
        this.startPoint = (game.system.width - game.system.height)+10;
        this.squareSize = ((game.system.height - 5)/9)-5;
        this.lineLength = game.system.height - 10;
        var grap = new game.Graphics();
        grap.beginFill(0x5C323E);
        grap.drawRect(0, 0, (game.system.height - 20), (game.system.height - 20));
        grap.position.set((game.system.width) - (game.system.height - 20)-10, 10);
        grap.addTo(this.stage);
        
        this.drawGrid();
        this.createTurnsText('Extreme', 35);
        this.createTurnsText('Naughts', 15);
        this.createTurnsText('& Crosses', 9.5);
    },
    addBigIcon:function (miniGameX, miniGameY, icon) {
        var startPoint = (game.system.width - game.system.height)+10;
        var squareSize = ((game.system.height - 20)/9)-20;
        
        if(icon === 'x'){
            var X = new game.Sprite('X.png');
            X.scale.x = 2.8;
            X.scale.y = 2.8;
            X.alpha = 0.5;
            X.position.set((startPoint + squareSize*miniGameX) + (miniGameX*20)+10, (squareSize*miniGameY)+(miniGameY*20)+20);
            this.stage.addChild(X);
        }else if(this.turn === 'o'){
            var O = new game.Sprite('O.png');
            O.scale.x = 2.8;
            O.scale.y = 2.8;
            O.alpha = 0.5;
            O.position.set((startPoint + squareSize*miniGameX) + (miniGameX*20)+10, (squareSize*miniGameY)+(miniGameY*20)+20);
            this.stage.addChild(O);
        }
    },
    createTurnsText: function (text, location) {
        this.TurnsText = new game.BitmapText(text, { font: 'ctsFONTnormal' });
        //this.TurnsText.position.set(game.system.width / 2, game.system.height / 2);
        this.TurnsText.position.x = (game.system.width / 60);
        this.TurnsText.position.y = game.system.height / location;
        
        this.TurnsText.scale.x = 0.7;
        this.TurnsText.scale.y = 0.7;

        this.stage.addChild(this.TurnsText);
    },
    drawGrid: function() {
       var button;
        for (var j = 0; j < this.gameData.miniGames.length; j++) {
            var miniStartY = Math.floor(j/3);
            var miniStartX = j%3;
            console.log(miniStartY);
            for (var i = 0; i < this.gameData.miniGames[j].data.length; i++) {
                //console.log(this.miniGames[i]);
                var y = Math.floor(i/3);
                var x = i%3;
                button = new game.Graphics();
                button.beginFill(0xE5F04C);
                button.drawRect(0, 0, this.squareSize, this.squareSize);
                button.position.set(((this.startPoint + (this.lineLength/3)*miniStartX) + this.squareSize*x) + (x*2), ((this.squareSize*y)+(2*y)+10) + (this.lineLength/3)*miniStartY);
                button.alpha = 0.3;
                button.interactive = true;
                button.buttonMode = true;
                
                button.indicate = function () {
                    this.alpha = 0.6;
                }
                this.gameData.miniGames[j].data[i].square = button;
                button.addTo(this.stage);
            }
        
        }
    },
    mousedown: function (event) {
        var miniGameNumber, squareNumber,miniGameX,miniGameY;
        squareNumber = this.mousePostion.x + (3* this.mousePostion.y);
        
        //top row
        if(this.between(this.mousePostion.y,0,2)){
            
                miniGameY = 0;
            if(this.between(this.mousePostion.x,0,2)){
                
                miniGameNumber = 0;
                miniGameX = 0;
            }
            if(this.between(this.mousePostion.x,3,5)){
                
                miniGameNumber = 1;
                miniGameX = 3;
            }
            if(this.between(this.mousePostion.x,6,8)){
                miniGameNumber = 2;
                miniGameX = 6;
            }
        }
        
        //middle row
        if(this.between(this.mousePostion.y,3,5)){
                miniGameY = 3;
            if(this.between(this.mousePostion.x,0,2)){
                miniGameNumber = 3;
                miniGameX = 0;
            }
            if(this.between(this.mousePostion.x,3,5)){
                miniGameNumber = 4;
                miniGameX = 3;
            }
            if(this.between(this.mousePostion.x,6,8)){
                miniGameNumber = 5;
                miniGameX = 6;
            }
        }
        
        //bottom row
        if(this.between(this.mousePostion.y,6,8)){
                miniGameY = 6;
            if(this.between(this.mousePostion.x,0,2)){
                miniGameNumber = 6;
                miniGameX = 0;
            }
            if(this.between(this.mousePostion.x,3,5)){
                miniGameNumber = 7;
                miniGameX = 3;
            }
            if(this.between(this.mousePostion.x,6,8)){
                miniGameNumber = 8;
                miniGameX = 6;
            }
        }
        
        squareNumber = (this.mousePostion.x + (3* this.mousePostion.y)) - (3 * miniGameNumber);
        
        //console.log('in miniGame ' + miniGameNumber +' and squareNUmber ' + squareNumber);
        if(this.validMove(miniGameNumber, squareNumber)){
            this.addMove(miniGameNumber, squareNumber);
            if(this.wonMinigame(miniGameNumber)){
                this.addBigIcon(miniGameY,miniGameX,this.turn);
            }
            this.gameData.nextMove = squareNumber;
            this.indicateSquares(squareNumber,miniGameNumber);
            //console.log('next game is minigame ' + this.gameData.nextMove);
            var nextTurn = (this.turn === "x") ? "o" : "x";
            this.turn = nextTurn;
        }
        this.lastMiniGame = miniGameNumber;
    },
    wonMinigame: function (miniGameNumber) {
       
        var squareCheck = this.gameData.miniGames[miniGameNumber].data,
            valueCheck = this.turn.toUpperCase();
            
        //Check vertical lines
        if(squareCheck[0][valueCheck] && squareCheck[3][valueCheck] && squareCheck[6][valueCheck]){
            return true;
        }
        if(squareCheck[1][valueCheck] && squareCheck[4][valueCheck] && squareCheck[7][valueCheck]){
            return true;
        }
        if(squareCheck[2][valueCheck] && squareCheck[5][valueCheck] && squareCheck[8][valueCheck]){
            return true;
        }
        
        //Check horizontal Lines
        if(squareCheck[0][valueCheck] && squareCheck[1][valueCheck] && squareCheck[2][valueCheck]){
            return true;
        }
        if(squareCheck[3][valueCheck] && squareCheck[4][valueCheck] && squareCheck[5][valueCheck]){
            return true;
        }
        if(squareCheck[6][valueCheck] && squareCheck[7][valueCheck] && squareCheck[8][valueCheck]){
            return true;
        }
        
        //Check Diagonal
        if(squareCheck[0][valueCheck] && squareCheck[4][valueCheck] && squareCheck[8][valueCheck]){
            return true;
        }
        if(squareCheck[2][valueCheck] && squareCheck[4][valueCheck] && squareCheck[6][valueCheck]){
            return true;
        }
        return false;
    },
    addMove:function (miniGame, square) {
        var startPoint = (game.system.width - game.system.height)+10;
        var squareSize = ((game.system.height - 20)/9)-20;
        
        if(this.turn === 'x'){
            var X = new game.Sprite('X.png');
            X.scale.x = 0.8;
            X.scale.y = 0.8;
            X.position.set((startPoint + squareSize*this.mousePostion.x) + (this.mousePostion.x*20)+10, (squareSize*this.mousePostion.y)+(this.mousePostion.y*20)+20);
            this.stage.addChild(X);
            this.gameData.miniGames[miniGame].data[square].X = true;
        }else if(this.turn === 'o'){
            var O = new game.Sprite('O.png');
            O.scale.x = 0.8;
            O.scale.y = 0.8;
            O.position.set((startPoint + squareSize*this.mousePostion.x) + (this.mousePostion.x*20)+10, (squareSize*this.mousePostion.y)+(this.mousePostion.y*20)+20);
            this.stage.addChild(O);
            this.gameData.miniGames[miniGame].data[square].O = true;
        }
    },
    between: function (x, min, max) {
      return x >= min && x <= max;
    },
    indicateSquares: function (squareNumber,lastSquareNumber) {
        
        //reset last go sqaure
        this.gameData.miniGames[this.lastMiniGame].data[lastSquareNumber].square.alpha = 0.3;
        
        //reset last minigame
        for (var i = 0; i < this.gameData.miniGames[lastSquareNumber].data.length; i++) {
            this.gameData.miniGames[lastSquareNumber].data[i].square.alpha = 0.3;
        }
        //indicate next minigame
        for (var i = 0; i < this.gameData.miniGames[squareNumber].data.length; i++) {
            this.gameData.miniGames[squareNumber].data[i].square.alpha = 0.6;
        }
        //indicate last go
        this.gameData.miniGames[lastSquareNumber].data[squareNumber].square.alpha = 0.6;
    },
    validMove: function (miniGameNumber, squareNumber) {
        var validMiniGame;
        if(miniGameNumber === this.gameData.nextMove || this.gameData.nextMove === 9){
            validMiniGame = true;
        }else{
            validMiniGame = false;
        }
        
        return !this.gameData.miniGames[miniGameNumber].data[squareNumber].X && !this.gameData.miniGames[miniGameNumber].data[squareNumber].O && validMiniGame;
    },
    mousemove: function (event) {
        var position;
        var startPoint = (game.system.width - game.system.height)+10;
        var squareSize = ((game.system.height - 20)/9);
        
        if(event.global.x > game.system.width - game.system.height){
            position = {'x':event.global.x - (game.system.width - game.system.height)-10,'y':(event.global.y - 10)};
            this.mousePostion.x = Math.floor(position.x / squareSize);
            this.mousePostion.y = Math.floor(position.y / squareSize); 
        }else{
            this.mousePostion.x = null;
            this.mousePostion.y = null;
        }
    },
    update: function () {
      
    }
});

});
