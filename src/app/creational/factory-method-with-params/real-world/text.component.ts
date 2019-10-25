import { Component, Input } from "@angular/core";
import { IComponent } from "./IComponent";

@Component({ selector: 'fm-text-component', templateUrl: './text.component.html' })
export class FactoryMethodTextComponent implements IComponent {
    @Input() data: Array<any>;
}
