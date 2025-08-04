import Head from 'next/head'
import Services from '../components/Services'
import Link from 'next/link'
import PageHeader from '../components/PageHeader'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Mes Services - VBL SOLUTION</title>
        <meta name="description" content="Découvrez nos services de maintenance industrielle, mise en service et support technique." />
      </Head>

      <main>
        <PageHeader 
          title="Mes Services"
          subtitle="Des solutions techniques adaptées à vos besoins industriels, avec une expertise reconnue et un engagement total envers votre satisfaction."
        />

        {/* Services Section */}
        <Services />

        {/* Contact CTA */}
        <section className="bg-vbl-red text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une solution sur mesure ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis
              personnalisé.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-vbl-red px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>
        </section>
      </main>
    </>
  )
} 