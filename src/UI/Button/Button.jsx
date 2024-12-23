import React from 'react';
import s from './Button.module.sass'

export const Button = ({children, ...props}) => {
    return(
        <button className={s.button}
            {...props}
        >
            {children}
        </button>
    )
}