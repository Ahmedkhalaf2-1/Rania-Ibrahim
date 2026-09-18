import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

function Button({ href, children, variant = 'primary' }: ButtonProps) {
  return (
    <a href={href} className={`btn btn--${variant}`}>
      {children}
    </a>
  )
}

export default Button
