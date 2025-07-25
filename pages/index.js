import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import StorySection from '../components/StorySection'
import Services from '../components/Services'
import ReviewSection from '../components/ReviewSection'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>VBL SOLUTION - Solutions Techniques Industrielles</title>
        <meta name="description" content="VBL SOLUTION - Expertise technique et maintenance industrielle sur mesure pour optimiser vos performances." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <StorySection />
        <Services />
        <ReviewSection />
        
      </main>
    </>
  )
} 