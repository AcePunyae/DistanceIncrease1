class Game {
    constructor(){}
    
    getstate(){
        var dbgamestate=database.ref('gamestate')
        dbgamestate.on("value", function(data){
            gamestate=data.val();
           // console.log(gamestate);
        })
    }
    update(state){
             database.ref('/').update({
                gamestate:state
                
}      )
}
async start(){
   // console.log("Checkpoint1");
    if(gamestate===0){
        player=new Player();
        var dbplayercount=await database.ref('playercount').once("value")
        if(dbplayercount.exists()){
            playercount=dbplayercount.val();
            player.playercount
        }
        player.getcount();
        form= new Form();
        form.display();
       // console.log("Checpoint2");
    }
}
    play(){
form.hideform();
text("Game Start",120,120);
Player.getallplayerinfo();
if(allplayers!==undefined){
var position_y=130
for(var i in allplayers){
    position_y=position_y+20;
    text(allplayers[i].name+":"+allplayers[i].distance,120,position_y);
}

}
if(keyIsDown(UP_ARROW)&& player.index!==null){
    
    player.playerdistance=player.playerdistance+50
    console.log(player.playerdistance);
    player.updateplayerinfo();
}



    }
}

