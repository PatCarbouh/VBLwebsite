import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ className = "", imageClassName = "", isFooter = false }) => {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/logo_vbl.png"
        alt="Logo VBL SOLUTION"
        width={160}
        height={160}
        className={`w-auto object-contain transition-transform duration-300 ${
          isFooter ? 'h-20 md:h-24' : 'h-12 hover:scale-105' //brightness-0 invert
        } ${imageClassName}`}
        priority
      />
    </Link>
  )
}

export default Logo 