import Head from 'next/head'
import { Mail, MapPin } from 'lucide-react'
import { useState, useRef } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      console.log('Starting form submission...');

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        note: e.target.note.value,
        message: e.target.message.value,
        contactPermission: e.target.contactPermission.checked,
      };

      console.log('Sending form data to server:', formData);
      
      const response = await fetch('/api/commentaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Votre commentaire a été envoyé avec succès. Vous recevrez bientôt un email de confirmation.',
        });
        formRef.current.reset();
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        type: 'error',
        message: error.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Commentaire - VBL SOLUTION</title>
        <meta name="description" content="Contactez VBL SOLUTION pour vos besoins en maintenance industrielle et support technique." />
      </Head>

      <main>
        <PageHeader 
          title="Laisser un commentaire"
          subtitle="Merci de laisser un commentaire sur notre site. Positif ou négatif, nous vous remercions de nous en faire part."
        />

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold text-vbl-dark mb-6">Laisser un commentaire</h2>
                
                {formStatus.message && (
                  <div 
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-100 text-green-700 border border-green-400' 
                        : 'bg-red-100 text-red-700 border border-red-400'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom et Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vbl-blue focus:border-vbl-blue"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vbl-blue focus:border-vbl-blue"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vbl-blue focus:border-vbl-blue"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Note
                    </label>
                    <select
                      id="note"
                      name="note"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vbl-blue focus:border-vbl-blue"
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez une note</option>
                      {[0,1,2,3,4,5].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Commentaire
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vbl-blue focus:border-vbl-blue"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="contactPermission"
                      name="contactPermission"
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="contactPermission" className="text-sm text-gray-700">
                      J'accepte que VBL SOLUTION me recontacte concernant mon commentaire.
                    </label>
                  </div>



                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-vbl-blue text-white py-3 px-6 rounded-lg font-medium shadow-md
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'}`}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-vbl-dark mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-vbl-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Localisation</h3>
                      <p className="text-gray-600">
                        France et étranger<br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-vbl-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <a 
                        href="mailto:victor.bimal@vblsolution.com" 
                        className="text-gray-600 hover:text-vbl-blue"
                      >
                        victor.bimal@vblsolution.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 