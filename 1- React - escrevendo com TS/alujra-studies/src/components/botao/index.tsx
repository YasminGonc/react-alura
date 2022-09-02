import React from 'react';
import style from  './Botao.module.scss';

interface Props {
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode
}

export default function Botao({onClick, type, children}: Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
        >
            {children} 
            {/* prop como atributo */}
        </button>
    )
}

