import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Clock, Users, Lightbulb } from 'lucide-react'
import PageHeader from '../components/PageHeader'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    variants={fadeIn}
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-vbl-blue/10 rounded-lg">
        <Icon className="w-6 h-6 text-vbl-blue" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-vbl-dark">{title}</h3>
        <p className="mt-2 text-vbl-grey">{description}</p>
      </div>
    </div>
  </motion.div>
)

export default function About() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <>
      <Head>
        <title>À propos - VBL SOLUTION</title>
        <meta name="description" content="Découvrez l'histoire, la vision et les valeurs de VBL SOLUTION, votre partenaire en solutions techniques industrielles." />
      </Head>

      <main className="bg-gray-50">
        <PageHeader 
          title="Notre Histoire"
          subtitle="Une vision innovante au service de l'industrie"
        />

        {/* Vision Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/technical-support.jpg"
                    alt="Solutions industrielles innovantes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <motion.h2 
                    variants={fadeIn}
                    className="text-3xl font-bold text-vbl-dark"
                  >
                    Ma Vision
                  </motion.h2>
                  <div className="w-20 h-1 bg-vbl-red"></div>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    VBL SOLUTION est née d'une conviction profonde : l'industrie moderne a besoin d'un partenaire technique réactif, expert et proche de ses clients. Après 8 ans d'expérience dans le secteur industriel, j'ai constaté que les entreprises recherchaient un support technique flexible et personnalisé.
                  </motion.p>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Ma mission est d'accompagner les industries dans leur développement en leur apportant des solutions techniques sur mesure, une expertise pointue et un support réactif. Je m'engage à être plus qu'un simple prestataire - je suis un véritable partenaire technique.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4"
                >
                  Nos Valeurs
                </motion.h2>
                <div className="w-20 h-1 bg-vbl-red mx-auto mb-5"></div>
                <motion.p 
                  variants={fadeIn}
                  className="text-lg text-vbl-grey max-w-2xl mx-auto"
                >
                  Ces valeurs fondamentales guident chacune de mes actions et reflètent mon engagement envers l'excellence.
                  Mon but : que vous soyez plus satisfait de mon travail que ce que je ne le suis.
                </motion.p>
                <div className="w-20 h-1 bg-vbl-red mx-auto mt-5"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ValueCard
                  icon={Users}
                  title="Proximité Client"
                  description="Nous privilégions une relation directe et personnalisée avec chaque client, comprenant leurs besoins spécifiques pour apporter les solutions les plus adaptées."
                />
                <ValueCard
                  icon={Shield}
                  title="Qualité de Service"
                  description="Notre engagement envers l'excellence technique et la qualité de service est au cœur de chaque intervention, garantissant des résultats optimaux."
                />
                <ValueCard
                  icon={Clock}
                  title="Réactivité"
                  description="Nous comprenons l'importance du temps dans l'industrie. Notre capacité à intervenir rapidement permet de minimiser les temps d'arrêt et d'optimiser la productivité."
                />
                <ValueCard
                  icon={Lightbulb}
                  title="Expertise"
                  description="Notre expertise technique approfondie, constamment mise à jour, nous permet de résoudre efficacement les défis les plus complexes."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.h2 
                    variants={fadeIn}
                    className="text-3xl font-bold text-vbl-dark"
                  >
                    Notre Engagement
                  </motion.h2>
                  <div className="w-20 h-1 bg-vbl-red"></div>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Chez VBL SOLUTION, nous nous engageons à être un partenaire fiable et innovant pour nos clients. Notre approche combine expertise technique, réactivité et service personnalisé pour garantir votre satisfaction et le succès de vos projets.
                  </motion.p>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Notre objectif est de contribuer à votre réussite en vous apportant des solutions techniques efficaces et adaptées à vos besoins spécifiques.
                  </motion.p>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/conveyor-belt.jpg"
                    alt="Engagement qualité VBL Solution"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 