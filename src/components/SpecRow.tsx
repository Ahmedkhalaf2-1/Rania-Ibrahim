import './SpecRow.css'

interface SpecRowProps {
  label: string
  value: string
}

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="spec-row">
      <span className="spec-row__label">{label}</span>
      <span className="spec-row__value">{value}</span>
    </div>
  )
}

export default SpecRow
