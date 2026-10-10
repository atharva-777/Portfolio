import { FiArrowUpRight } from 'react-icons/fi'

const socials = [
  { label: 'GitHub', href: 'https://github.com/atharva-777' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/atharva-jadhav-/' },
  { label: 'LeetCode', href: 'https://leetcode.com/atharva_777/' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-inner">
        <a className="footer-signoff" href="#home">AJ<span> / </span>ATHARVA JADHAV</a>
        <p>Built with curiosity in Bangalore, India.</p>
        <nav aria-label="Social links">
          {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<FiArrowUpRight aria-hidden="true" /></a>)}
        </nav>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
