import Image from 'next/image'
import Link from 'next/link'

const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-vbl-dark">
              Notre Histoire
            </h2>
            <div className="w-20 h-1 bg-vbl-red" />
            <p className="text-vbl-grey text-lg">
              <span className="font-extrabold">VBL</span> SOLUTION est née de la passion de <span className="font-extrabold">V</span>ictor <span className="font-extrabold">B</span>ima<span className="font-extrabold">L</span> pour l'industrie et l'innovation. Technicien de formation, il a commencé sa carrière dans l'industrie en tant que technicien de maintenance pendant 8 ans.
              En plus de son expérience en technicien de maintenance, il a développé une expertise dans l'automatisme et la programmation.
            </p>
            <p className="text-vbl-grey text-lg">
              Son expertise technique et son engagement envers l'excellence lui permet d'offrir des
              solutions sur mesure pour répondre aux défis complexes de setIsScrolled clients.
              <br />
              <br />
              Il se distingue par son approche personnalisée et sa capacité à
              intervenir rapidement sur site, garantissant ainsi la continuité de vos
              opérations industrielles.
            </p>

            <Link 
              href="/a-propos"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-vbl-red rounded-lg overflow-hidden transition-all duration-300 hover:bg-vbl-red/90"
            >
              <span className="relative z-10">En savoir plus</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-vbl-yellow transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 group">
              <Image
                src="/Vic_devant_machine_empaquettage.jpg"
                alt="Technicien VBL en intervention"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection 