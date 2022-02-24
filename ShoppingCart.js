import {ITEMS} from './Inventory';

export default class ShoppingCart{
    constructor(){
        this.cart = new Map();
        this.total = 0;
    }

    addItem(barcode){
        const item = ITEMS.find(item => item.barcode === barcode);
        const existed = this.cart.get(barcode);
        item.count = existed ? existed.count + 1 : 1;
        this.cart.set(barcode,item)
     }

    removeItem(barcode){
        const existed = this.cart.get(barcode);
        existed.count = existed.count - 1;  
       
        existed.count > 0 ? this.cart.set(barcode, existed) : this.cart.delete(barcode);
    }

    generateBill(){
        let billText = '';
        this.cart.forEach(function(value, key) {
            billText = billText + `${value.count} X ${value.itemName} @${value.price} = ${value.count*value.price} \n`
          })

          const totalItems = Array.from(this.cart.values());
          const total = totalItems.reduce((prev, current) => {
            return prev + current.price * current.count;
        },0);

        billText = billText + `Total = ${total}`;

        return billText;
    }
}