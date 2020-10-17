class Snake {
    constructor(color, x_pos, y_pos) {
        this.color = color;
        this.position = {
            x: x_pos,
            y: y_pos
        }
        this.velocity = {
            x: 1,
            y: 0
        }
        this.trail = [];
        this.size = 1;
    }

    updatePosition(num_tiles, apple_pos, other_snake) {
        var result = "nothing";

        //update snake position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;        
        if (this.position.x < 0) {
            this.position.x = num_tiles - 1;
        }
        if (this.position.y < 0) {
            this.position.y = num_tiles - 1;
        }
        if (this.position.y > num_tiles - 1) {
            this.position.y = 0;
        }
        if (this.position.x > num_tiles - 1) {
            this.position.x = 0;
        }
        
        //check if bit itself
        this.trail.forEach(pos => {
            //check if lost
            if (this.position.x == pos.x
                && this.position.y == pos.y) {                    
                result = "lost";
            }            
        });

        //check if ate apple
        if (this.position.x == apple_pos.x
            && this.position.y == apple_pos.y) {
            this.size++;            
            result = "apple";
        }
        
        //check if bit other snake
        other_snake.trail.forEach(pos => {
            //check if lost
            if (this.position.x == pos.x
                && this.position.y == pos.y) {       

                this.size++;
                other_snake.size--;
            }            
        });

        //save position history
        this.trail.push(Object.assign({}, this.position));
        while (this.trail.length > this.size) {
            this.trail.shift();
        }

        return result;
    }

    goLeft() {
        this.velocity.x = -1;
        this.velocity.y = 0;
    }
    goRight() {
        this.velocity.x = 1;
        this.velocity.y = 0;
    }
    goUp() {
        this.velocity.x = 0;
        this.velocity.y = -1;
    }
    goDown() {
        this.velocity.x = 0;
        this.velocity.y = 1;
    }
}

