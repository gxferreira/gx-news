import React from "react";
import { FormInputProps } from "./FormInputProps";

const DEFAULT_ROWS = 4;

export type TextAreaProps = FormInputProps<HTMLTextAreaElement> & {
    rows?: number;
}

export function TextArea(props: TextAreaProps) {
    const { label, onChange, value, name } = props;
    const rows = props.rows ? props.rows : DEFAULT_ROWS

    return (
        <label className="TextArea block">
            { label && <span className="my-2 block">{ label }</span> }
            <textarea className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={onChange}
                rows={rows}
                placeholder={label}
                value={value}
                name={name}>
            </textarea>
        </label>
       
    )
}