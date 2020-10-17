class Display {
    constructor(canvas, messageSpan) {
        this.canvas = canvas;
        this.message = messageSpan;
        this.context = canvas.getContext("2d");
    }

    resize(){

    }

    tile_length = 20;

    drawSnake(snake) {
        this.context.fillStyle = snake.color
        snake.trail.forEach(pos => {
            this.context.fillRect(pos.x * tile_length, pos.y * tile_length, tile_length - 2, tile_length - 2)
        })
    }

    drawBackground() {
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawApple(apple_pos) {
        this.context.fillStyle = "red"
        this.context.fillRect(apple_pos.x * tile_length, apple_pos.y * tile_length, tile_length, tile_length)
    }
}