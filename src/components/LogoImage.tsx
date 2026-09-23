import { useCallback, useState, type CSSProperties, type ImgHTMLAttributes } from 'react'

/**
 * Logo <img> that reports its aspect ratio to CSS as --logo-sqrt-ratio, so
 * LogoTile.css can give every logo the same visual area (wide marks get
 * wider, tall marks taller) instead of letting wide ones dominate.
 */
function LogoImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [sqrtRatio, setSqrtRatio] = useState<number>()

  // Callback ref also catches images that finished loading before hydration.
  const measure = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth) {
      setSqrtRatio(Math.sqrt(img.naturalWidth / img.naturalHeight))
    }
  }, [])

  return (
    <img
      {...props}
      ref={measure}
      onLoad={e => measure(e.currentTarget)}
      style={sqrtRatio ? ({ '--logo-sqrt-ratio': sqrtRatio } as CSSProperties) : undefined}
    />
  )
}

export default LogoImage
