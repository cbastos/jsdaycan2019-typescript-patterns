import { Component, Input } from "@angular/core";
import { IComponent } from "./IComponent";

@Component({ selector: 'fm-select-component', templateUrl: './select.component.html' })
export class FactoryMethodSelectComponent implements IComponent {
    @Input() data: Array<any>;
}
