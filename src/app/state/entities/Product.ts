import { Validatable } from "./Validatable";

export class Product implements Validatable {
    constructor(public name: string) { }

    validate(): Array<string> {
        const errors = [''];
        if (!this.name) {
            errors.push('name is mandatory');
        }
        return errors;
    }
}
