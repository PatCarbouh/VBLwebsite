import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/Vic_devant_machine_empaquettage.jpg',
    title: 'Maintenance Industrielle',
    description: 'Expertise technique pour vos équipements de production',
  },
  {
    image: '/Vic_modifie_panneau_thimon.jpg',
    title: 'Mise en Service',
    description: 'Installation et configuration de vos systèmes industriels',
  },
  {
    image: '/Vic_sur_boitier_elec.jpg',
    title: 'Support Technique',
    description: 'Assistance et dépannage sur site',
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image with gradient overlay */}
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <div className="space-x-4">
                <Link
                  href="/contact"
                  className="inline-block bg-vbl-red hover:bg-vbl-red/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-102"
                >
                  Contactez-nous
                </Link>
                <Link
                  href="/services"
                  className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-all duration-300"
                >
                  Nos Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider 