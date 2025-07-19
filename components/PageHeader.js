import Image from 'next/image';
import { useRouter } from 'next/router';

const backgroundMapping = {
  '/': {
    image: '/industrial-automation.jpg',
    overlay: 'bg-gradient-to-r from-black/70 to-black/50',
  },
  '/services': {
    image: '/factory-line.jpg',
    overlay: 'bg-gradient-to-r from-black/70 to-black/50',
  },
  '/a-propos': {
    image: '/maintenance-tech.jpg',
    overlay: 'bg-gradient-to-b from-black/70 to-black/50',
  },
  '/contact': {
    image: '/technical-support.jpg',
    overlay: 'bg-gradient-to-r from-black/70 to-black/50',
  },
  '/devis': {
    image: '/control-panel.jpg',
    overlay: 'bg-gradient-to-r from-black/70 to-black/50',
  },
  '/informations-legales': {
    image: '/packaging-automation.jpg',
    overlay: 'bg-gradient-to-r from-black/70 to-black/50',
  },
  '404': {
    image: '/production-line.jpg',
    overlay: 'bg-gradient-to-b from-black/80 to-black/60',
  },
};

export default function PageHeader({ title, subtitle, customBackground }) {
  const router = useRouter();
  const path = router.pathname;
  const background = customBackground || backgroundMapping[path] || backgroundMapping['404'];

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={background.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${background.overlay}`} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center py-20 md:py-32 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
} 