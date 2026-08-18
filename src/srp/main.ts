import { Messaging } from "./services/messaging"
import { Order } from "./entities/order"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { ShoppingCart } from "./entities/shopping-cart"

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Blusa', 59.9))
shoppingCart.addItem(new Product('Boné', 19.9))
shoppingCart.addItem(new Product('Refrigerante', 12))
shoppingCart.addItem(new Product('Pneu', 400))

console.log(shoppingCart.itens)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)