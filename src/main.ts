import Item from "./Item";
import Rule, {Deal} from "./Rule";
import Checkout from "./Checkout";

const smallPizza = new Item("Small Pizza", 269.99, "10'' pizza for one person");
const mediumPizza = new Item(
    "Medium Pizza",
    322.99,
    "12'' pizza for one person"
);
const largePizza = new Item("Large Pizza", 394.99, "15'' pizza for one person");

const infosysRules: Array<Rule> = [];
infosysRules.push(new Rule(smallPizza.name, "DEAL", undefined, new Deal(3, 2)));

const amazonRules: Array<Rule> = [];
amazonRules.push(new Rule(largePizza.name, "DISCOUNT", 299.99, undefined));

const facebookRules: Array<Rule> = [];
facebookRules.push(new Rule(mediumPizza.name, "DEAL", undefined, new Deal(5, 4)));
facebookRules.push(new Rule(largePizza.name, "DISCOUNT", 389.99, undefined));

const defaultCheckout = new Checkout([]);
defaultCheckout.add(smallPizza);
defaultCheckout.add(mediumPizza);
defaultCheckout.add(largePizza);

console.log("default checkout: ", defaultCheckout.total());

const infosysCheckout = new Checkout(infosysRules);
infosysCheckout.add(smallPizza);
infosysCheckout.add(smallPizza);
infosysCheckout.add(smallPizza);
infosysCheckout.add(largePizza);

console.log("infosys checkout: ", infosysCheckout.total());

const amazonCheckout = new Checkout(amazonRules);
amazonCheckout.add(mediumPizza);
amazonCheckout.add(mediumPizza);
amazonCheckout.add(mediumPizza);
amazonCheckout.add(largePizza);

console.log("amazon checkout: ", amazonCheckout.total());
