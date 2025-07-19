import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageHeader from '../components/PageHeader';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <>
      <Head>
        <title>404 - Page Non Trouvée | VBL SOLUTION</title>
        <meta name="description" content="Page non trouvée - VBL SOLUTION" />
      </Head>

      <main>
        <PageHeader 
          title="404"
          subtitle="La page que vous recherchez semble ne pas exister."
        />

        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-vbl-grey mb-8">
                Retour à l&apos;accueil dans <span className="text-vbl-red/90 font-semibold">5 secondes</span>
              </p>
              <button
                onClick={() => router.push('/')}
                className="bg-vbl-red/90 hover:bg-vbl-red text-white/90 font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-vbl-red/20"
              >
                Retourner à l&apos;accueil
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 