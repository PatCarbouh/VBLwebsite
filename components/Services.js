import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Maintenance Industrielle",
    description: "Service complet de maintenance préventive et corrective pour vos équipements industriels. Optimisation de la performance et réduction des temps d'arrêt.",
    image: "/Vic_devant_machine_empaquettage.jpg",
    tags: ["Préventive", "Corrective", "Sur-mesure"],
  },
  {
    title: "Mise en Service",
    description: "Installation et configuration professionnelle de vos nouveaux équipements. Garantie d'un démarrage optimal de vos systèmes de production.",
    image: "/Vic_modifie_panneau_thimon.jpg",
    tags: ["Installation", "Configuration", "Formation"],
  },
  {
    title: "Support Technique",
    description: "Assistance technique rapide et efficace. Intervention sur site pour diagnostic et résolution des problèmes. Nous intervenons sur l'ensemble de la France.",
    image: "/industrial-machine.jpg",
    tags: ["Urgence", "Diagnostic", "Dépannage"],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-lg overflow-hidden shadow-lg group transform-gpu hover:translate-y-[-8px] transition-transform duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-vbl-dark mb-2"
        >
          {service.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-vbl-grey mb-4"
        >
          {service.description}
        </motion.p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (tagIndex * 0.1) }}
              className="px-3 py-1 text-sm bg-vbl-light text-vbl-red rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/devis?service=${encodeURIComponent(service.title)}`}
            className="block w-full bg-vbl-red hover:bg-vbl-red/90 text-white py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02]"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-vbl-light">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4">
            Mes Services
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-vbl-red mx-auto mb-6"
          />
          <p className="text-vbl-grey text-lg max-w-2xl mx-auto">
            Des solutions techniques adaptées à vos besoins industriels
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 