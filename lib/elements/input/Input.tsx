import React from 'react'
import styles from './input.module.css'

type InputProps = React.PropsWithChildren<
React.InputHTMLAttributes<HTMLInputElement>
>

export const Input = ({
  className,
  ...props
}: InputProps): React.JSX.Element => {
  return <input className={`${styles.input} ${className}`} {...props} />
}
