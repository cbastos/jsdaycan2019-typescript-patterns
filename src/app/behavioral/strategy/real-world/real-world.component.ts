import { Component, OnInit } from "@angular/core";
import { FieldFormatterService } from "./fieldFormatter.service";
import { Field } from "./Field";
import { FieldTypes } from "./FieldTypes";

@Component({
    selector: 'strategy',
    templateUrl: './real-world.component.html'
})
export class StrategyRealWorldComponent implements OnInit {
    fieldsFormatted: Array<string>;

    constructor(private fieldFormatter: FieldFormatterService) { }

    ngOnInit() {
        const fields: Array<Field<any>> = [
            { type: FieldTypes.Boolean, value: true },
            { type: FieldTypes.String, value: 'a field value' }
        ]
        this.fieldsFormatted = fields.map(f => this.fieldFormatter.format(f));
    }
}
