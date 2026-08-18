type ItensType = {name: string, price: number}
type OrderStatusType = 'open' | 'closed'

export class ShoppingCartLegacy {
    private readonly _itens: ItensType[] = []
    private _orderStatus: OrderStatusType = 'open'

    addItem(item: ItensType):void {
        this._itens.push(item)
    }

    removeItem(index: number):void {
        this._itens.splice(index, 1)
    }

    total():number {
        return +this.itens.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    isEmpty(): boolean {
        return this._itens.length === 0
    }

    sendMessage(msg: string): void {
        console.log('Mensagem enviada:', msg)
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso!')
    }

    clear(): void {
        console.log('Carrinho limpo para próxima compra.')
        this._itens.length = 0
    }

    checkout(): void {
        if(this.isEmpty()) {
            console.log('Seu carrinho está vazio')
            return
        }

        this._orderStatus = 'closed'
        this.sendMessage(`Seu pedido de R$${this.total()} foi recebido.`)
        this.saveOrder()
        this.clear()
    }

    get itens(): Readonly<ItensType[]>{
        return this._itens
    }

    get orderStatus(): OrderStatusType {
        return this._orderStatus
    }
}

const shoppingCart = new ShoppingCartLegacy
shoppingCart.addItem({name: 'Blusa', price: 59.9})
shoppingCart.addItem({name: 'Boné', price: 19.9})
shoppingCart.addItem({name: 'Refrigerante', price: 12})
shoppingCart.addItem({name: 'Pneu', price: 400})

console.log(shoppingCart.itens)
console.log(shoppingCart.total())
console.log(shoppingCart.orderStatus)
shoppingCart.checkout()
console.log(shoppingCart.orderStatus)