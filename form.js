class Form{
    constructor(){
     
this.button= createButton("play")
this.input=  createInput("name")
this.greeting= createElement('h4')

    }
    display(){
       var title=createElement('h3')
        title.html("CAR RACING GAME")
        title.position(130,5)
    
       
        this.input.position(200,200)
       this.button.position(100,200)
       
   
       this.button.mousePressed(()=>{
         
            this.input.hide();

          this.button.hide();


        player.playername=this.input.value();
       console.log(player.playername);
        playercount=playercount+1
        player.playerindex=playercount

        player.updateplayerinfo()
        player.updatecount(playercount)
         this.greeting.html("Hello "+player.playername)
         this.greeting.position(130,160);
        
        })
      }
   hideform(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
     
   }
    
}




    

