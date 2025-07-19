import Link from 'next/link'
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-vbl-dark text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo isFooter className="mb-4" />
            <p className="text-gray-400">
              Solutions techniques industrielles sur mesure pour optimiser vos performances.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'Réalisations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {[
                'Maintenance Industrielle',
                'Mise en Service',
                'Support Technique',
                'Formation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-vbl-red" />
                <a
                  href="tel:+33600000000"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +33 6 00 00 00 00
                </a>
              </li> */}
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-vbl-red" />
                <a
                  href="mailto:victor.bimal@vblsolution.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  victor.bimal@vblsolution.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-vbl-red" />
                <span className="text-gray-400">
                  Montélimar, France
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/victor-bimal-8aa614bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">© {currentYear} VBL SOLUTION. Tous droits réservés.</p>
          <p>
            <Link href="/informations-legales" className="hover:text-white transition-colors duration-200">
              Informations légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 