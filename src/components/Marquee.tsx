import './Marquee.css'

interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
  /** Full loop duration, e.g. "30s" */
  duration?: string
}

/**
 * Infinite horizontal marquee. The item sequence is duplicated so the
 * track can scroll exactly 50% of its width and loop with no visible seam.
 */
function Marquee({ items, direction = 'left', duration = '30s' }: MarqueeProps) {
  const sequence = [...items, ...items]

  return (
    <div className="marquee" aria-hidden={false}>
      <div
        className="marquee__track"
        data-direction={direction}
        style={{ animationDuration: duration }}
      >
        {sequence.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="marquee__item"
            data-tone={index % 2 === 0 ? 'a' : 'b'}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
