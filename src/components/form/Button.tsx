import React, { SyntheticEvent } from 'react';

type ButtonProps = {
    text: string;
    type?: 'button' | 'submit';
    onClick?: (e: SyntheticEvent) => void;
}

export function Button(props: ButtonProps) {
    const { text, onClick, type = 'button' } = props;

    return (
        <button onClick = {onClick} type = {type}
            className = "px-4 py-2 bg-blue-600 border border-blue-700 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md"
        >
            {text}
        </button>
    );
}