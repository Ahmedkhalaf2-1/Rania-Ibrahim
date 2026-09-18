import './SiteHeader.css'

const NAV_LINKS = [
  { label: 'WORK', href: '#s01' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top">
        Rania Abdullah
      </a>

      <nav className="site-header__nav" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="site-header__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
