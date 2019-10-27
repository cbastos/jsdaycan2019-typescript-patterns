import { FieldTypes } from "./FieldTypes";

export interface Field<T> {
    type: FieldTypes;
    value: T;
}