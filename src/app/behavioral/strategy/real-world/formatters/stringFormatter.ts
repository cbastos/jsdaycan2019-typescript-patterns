import { Field } from "../Field";
import { FieldFormatter } from "../FieldFormatter";

export class StringFormatter implements FieldFormatter<string> {

    format(field: Field<string>): string {
        return field.value;
    }
}
