import { Order } from "src/app/structural/composite/real-world/Order";
import { Product } from "src/app/structural/composite/real-world/Product";
import { Customer } from "src/app/structural/composite/real-world/Customer";

export class OrderAgent {
    getOrder(): Promise<Order> {
        return new Promise((resolve) => {
            const productList = [new Product('one product'), new Product('another product')];
            const customer = new Customer('a customer');
            const order = new Order(productList, customer)
            resolve(order);
        });
    }
}
