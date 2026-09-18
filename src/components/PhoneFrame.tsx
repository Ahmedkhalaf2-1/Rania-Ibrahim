import './PhoneFrame.css'

export interface PhoneItem {
  id: string
  image?: string | null
  alt?: string
}

interface PhoneFrameProps {
  item: PhoneItem
  /** Hidden from assistive tech for the duplicated loop pass. */
  ariaHidden?: boolean
}

function PhoneFrame({ item, ariaHidden = false }: PhoneFrameProps) {
  return (
    <div className="phone-frame" aria-hidden={ariaHidden || undefined}>
      <div className="phone-frame__screen">
        {item.image ? <img src={item.image} alt={item.alt ?? ''} className="phone-frame__img" /> : null}
      </div>
    </div>
  )
}

export default PhoneFrame
