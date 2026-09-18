import './MediaFrame.css'

interface MediaFrameProps {
  /** e.g. "829 / 1600" — reserves the future image's proportions. Omit for a
   *  "natural" frame whose height will be driven by the image itself later
   *  (width:100%; height:auto), e.g. an uncropped hero composition. */
  aspectRatio?: string
  image?: string | null
  alt?: string
  objectFit?: 'contain' | 'cover'
  background?: string
  radius?: string
  className?: string
}

/**
 * Generic media placeholder / future-image mount point. Renders a neutral
 * frame at the correct aspect ratio now; once `image` is supplied later it
 * renders an <img> filling the same frame with the requested object-fit.
 */
function MediaFrame({
  aspectRatio,
  image,
  alt = '',
  objectFit = 'contain',
  background,
  radius,
  className = '',
}: MediaFrameProps) {
  const isNatural = !aspectRatio

  return (
    <div
      className={`media-frame ${className}`.trim()}
      style={{
        aspectRatio,
        background,
        borderRadius: radius,
        minHeight: isNatural && !image ? 'clamp(320px, 40vw, 520px)' : undefined,
      }}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className={`media-frame__img ${isNatural ? 'media-frame__img--natural' : ''}`.trim()}
          style={isNatural ? undefined : { objectFit }}
        />
      ) : null}
    </div>
  )
}

export default MediaFrame
