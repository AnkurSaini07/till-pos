import Rule from "./Rule";
import Item from "./Item";

export default class Checkout {
    private rules: { [key: string]: Rule } = {};
    private kart: { [key: string]: { item: Item, qty: number } } = {}

    constructor(rules: Array<Rule>) {
        rules.forEach(rule => {
            this.rules[rule.itemName] = rule;
        });
    }

    add(item: Item) {
        if (!this.kart[item.name]) {
            this.kart[item.name] = {item, qty: 0};
        }
        this.kart[item.name].qty++;
    }

    total(): string {
        let total = 0;
        Object.values(this.kart).forEach(kartItem => {
            const rule = this.rules[kartItem.item.name];
            if (rule) {
                if (rule.type === "DISCOUNT") {
                    total = +total + rule.discountPrice! * kartItem.qty;
                } else if (rule.type === "DEAL") {
                    const dealCount = Math.floor(kartItem.qty / rule.deal!.qty) * rule.deal!.chargeableQty;
                    const extra = kartItem.qty % rule.deal!.qty;
                    total += kartItem.item.price * (dealCount + extra);
                }
            } else {
                total += kartItem.item.price * kartItem.qty;
            }
        });
        return `${total}`;
    }
}
