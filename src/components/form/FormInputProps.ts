import { ChangeEvent } from "react";

export type FormInputProps<ElementType, ValueType = string> = {
    name?: string;
    label?: string;
    value?: ValueType;
    onChange: (e: ChangeEvent<ElementType>) => void;
}