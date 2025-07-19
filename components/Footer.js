import Link from 'next/link'
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' }
  ]

  const serviceLinks = [
    { label: 'Maintenance Industrielle', href: '/services#maintenance' },
    { label: 'Mise en Service', href: '/services#mise-en-service' },
    { label: 'Support Technique', href: '/services#support' }
  ]

  return (
    <footer className="bg-vbl-dark text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Logo and Description */}
          <div className="space-y-3">
            <Logo isFooter className="mb-2" />
            <p className="text-gray-400 text-sm">
              Solutions techniques industrielles sur mesure pour optimiser vos performances.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Navigation</h3>
            <ul className="space-y-1">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Nos Services</h3>
            <ul className="space-y-1">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-vbl-red" />
                <a
                  href="mailto:victor.bimal@vblsolution.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  victor.bimal@vblsolution.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-vbl-red" />
                <span className="text-gray-400 text-sm">
                  France & International
                </span>
              </li>
              <li className="pt-2">
              <a
                href="https://www.linkedin.com/in/victor-bimal-8aa614bb/"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
              >
                  <Linkedin className="h-5 w-5" />
              </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-2 pt-3 text-center text-gray-400 text-sm">
          <p className="mb-1">© {currentYear} VBL SOLUTION. Tous droits réservés.</p>
          <Link href="/informations-legales" className="hover:text-white transition-colors duration-200">
            Informations légales
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 