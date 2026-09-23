import Reveal from './Reveal'
import './SiteFooter.css'

interface ContactLink {
  label: string
  value: string
  href: string
}

/** Contact channels shown in the footer; the list is hidden while empty. */
const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: 'Rania.abdalla.ca@gmail.com', href: 'mailto:Rania.abdalla.ca@gmail.com' },
]

const NAV_LINKS = [
  { label: 'Work', href: '#s01' },
  { label: 'About', href: '#about' },
  { label: 'Back to top', href: '#top' },
]

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <Reveal>
          <span className="site-footer__eyebrow">Get in touch</span>
          <h2 className="site-footer__headline">
            Let’s work <em>together.</em>
          </h2>
        </Reveal>

        {CONTACT_LINKS.length > 0 && (
          <Reveal delay={80}>
            <ul className="site-footer__contacts">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="site-footer__contact-label">{link.label}</span>
                  <a
                    className="site-footer__contact-value"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className="site-footer__bar">
          <span className="site-footer__name">Rania Abdullah</span>
          <nav className="site-footer__nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="site-footer__link">
                {link.label}
              </a>
            ))}
          </nav>
          <span className="site-footer__copy">© {year} Rania Abdullah. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
