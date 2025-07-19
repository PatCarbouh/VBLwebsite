import Head from 'next/head'
import PageHeader from '../components/PageHeader'

export default function InformationsLegales() {
  return (
    <>
      <Head>
        <title>Informations Légales - VBL SOLUTION</title>
        <meta name="description" content="Informations légales et mentions légales de VBL SOLUTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHeader 
          title="Informations Légales"
          subtitle="Mentions légales et informations sur l'éditeur"
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
              <p>
                Le site vblsolution.com est édité par la société VBLsolution,<br />
                SASU au capital de 10 000€<br />
                Siège social : 60 Rue François 1er, 75008 PARIS<br />
                SIREN : 943420869<br />
                RCS : PARIS
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Directeur de la publication</h2>
              <p>Victor Bimal</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
              <p>
                Le site est hébergé par VBLsolution (auto-hébergement).<br />
                Le serveur est administré directement par VBLsolution et est localisé en France.<br />
                Adresse légale de l'hébergeur : 60 rue François 1er, 75008 PARIS<br />
                Contact : <a href="mailto:victor.bimal@vblsolution.fr" className="text-blue-600 hover:text-blue-800">victor.bimal@vblsolution.fr</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Protection des données (RGPD)</h2>
              <p>
                Pour en savoir plus sur la manière dont nous traitons vos données personnelles et sur vos droits, 
                vous pouvez consulter notre politique de protection des données en téléchargeant le document ci-dessous :
              </p>
              <div className="mt-4">
                <a 
                  href="/RGPD.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-vbl-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                  Notre politique RGPD (PDF)
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 