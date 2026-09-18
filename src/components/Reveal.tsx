import { useEffect, useRef, useState, type ReactNode } from 'react'
import './Reveal.css'

interface RevealProps {
  children: ReactNode
  /** Extra delay before the reveal transition starts, in ms. */
  delay?: number
  className?: string
}

/**
 * Wraps content in an IntersectionObserver-driven reveal.
 * Starts hidden/offset, animates to visible once the element enters the viewport.
 * Respects prefers-reduced-motion via CSS (see Reveal.css).
 */
function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default Reveal
