import { Product } from "./entities/Product";
import { Order } from "./entities/Order";

export function addNewProduct(currentState: Order) {
    const newState = Object.assign({},
        currentState,
        {
            id: (parseInt(currentState.id) + 1).toString(),
            productList: [
                ...currentState.productList,
                new Product('new product')
            ]
        });
    return newState;
}