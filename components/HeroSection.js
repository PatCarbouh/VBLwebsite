import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function HeroSection() {
  return (
    <div className="relative bg-vbl-dark overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-grid-pattern"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInFromLeft}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-vbl-blue">VBL Solution</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  Expertise Technique Industrielle
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Maintenance industrielle, mise en service et support technique pour optimiser vos performances.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-vbl-blue hover:brightness-110 transition-all"
                >
                  Nos Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-vbl-dark transition-all"
                >
                  Nous Contacter
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInFromRight}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.div 
                  variants={imageAnimation}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/Vic_modifie_panneau_thimon.jpg"
                    alt="Intervention sur panneau de contrôle"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div 
                  variants={imageAnimation}
                  transition={{ delay: 0.2 }}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/industrial-machine.jpg"
                    alt="Machine industrielle"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  variants={imageAnimation}
                  transition={{ delay: 0.4 }}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/conveyor-belt.jpg"
                    alt="Système de convoyage"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div 
                  variants={imageAnimation}
                  transition={{ delay: 0.6 }}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/packaging-automation.jpg"
                    alt="Automatisation d'emballage"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 