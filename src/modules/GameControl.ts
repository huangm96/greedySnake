import Food from "./Food"
import Snake from "./Snake"
import ScorePanel from "./ScorePanel";

class GameControl{
    food: Food
    snake: Snake
    scorePanel: ScorePanel
    direction = "d"
    isLive=true

    btnw = document.getElementById("btn-w") !
    btns = document.getElementById("btn-s") !
    btna = document.getElementById("btn-a") !
    btnd = document.getElementById("btn-d") !
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.init()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.btnw.addEventListener("click", this.clickHandler.bind(this))
        this.btns.addEventListener("click", this.clickHandler.bind(this))
        this.btna.addEventListener("click", this.clickHandler.bind(this))
        this.btnd.addEventListener("click", this.clickHandler.bind(this))
        // this.btnw.addEventListener("touchstart", this.touchHandler.bind(this))
        // this.btns.addEventListener("touchstart", this.touchHandler.bind(this))
        // this.btna.addEventListener("touchstart", this.touchHandler.bind(this))
        // this.btnd.addEventListener("touchstart", this.touchHandler.bind(this))
        this.food.change()
        this.run()
    }
    keydownHandler(event: KeyboardEvent) {
        if (event.key === "w" && this.direction === "s") {
            return
        }else if (event.key === "s" && this.direction === "w") {
            return
        }
        else if (event.key === "a" && this.direction === "d") {
            return
        }
        else if (event.key === "d" && this.direction === "a") {
            return
        }
        this.direction = event.key
        
        
    }
    // touchHandler(event: TouchEvent) {
    //     console.log((event.currentTarget as HTMLElement).id)
    //     const id = ((event.currentTarget as HTMLElement).id).at(-1) as string
    //     if (id === "w" && this.direction === "s") {
    //         return
    //     }else if (id === "s" && this.direction === "w") {
    //         return
    //     }
    //     else if (id === "a" && this.direction === "d") {
    //         return
    //     }
    //     else if (id === "d" && this.direction === "a") {
    //         return
    //     }
    //        this.direction = id
    // }
    clickHandler(event: MouseEvent) {
        const id = ((event.currentTarget as HTMLElement).id).at(-1) as string
        if (id === "w" && this.direction === "s") {
            return
        }else if (id === "s" && this.direction === "w") {
            return
        }
        else if (id === "a" && this.direction === "d") {
            return
        }
        else if (id === "d" && this.direction === "a") {
            return
        }
           this.direction = id
    }
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "w":
                Y -= 10
                break
            case "s":
                Y += 10
                break
            case "a":
                X -= 10
                 break
            case "d":
                X += 10
                 break
                
        }
        this.checkAteFood()
        try {
          this.snake.move(X,Y)  
        } catch (err:unknown) {
            alert((err as Error).message)
            this.isLive = false
        }
        
       this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level*28))
    }
    checkAteFood() {
        if (this.food.X === this.snake.X && this.food.Y === this.snake.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl