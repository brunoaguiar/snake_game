class Game {

    constructor(num_tiles) {
        this.num_tiles = num_tiles;
        this.reset();
    }

    update() {
        console.log("Updating game")
        
        var result_one =this.snake_one.updatePosition(this.num_tiles, this.apple_pos, this.snake_two);
        var result_two =this.snake_two.updatePosition(this.num_tiles, this.apple_pos, this.snake_one);        

        if (result_one === "lost") {
            alert("Player one lost. You score score was " + this.size)
            this.reset();
        } 
        if (result_two === "lost") {
            alert("Player two lost. You score score was " + this.size)
            this.reset();
        } 
        if (result_one === "apple" || result_two === "apple") {
            this.generateApplePosition();
        }
    }

   

    reset() {
        this.snake_one = new Snake("green", 10, 10);
        this.snake_two = new Snake("blue", 5, 10);
        this.generateApplePosition();
    }

    generateApplePosition() {
        this.apple_pos = {
            x: Math.floor(Math.random() * this.num_tiles),
            y: Math.floor(Math.random() * this.num_tiles)
        }

        console.log("Generated apple in: " + this.apple_pos.x + "-" + this.apple_pos.y)
    }
}