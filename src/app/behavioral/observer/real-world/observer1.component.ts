import { Component, Input } from "@angular/core";
import { Order } from "../../../state/entities/Order";
import { ConnectorService } from "../../../state/connector.service";
import { addNewProduct as addNewProductStateAction } from "../../../state/actions";

@Component({
    selector: 'observer1',
    templateUrl: './observer1.component.html'
})
export class Observer1Component {
    public productNames: Array<string> = [];
    private model: Order;

    @Input() set order(orderFromState: Order) {
        this.model = orderFromState;
        this.buildFormattedOrderList();
    }
    get order() { return this.model; }

    constructor(private connector: ConnectorService) {
        this.connector.registerObserver(this);
    }

    private buildFormattedOrderList(): void {
        this.productNames = this.model.productList.map(p => p.name);
    }

    addNewProduct() {
        this.connector.updateState(
            addNewProductStateAction(this.model)
        );
    }
}
