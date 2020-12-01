export  type  RuleType = "DISCOUNT" | "DEAL";

export class Deal {
    qty: number;
    chargeableQty: number;

    constructor(qty: number, chargeableQty: number) {
        this.qty = qty;
        this.chargeableQty = chargeableQty;
    }
}

export default class Rule {
    public itemName: string;
    public discountPrice?: number;
    public deal?: Deal;
    public type: RuleType;

    constructor(itemName: string, type: RuleType, discountPrice?: number, deal?: Deal) {
        this.itemName = itemName;
        this.type = type;
        this.discountPrice = discountPrice;
        this.deal = deal;
    }
}
