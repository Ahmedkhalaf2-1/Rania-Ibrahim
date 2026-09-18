import InfiniteRail from './InfiniteRail'
import PhoneFrame, { type PhoneItem } from './PhoneFrame'

interface PhoneRailProps {
  items: PhoneItem[]
  speed?: number
}

/** Section 03's continuous phone-screen strip, built on the shared InfiniteRail. */
function PhoneRail({ items, speed = 55 }: PhoneRailProps) {
  return (
    <InfiniteRail
      items={items}
      speed={speed}
      gap="clamp(20px, 2.2vw, 34px)"
      getKey={(item, i) => `${item.id}-${i}`}
      renderItem={(item, _i, ariaHidden) => <PhoneFrame item={item} ariaHidden={ariaHidden} />}
    />
  )
}

export default PhoneRail
