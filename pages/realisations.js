import Head from 'next/head'
import { Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import ReviewSection from '../components/ReviewSection'

// Projects will be added here later
const projects = [
  {
    id: 1,
    title: "",
    client: "",
    description: "",
    imageUrl: ""
  },
  {
    id: 2,
    title: "",
    client: "",
    description: "",
    imageUrl: ""
  },
  {
    id: 3,
    title: "",
    client: "",
    description: "",
    imageUrl: ""
  },


]


export default function Realisations() {
  return (
    <>
      <Head>
        <title>Mes Réalisations - VBL SOLUTION</title>
        <meta name="description" content="Découvrez mes projets et réalisations en automatisation industrielle et maintenance." />
      </Head>

      <main>
        <PageHeader 
          title="Mes Réalisations"
          subtitle="Découvrez mes projets et solutions techniques industrielles"
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

        <ReviewSection />
      </main>
    </>
  )
} 