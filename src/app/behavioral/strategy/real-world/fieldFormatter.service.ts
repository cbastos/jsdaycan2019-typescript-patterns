import { Injectable } from "@angular/core";
import { FieldFormatter } from "./FieldFormatter";
import { FieldTypeFormatsFactory } from "./fieldTypeFormatsFactory";
import { Field } from "./Field";

@Injectable()
export class FieldFormatterService {
    private formattersDictionary: { [key: number]: FieldFormatter<any> };

    constructor() {
        this.formattersDictionary =
            FieldTypeFormatsFactory.buildFormattersDictionary();
    }

    format(field: Field<any>): string {
        const typeFormatter = this.formattersDictionary[field.type];
        return typeFormatter !== undefined && typeFormatter.format(field);
    }
}
    