const reviews = [
  {
    name: "",
    company: "",
    text: "",
    rating: 1,
  },
  {
    name: "",
    company: "",
    text: "",
    rating: 2,
  },
  {
    name: "",
    company: "",
    text: "",
    rating: 3,
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vbl-dark mb-4">
            Ils nous font confiance
          </h2>
          <div className="w-20 h-1 bg-vbl-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewSection 