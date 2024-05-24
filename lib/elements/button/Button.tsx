import React from 'react'
import styles from './button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  className,
  ...props
}: React.PropsWithChildren<ButtonProps>): React.JSX.Element => {
  return <button className={`${styles.button} ${className}`} {...props} />
}
