
import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({children, ...rest}: ButtonProps){
    return(
        <button className={styles.button} {...rest}>
            <a className={styles.buttonText}>{children}</a>
        </button>
    )
}