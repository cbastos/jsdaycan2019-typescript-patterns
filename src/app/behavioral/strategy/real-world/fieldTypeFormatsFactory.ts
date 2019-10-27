import { FieldFormatter } from "./FieldFormatter";
import { FieldTypes } from "./FieldTypes";
import { StringFormatter } from "./formatters/stringFormatter";
import { BooleanFormatter } from "./formatters/booleanFormatter";

export class FieldTypeFormatsFactory {

    static buildFormattersDictionary(
    ): { [key: number]: FieldFormatter<any> } {
        return {
            [FieldTypes.String]: new StringFormatter(),
            [FieldTypes.Boolean]: new BooleanFormatter()
        };
    }
}
