import Head from 'next/head'
import Services from '../components/Services'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Nos Services - VBL SOLUTION</title>
        <meta name="description" content="Découvrez nos services de maintenance industrielle, mise en service et support technique." />
      </Head>

      <main>
        {/* Page Header */}
        <div className="bg-vbl-dark text-white py-20 md:py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Des solutions techniques adaptées à vos besoins industriels, avec une expertise
              reconnue et un engagement total envers votre satisfaction.
            </p>
          </div>
        </div>

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