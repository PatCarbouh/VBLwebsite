import Image from 'next/image'
import Link from 'next/link'

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
    image: "/Vic_sur_boitier_elec.jpg",
    tags: ["Urgence", "Diagnostic", "Dépannage"],
  },
]

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
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
        <h3 className="text-2xl font-bold text-vbl-dark mb-2">{service.title}</h3>
        <p className="text-vbl-grey mb-4">{service.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-vbl-light text-vbl-red rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="block w-full bg-vbl-red hover:bg-vbl-red/90 text-white py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02]"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-vbl-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-vbl-red mx-auto mb-6" />
          <p className="text-vbl-grey text-lg max-w-2xl mx-auto">
            Des solutions techniques adaptées à vos besoins industriels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 