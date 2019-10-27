import { Field } from '../Field';
import { FieldFormatter } from '../FieldFormatter';

export class BooleanFormatter implements FieldFormatter<boolean> {

    format(field: Field<boolean>): string {
        return field.value ? 'True' : 'False';
    }
}
