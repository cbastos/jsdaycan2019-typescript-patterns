import { Validatable } from "./Validatable";
import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order implements Validatable {
    constructor(private productList: Array<Product>, private customer: Customer) { }

    validate(): Array<string> {
        let errors = [''];
        this.productList.forEach(p => errors = errors.concat(p.validate()));
        errors = errors.concat(this.customer.validate());
        return errors;
    }
}
