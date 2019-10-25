import { Component } from "@angular/core";
import { ComponentModes } from "./component-modes";

@Component({
    selector: 'factory-method-with-params',
    templateUrl: './real-world.component.html'
})
export class FactoryMethodRealWorldComponent {
    textMode = ComponentModes.Text;
    textAreaMode = ComponentModes.TextArea;
    selectMode = ComponentModes.Select;
    genericData = ['first item', 'second item'];
}