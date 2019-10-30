import { Order } from "./entities/Order";

export class Store {
    state: Order;
    constructor(initialState: Order) {
        this.state = initialState;
    }
}