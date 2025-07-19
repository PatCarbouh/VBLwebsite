import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

const ProjectCard = ({ title, description, imageUrl, client }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
    >
      {/* Image container with zoom effect */}
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">Bientôt disponible</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {client && (
          <p className="text-sm text-gray-600 mb-2">
            Client: {client}
          </p>
        )}
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard 