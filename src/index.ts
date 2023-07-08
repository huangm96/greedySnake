import "./style.scss";
import Food from "./modules/Food"
import Snake from "./modules/Snake"

const food = new Food();
food.change()
console.log(food.X, food.Y)

const s = new Snake();
s.addBody()
s.addBody()