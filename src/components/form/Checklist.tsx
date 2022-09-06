import React from "react";
import { FormInputProps } from "./FormInputProps";

export function Checklist(props: FormInputProps<HTMLInputElement, boolean>) {
    const { label, onChange, value, name } = props;
    return (
        <label className="flex block gap-3 items-center">
            { label && <span className="my-2 block">{ label }</span> }
            <div className="flex ">
                <input className="w-20 w-20 border border-gray-500 rounded-md"
                    onChange={onChange}
                    placeholder={label}
                    type="checkbox"
                    checked={value}
                    name={name}
                />
            </div>
        </label>
    )
}