class Snake{
    snake:HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.snake = document.getElementById('snake')!
        this.head = document.querySelector("#snake>div")!
        this.bodies = document.getElementById("snake")!.getElementsByTagName('div')
        
    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value:number) {
        this.head.style.left = value +'px'
    }
    set Y(value:number) {
        this.head.style.top = value +'px'
    }
    addBody() {
        const div = document.createElement('div')
        this.snake.appendChild(div)
    }
}


export default Snake