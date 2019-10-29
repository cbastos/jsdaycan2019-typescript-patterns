import { Order } from "./Order";
import { Product } from "./Product";
import { Customer } from "./Customer";

export class Client {
    validateEntity(): void {
        const productList = [new Product('one product'), new Product('another product')];
        const customer = new Customer('a customer');
        const errors = new Order(productList, customer).validate();
        console.log(errors);
    }
}
