import Head from 'next/head'
import { Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'

// Temporary project data - replace with real projects later
const projects = [
  {
    id: 1,
    title: "Optimisation Ligne de Production",
    client: "Industrie Agroalimentaire",
    description: "Amélioration de l'efficacité d'une ligne de production avec mise en place d'automatismes et réduction des temps d'arrêt.",
    imageUrl: "/production-line.jpg"
  },
  {
    id: 2,
    title: "Installation Système de Contrôle",
    client: "Industrie Manufacturière",
    description: "Mise en place d'un nouveau système de contrôle qualité automatisé avec interface opérateur intuitive.",
    imageUrl: "/control-panel.jpg"
  },
  {
    id: 3,
    title: "Maintenance Préventive",
    client: "Secteur Logistique",
    description: "Développement et implémentation d'un programme de maintenance préventive pour optimiser la durée de vie des équipements.",
    imageUrl: "/maintenance-tech.jpg"
  }
]

export default function Realisations() {
  return (
    <>
      <Head>
        <title>Nos Réalisations - VBL SOLUTION</title>
        <meta name="description" content="Découvrez nos projets et réalisations en automatisation industrielle et maintenance." />
      </Head>

      <main>
        <PageHeader 
          title="Nos Réalisations"
          subtitle="Découvrez nos projets et solutions techniques industrielles"
        />

        {/* Construction Notice */}
        <div className="container mx-auto px-4 py-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 mb-8">
            <Info className="h-5 w-5 text-gray-500" />
            <p className="text-gray-600 text-center">
              Cette page est en cours de construction. La liste complète des projets sera bientôt disponible.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                client={project.client}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
} 