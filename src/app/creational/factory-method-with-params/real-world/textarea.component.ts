import { Component, Input } from "@angular/core";
import { IComponent } from "./IComponent";

@Component({ selector: 'fm-textarea-component', templateUrl: './textarea.component.html' })
export class FactoryMethodTextAreaComponent implements IComponent {
    @Input() data: Array<any>;
}
