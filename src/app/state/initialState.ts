import { Store } from "./store";
import { Order } from "./entities/Order";
import { Product } from "./entities/Product";
import { Customer } from "./entities/Customer";

const initialState = new Order(
    '1',
    [
        new Product('one product'),
        new Product('another product')
    ],
    new Customer('a customer')
);
const store = new Store(initialState);
export default store;