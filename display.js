class Display {
    constructor(canvas, messageSpan) {
        this.canvas = canvas;
        this.message = messageSpan;
        this.context = canvas.getContext("2d");
    }

    resize() {

    }

    tile_length = 20;

    drawSnake(snake) {
        this.context.fillStyle = snake.color
        snake.trail.forEach(pos => {
            this.context.fillRect(pos.x * tile_length, pos.y * tile_length, tile_length - 2, tile_length - 2)
        });

    }

    drawSnakes(snake_one, snake_two){
        this.drawSnake(snake_one);
        this.drawSnake(snake_two);

        this.context.fillStyle = "pink"
        snake_one.trail.forEach(pos_one => {
            snake_two.trail.forEach(pos_two => {
                if(pos_one.x == pos_two.x && pos_one.y == pos_two.y){
                    this.context.fillRect(pos_one.x * tile_length, pos_onea.y * tile_length, tile_length + 2, tile_length + 2)
                }
            }); 
        });
    }

    drawBackground() {
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawApple(apple_pos) {
        this.context.fillStyle = "red"
        this.context.fillRect(apple_pos.x * tile_length, apple_pos.y * tile_length, tile_length, tile_length)
    }

    drawScore(score_1, score_2) {
        this.message.innerHTML = "Player 1: " + score_1
            + " ----------- Player 2: " + score_2;
    }


    setMessage(message) {
        messageSpan.innerHTML = message
    }
}