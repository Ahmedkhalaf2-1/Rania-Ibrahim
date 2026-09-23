import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  /** Download the linked file instead of navigating; a string sets its filename. */
  download?: boolean | string
}

function Button({ href, children, variant = 'primary', download }: ButtonProps) {
  return (
    <a href={href} className={`btn btn--${variant}`} download={download}>
      {children}
    </a>
  )
}

export default Button
