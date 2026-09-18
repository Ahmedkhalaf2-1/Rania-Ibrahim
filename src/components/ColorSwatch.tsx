import './ColorSwatch.css'

interface ColorSwatchProps {
  hex: string
  /** Circle diameter in px. */
  size?: number
  /** Font size of the hex label, in px. */
  labelSize?: number
}

function ColorSwatch({ hex, size = 30, labelSize = 9 }: ColorSwatchProps) {
  const isNearWhite = hex.toLowerCase() === '#ffffff' || hex.toLowerCase() === '#fff'

  return (
    <div className="color-swatch">
      <span
        className={`color-swatch__circle ${isNearWhite ? 'color-swatch__circle--bordered' : ''}`}
        style={{ width: size, height: size, background: hex }}
      />
      <span className="color-swatch__hex" style={{ fontSize: labelSize }}>
        {hex}
      </span>
    </div>
  )
}

export default ColorSwatch
