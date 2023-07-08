 class Food{
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("food")!
    }
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
     }
     set X(value:number) {
         this.element.style.left =value +"px"
     }
     set Y(value: number) {
         this.element.style.top =value +"px"
     }
     change() {
         let X = Math.floor(Math.random() * 19) * 10
         let Y = Math.floor(Math.random() * 29) * 10
         this.element.style.left = X + "px"
         this.element.style.top = Y +"px"
     }
}

export default Food