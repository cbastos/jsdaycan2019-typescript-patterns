import { Order } from "../../../state/entities/Order";
import { Product } from "../../../state/entities/Product";
import { Customer } from "../../../state/entities/Customer";

export class Client {
    validateEntity(): void {
        const productList = [new Product('one product'), new Product('another product')];
        const customer = new Customer('a customer');
        const errors = new Order('2', productList, customer).validate();
        console.log(errors);
    }
}
