class Engine{
    constructor(rate, render, update){
        this.rate = rate;
        this.rend = render;
        this.update = update;        


        this.run = function(){
            render()
            update()
        }
        
    }

    start(){
        setInterval(this.run, this.rate);
    }

 
}