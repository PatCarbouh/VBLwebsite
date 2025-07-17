import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

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

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-vbl-dark to-black px-4">
        <div 
          className="text-center max-w-2xl mx-auto bg-black/30 p-12 rounded-2xl backdrop-blur-sm border border-vbl-grey/10"
        >
          <h1 className="text-8xl font-bold text-vbl-red/90 mb-8 select-none">404</h1>
          <h2 className="text-3xl font-semibold text-vbl-light/90 mb-6">
            Page Non Trouvée
          </h2>
          <p className="text-vbl-light/70 text-lg mb-8">
            La page que vous recherchez semble avoir disparu dans l&apos;ombre...
          </p>
          <p className="text-vbl-light/60 mb-10">
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
    </>
  )
} 