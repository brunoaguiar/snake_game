
window.onload = () => {

    var render = function () {
        display.drawBackground();
        display.drawSnakes(game.snake_one, game.snake_two);        
        display.drawApple(game.apple_pos);
        display.drawScore(game.snake_one.size, game.snake_two.size);
    }
    
    var update = function () {           
        game.update();
    }


    canvas = document.getElementById("game_canvas");
    messageSpan = document.getElementById("score");    
    
    var num_tiles = 20;
        
    var display = new Display(canvas, messageSpan);
    var game = new Game(num_tiles);
    var controller = new Controller(game);
    var engine = new Engine(1000/15, render, update)
    
    

    
    document.addEventListener("keydown", (evt) => {
        controller.handleKey(evt)
    });
    window.addEventListener("resize",  display.handleResize);


    tile_length = canvas.width / num_tiles;    

    display.resize();
    engine.start();


}


