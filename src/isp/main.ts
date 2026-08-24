/* Interface Segregation Principle (Principio da Segregacao da Interface)
os clientes nao devem ser forcados a depender de interfaces que nao utilizam

Protocolos (interfaces, types e classes abstratas) não devem ter coisas não utilizadas
*/
import { Messaging } from "./services/messaging"
import { Order } from "./classes/order"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { HalfDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount"
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer"

//const halfDiscount = new HalfDiscount()
//const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer('Joao', 'Flavio', '111.111.111-11')
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '222222222-11')
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer)

shoppingCart.addItem(new Product('Blusa', 59.9))
shoppingCart.addItem(new Product('Boné', 19.9))
shoppingCart.addItem(new Product('Refrigerante', 12))
shoppingCart.addItem(new Product('Pneu', 400))

console.log(shoppingCart.itens)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)