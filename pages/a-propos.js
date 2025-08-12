import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Clock, Users, Lightbulb, Settings, Zap, Cpu, Wind, Droplet, Gauge, Factory } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ReviewSection from '../components/ReviewSection'

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

const ExpertiseCard = ({ icon: Icon, title, description, isMain = false }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
      isMain ? 'border-2 border-vbl-blue/20' : ''
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg ${
        isMain ? 'bg-vbl-blue/20' : 'bg-vbl-blue/10'
      }`}>
        <Icon className={`${
          isMain ? 'w-8 h-8' : 'w-6 h-6'
        } text-vbl-blue`} />
      </div>
      <div>
        <h3 className={`${
          isMain ? 'text-2xl' : 'text-xl'
        } font-bold text-vbl-dark mb-2`}>{title}</h3>
        <p className="text-vbl-grey">{description}</p>
      </div>
    </div>
  </motion.div>
)

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

  const mainExpertise = [
    {
      icon: Settings,
      title: "Mécanique",
      description: "Je possède une expertise approfondie en mécanique industrielle, acquise au fil de mes années d'expérience. J'interviens sur tous types de machines pour leur maintenance, leur dépannage et leur optimisation.",
    },
    {
      icon: Zap,
      title: "Électrique",
      description: "Ma maîtrise des systèmes électriques industriels me permet d'intervenir de l'installation au dépannage des équipements les plus complexes. Je m'appuie sur mon expertise en schémas électriques et le respect strict des normes de sécurité.",
    },
    {
      icon: Cpu,
      title: "Automatisme Industriel",
      description: "Je programme et optimise les automates, mets en place des systèmes de contrôle-commande, et assure la supervision des processus industriels. Mon expertise couvre l'ensemble des aspects de l'automatisation.",
    }
  ]

  const complementarySkills = [
    {
      icon: Wind,
      title: "Pneumatique",
      description: "J'installe, maintiens et optimise les systèmes pneumatiques industriels. Mon expertise couvre l'ensemble des circuits et composants pneumatiques.",
    },
    {
      icon: Droplet,
      title: "Hydraulique",
      description: "Je maîtrise les systèmes hydrauliques industriels, assurant la maintenance des circuits et l'optimisation de leurs performances.",
    },
    {
      icon: Gauge,
      title: "Réglages Spécifiques",
      description: "J'effectue des ajustements précis des paramètres gaz et assure une configuration fine des processus de production pour garantir une performance optimale.",
    },
    {
      icon: Factory,
      title: "Optimisation Globale",
      description: "Ma vision globale me permet d'assurer la maintenance et l'amélioration continue de lignes de production complètes.",
    }
  ]

  const valueCards = [
    {
      icon: Users,
      title: "Proximité Client",
      description: "Je privilégie une relation directe et personnalisée avec chaque client. Je prends le temps de comprendre vos besoins spécifiques pour apporter les solutions les plus adaptées.",
    },
    {
      icon: Shield,
      title: "Qualité de Service",
      description: "Mon engagement envers l'excellence technique et la qualité de service est au cœur de chacune de mes interventions. Je garantis des résultats optimaux.",
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Je comprends l'importance du temps dans l'industrie. Ma capacité à intervenir rapidement permet de minimiser vos temps d'arrêt et d'optimiser votre productivité.",
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Mon expertise technique, que je maintiens constamment à jour, me permet de résoudre efficacement les défis les plus complexes.",
    }
  ]

  return (
    <>
      <Head>
        <title>À propos - VBL SOLUTION</title>
        <meta name="description" content="Découvrez mon parcours, ma vision et mes valeurs en tant que spécialiste des solutions techniques industrielles." />
      </Head>

      <main className="bg-gray-50">
        <PageHeader 
          title="Mon Histoire"
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
                    src="/Victor_fin_ligne_face_cam.jpg"
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
                    J'ai créé VBL SOLUTION suite à une conviction profonde : l'industrie moderne a besoin d'un partenaire technique réactif, expert et proche de ses clients. Après 8 ans d'expérience dans le secteur industriel, j'ai constaté que les entreprises recherchaient un support technique flexible et personnalisé.
                  </motion.p>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Ma mission est d'accompagner les industries dans leur développement en apportant des solutions techniques sur mesure, une expertise pointue et un support réactif. Je m'engage à être plus qu'un simple prestataire - je suis un véritable partenaire technique.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>

          <div className="container mx-auto relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4"
                >
                  Mon Expertise Industrielle Polyvalente
                  <span className="block text-2xl md:text-3xl text-vbl-blue mt-2">
                    Mécanique, Électrique & Automatisme
                  </span>
                </motion.h2>
                <div className="w-20 h-1 bg-vbl-red mx-auto mb-8"></div>
                <motion.p 
                  variants={fadeIn}
                  className="text-lg text-vbl-grey max-w-3xl mx-auto"
                >
                  Je combine une triple expertise technique au service de vos installations industrielles. 
                  Mon savoir-faire en mécanique, électricité et automatisme me permet d'avoir une approche globale 
                  de vos enjeux de production.
                </motion.p>
              </div>

              {/* Main Expertise */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {mainExpertise.map((expertise, index) => (
                  <ExpertiseCard
                    key={expertise.title}
                    {...expertise}
                    isMain={true}
                  />
                ))}
              </div>

              {/* Complementary Skills */}
              <motion.div
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-8 mt-12"
              >
                <h3 className="text-2xl font-bold text-vbl-dark text-center mb-8">
                  Mes Compétences Complémentaires
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {complementarySkills.map((skill, index) => (
                    <ExpertiseCard
                      key={skill.title}
                      {...skill}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl md:text-4xl font-bold text-vbl-dark mb-3"
                >
                  Mes Valeurs
                </motion.h2>
                <div className="w-20 h-1 bg-vbl-red mx-auto mb-4"></div>
                <motion.p 
                  variants={fadeIn}
                  className="text-lg text-vbl-grey max-w-2xl mx-auto"
                >
                  Ces valeurs fondamentales guident chacune de mes actions et reflètent mon engagement envers l'excellence.
                  Mon but : que vous soyez plus satisfait de mon travail que je ne le suis moi-même.
                </motion.p>
                <div className="w-20 h-1 bg-vbl-red mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {valueCards.map((card, index) => (
                  <ValueCard key={index} {...card} />
                ))}
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
                    Mon Engagement
                  </motion.h2>
                  <div className="w-20 h-1 bg-vbl-red"></div>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Je m'engage à être un partenaire fiable et innovant pour mes clients. Mon approche combine expertise technique, réactivité et service personnalisé pour garantir votre satisfaction et le succès de vos projets.
                  </motion.p>
                  <motion.p 
                    variants={fadeIn}
                    className="text-lg text-vbl-grey"
                  >
                    Mon objectif est de contribuer à votre réussite en vous apportant des solutions techniques efficaces et adaptées à vos besoins spécifiques.
                  </motion.p>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/Vic_devant_machine_empaquettage.jpg"
                    alt="Mon engagement pour la qualité"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <ReviewSection />
      </main>
      
    </>
  )
} 