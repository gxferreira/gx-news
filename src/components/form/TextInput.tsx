import React from "react";
import { FormInputProps } from "./FormInputProps";

export type TextInputProps = FormInputProps<HTMLInputElement> & {
    type?: 'number' | 'text'
}

export function TextInput(props: TextInputProps) {
    const { label, onChange, value, type, name } = props;

    return (
        <label className="TextInput block">
            { label && <span className="my-2 block">{ label }</span> }
            <input className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
                name={name}
            />
        </label>
       
    )
}