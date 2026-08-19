// Open closed principle
// entidades devem estar abertas para extensão mas não para alteração

import { Messaging } from "./services/messaging"
import { Order } from "./classes/order"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { HalfDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount"

//const halfDiscount = new HalfDiscount()
//const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
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