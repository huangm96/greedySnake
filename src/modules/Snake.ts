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
    set X(value: number) {
        if (value === this.X) {
            return
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHitBody()
    }
    set Y(value: number) {
        if (value === this.Y) {
            return
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHitBody()
    }
    move(X: number, Y: number) {
        if (X < 0 || X > 190) {
            throw new Error("Hit wall!")
        }
        if (Y < 0 || Y > 290) {
            throw new Error("Hit wall!")
        }
        
        
        this.X = X
        this.Y = Y
        
    }
    addBody() {
        const div = document.createElement('div')
        this.snake.appendChild(div)
    }
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--){
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
        }
    }
    checkHitBody() {
        for (let i = 1; i < this.bodies.length; i++){
            if (this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop) {
                throw new Error("Hit body!")
            }
        }
    }
}


export default Snake