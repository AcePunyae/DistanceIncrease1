var canvas, player, playercount, game, form,  database, backgroundimg;
var gamestate=0
var allplayers


function setup(){


    canvas=createCanvas(400,400);
    database=firebase.database();

game=new Game();
game.getstate();
game.start();




}

function draw(){
    if(playercount===2){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }


}