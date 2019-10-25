import { ComponentModes } from "./component-modes";
import { FactoryMethodTextComponent } from "./text.component";
import { FactoryMethodTextAreaComponent } from "./textarea.component";
import { FactoryMethodSelectComponent } from "./select.component";

export class ComponentFactory {
    static getComponentByMode(mode: ComponentModes) {
        const dictionary = {
            [ComponentModes.Text]: FactoryMethodTextComponent,
            [ComponentModes.TextArea]: FactoryMethodTextAreaComponent,
            [ComponentModes.Select]: FactoryMethodSelectComponent
        };
        return dictionary[mode];
    }
}
