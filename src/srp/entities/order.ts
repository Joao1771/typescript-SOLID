import { OrderStatusType } from "./interfaces/order-status"
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";

export class Order {
    private _orderStatus: OrderStatusType = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging:Messaging,
        private readonly persistency: Persistency
        ) {}

    checkout(): void {
        if(this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio')
            return
        }

        this._orderStatus = 'closed'
        this.messaging.sendMessage(`Seu pedido de R$${this.cart.total()} foi recebido.`)
        this.persistency.saveOrder()
        this.cart.clear()
    }
    

    get orderStatus(): OrderStatusType {
        return this._orderStatus
    }
}