import Link from 'next/link'


const reviews = [
  {
    name: "",
    company: "VBL SOLUTION",
    text: "Bientôt disponible",
    rating: 5,
  },
    {
    name: "",
    company: "VBL SOLUTION",
    text: "Bientôt disponible",
    rating: 5,
  },
    {
    name: "",
    company: "VBL SOLUTION",
    text: "Bientôt disponible",
    rating: 5,
  },
  

]

const ReviewCard = ({ review }) => {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-vbl-red transform hover:scale-105 transition-all duration-300">
      <div className="text-yellow-400 mb-4">{stars}</div>
      <p className="text-vbl-grey mb-4">{review.text}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-vbl-dark">{review.name}</p>
        <p className="text-sm text-vbl-grey">{review.company}</p>
      </div>
    </div>
  )
}

const ReviewSection = () => {
  return (
    <section className="py-16 md:py-24 bg-vbl-light">
      <div className="container mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4">
            Ils nous font confiance
          </h2>
          <div className="w-20 h-1 bg-vbl-red mx-auto" />
        </div>
  
        {/* Cartes d’avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
  
        {/* Séparateur rouge entre cartes et bouton */}
        <div className="w-20 h-1 bg-vbl-red mx-auto mb-8" />
  
        {/* Bouton CTA */}
        <div className="flex justify-center">
          <Link
            href="/commentaire"
            className="bg-vbl-red hover:bg-vbl-red/90 text-white py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02]"
          >
            Laisser un commentaire
          </Link>
        </div>
      </div>
    </section>
  )
  
  
}

export default ReviewSection 