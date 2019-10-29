import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/structural/composite/real-world/Order";
import { OrderAgent } from "./orderAgent";

@Component({
    selector: 'mvvm',
    templateUrl: './real-world.component.html'
})
export class MvvmRealWorldComponent implements OnInit {
    private model: Order;
    private orderAgent: OrderAgent;
    public productNames: Array<string> = [];

    constructor() {
        this.orderAgent = new OrderAgent();
    }

    async ngOnInit() {
        this.model = await this.getModel();
        this.buildFormattedOrderList();
    }

    private async getModel(): Promise<Order> {
        const model = await this.orderAgent.getOrder();
        return model;
    }

    private buildFormattedOrderList(): void {
        this.productNames = this.model.productList.map(p => p.name);
    }

    addNewProductName() {
        this.productNames.push('new product');
        // Possible call to the Agent to store the new product name.
    }
}
