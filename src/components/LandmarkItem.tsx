import './LandmarkItem.css'

interface LandmarkItemProps {
  nameAr: string
  icon: string | null
  photo: string | null
  style?: React.CSSProperties
}

function LandmarkItem({ nameAr, icon, photo, style }: LandmarkItemProps) {
  return (
    <div className="landmark-item" style={style}>
      <div className="landmark-item__icon-frame">
        {icon ? <img src={icon} alt={`${nameAr} icon`} /> : null}
      </div>
      <div className="landmark-item__photo-frame">
        {photo ? <img src={photo} alt={`${nameAr} photo`} /> : null}
      </div>
    </div>
  )
}

export default LandmarkItem
