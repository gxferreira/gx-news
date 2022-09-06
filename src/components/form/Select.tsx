import React from "react"
import { FormInputProps } from "./FormInputProps"

export type SelectProps = FormInputProps<HTMLSelectElement> & {
    options: {
        text: string, value?: string
    }[]
}

export function Select(props: SelectProps) {
    const { label, onChange, value, name, options } = props;

    const elementOptions = [{text: ''}, ...options]
        .map(({text, value}) => {
            const elementValue = value !== undefined ? value : text;
            return <option value={elementValue} key={elementValue}>{text}</option>
        })

    return (
        <label className="TextArea block">
            { label && <span className="my-2 block">{ label }</span> }

            <select placeholder={label} className="px-4 py-2 border border-gray-500 rounded-md w-full"
                value={value}
                name={name}
                onChange={onChange}>
                { elementOptions }
            </select>
        </label>
       
    )
}