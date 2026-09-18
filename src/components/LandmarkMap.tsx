import './LandmarkMap.css'

interface LandmarkMapProps {
  imageSrc: string | null
}

function LandmarkMap({ imageSrc }: LandmarkMapProps) {
  return (
    <div className="landmark-map">
      {imageSrc ? <img src={imageSrc} alt="Map of Siwa Landmarks" /> : null}
    </div>
  )
}

export default LandmarkMap
