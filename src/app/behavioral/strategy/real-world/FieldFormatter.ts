import { Field } from "./Field";

export interface FieldFormatter<T> {
    format(field: Field<T>): string;
}
