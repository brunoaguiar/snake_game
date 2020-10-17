class Controller {
    constructor(game) {
        this.game = game;        
    }

    handleKey(evt) {
        console.log(this.game)
        switch (evt.keyCode) {
            case 37://left arrow
                this.game.snake_one.goLeft()
                break;
            case 38://up arrow
                this.game.snake_one.goUp()
                break;
            case 39://right arrow
                this.game.snake_one.goRight()
                break;
            case 40://down arrow
                this.game.snake_one.goDown()
                break;
            case 87://w
                this.game.snake_two.goUp()
                break;
            case 65://a
                this.game.snake_two.goLeft()
                break;
            case 83://s
                this.game.snake_two.goDown()
                break;
            case 68://d
                this.game.snake_two.goRight()
                break;

        }
    }
}