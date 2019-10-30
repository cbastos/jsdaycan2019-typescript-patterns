import { Store } from "./store";
import { Injectable } from "@angular/core";
import { Order } from "./entities/Order";

@Injectable()
export class ConnectorService {
    private currentState: Order;
    private observers = [];

    constructor(private store: Store) {
        this.currentState = this.store.state;
    }

    registerObserver(component) {
        this.observers.push(component);
        this.notifyObserver(component);
    }

    updateState(newState: Order) {
        if (this.isStateChanged(newState)) {
            this.currentState = newState;
            this.notifyObservers();
        }
    }

    private notifyObservers() {
        this.observers.forEach(o => this.notifyObserver(o));
    }

    private notifyObserver(observer) {
        observer.order = this.currentState;
    }

    private isStateChanged(newState: Order): boolean {
        return this.currentState.id !== newState.id;
    }
}
