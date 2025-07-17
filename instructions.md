Use the following instructions to build a modern industrial maintenance website.

- Next.js Version: 13.4.12 (specific version to avoid hydration issues)
- React: 18.2.0
- Node.js: >=14.x
- Package Manager: npm (not yarn)

  Install the following dependencies:

```bash
npm install autoprefixer@^10.0.0 \
            lucide-react@^0.244.0 \
            next@13.4.12 \
            postcss@^8.4.0 \
            react@18.2.0 \
            react-dom@18.2.0 \
            tailwindcss@^3.2.0
```

## Technical Foundation

### 1. Project Architecture

```
/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and routing
├── public/             # Static assets
├── styles/            # Global styles and Tailwind
└── utils/             # Helper functions if needed
```

3. Configuration Files Setup:

- Create `next.config.js` for image domains
- Setup `tailwind.config.js` with custom theme
- Configure `postcss.config.js`
- Add global styles in `styles/globals.css`

### 4. Key Technical Considerations

3. **Responsive Design**

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

4. **State Management**

- Use React hooks for local state
- Implement context for theme/global states
- Avoid unnecessary re-renders

5. **Animation Implementation**

- Use CSS transitions for simple animations
- Implement smooth scroll behavior
- Add hover effects using Tailwind
- Transition timings example:
  ```css
  transition-duration: 300ms
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  ```

### 5. Development Best Practices

1. **Code Organization**

- Keep components small and focused
- Use consistent file naming
- Implement proper commenting
- Follow DRY principle

2. **Styling Methodology**

- Use Tailwind utility classes
- Implement consistent spacing
- Follow color system
- Maintain responsive design patterns

3. **Performance Considerations**

- Minimize third-party dependencies
- No Typescript

4. **Image Optimization**

- Next.js Image component usage throughout the app
- Remote domains configured in next.config.js for freepik.com
- Gradient overlays for text contrast
- Priority loading for hero first image

5. **Layout Optimization**

- Responsive grid layouts (1 column mobile, 3 columns desktop)
- Tailwind's container class for consistent spacing
- Mobile-first approach with md: breakpoint
- Proper spacing units through Tailwind classes

6. **Component Structure**

- Modular component architecture
- Reusable button styles
- Consistent styling patterns
- Clean component hierarchy

## Components Architecture

## Components Architecture

### 1. HeroSlider Component

Purpose: Create a full-screen image slider showcasing VBL SOLUTION's industrial services with overlay text and CTA buttons.

Requirements:

- Use Next.js Image component for optimization
- Implement auto-rotating slides (5-second intervals)
- Include overlay gradient for text contrast
- Add navigation dots
- Smooth transitions between slides

Key Features:

- Full viewport height
- Gradient overlay (black to transparent)
- Centered technical messaging (e.g., maintenance, mise en service)
- CTA buttons like "Contactez-nous" or "Nos Services" with hover effects
- Slide indicators

Animation Specifications:

- Slide transition duration: 500ms
- Fade effect with ease-in-out
- Button hover scale: 1.02

---

### 2. StorySection Component

Purpose: Present the origin, values, and mission of VBL SOLUTION with an image and engaging text.

Requirements:

- Two-column layout (mobile responsive)
- Custom button with shadow effect
- Image hover animation
- Gradient overlay on image

Key Features:

- Split layout (text/image)
- Decorative border accents
- Custom animated button ("En savoir plus")
- Image hover zoom effect (ex: technicien en intervention)

Styling Notes:

- Use industrial accent colors for highlights
- Implement before/after pseudo-elements for button hover
- Add shadow effects on hover
- Maintain consistent spacing and layout integrity

---

### 3. ReviewSection Component

Purpose: Display client testimonials (B2B) about VBL SOLUTION’s services in a responsive grid.

Requirements:

- Create a reviews data array with name, review text, and rating
- Implement responsive grid layout (1 column mobile, 3 columns desktop)
- Add hover animations for cards
- Include star rating display

Key Features:

- Review cards with hover scaling (1.05)
- Left border accent on review text using brand color
- Top border separator for author info
- Star rating using repeated ★ character

Styling Notes:

- Card background: light industrial gray
- Text color: dark gray or black
- Border accents using company accent color (blue/steel)
- Transition duration: 300ms


### 4. Services Page Component

Purpose: Display VBL SOLUTION's services in an informative and attractive grid layout.

Requirements:

- Create services array with title, description, image, and tags (e.g., Maintenance, Mise en service, Formation)
- Implement responsive grid (1 column mobile, 2 columns desktop)
- Add image hover effects
- Include CTA buttons like “Demander un devis”

Key Features:

- Service cards with hover scaling
- Image zoom on hover
- Tag badges (e.g., "Sur-mesure", "Urgence", "Préventive")
- Custom animated CTA buttons
- Accent-colored titles or icons

Animation Specifications:

- Card hover scale: 1.05
- Image hover scale: 1.10
- Button hover effect: offset shadow
- Transition durations: 300–500ms

---

### 5. Navigation Component

Purpose: Provide consistent navigation across all VBL SOLUTION pages.

Requirements:

- Sticky positioning
- Transparent to solid background on scroll
- Mobile responsive menu
- Smooth scroll for anchor links

Key Features:

- VBL LOGO (see Logo Component section)
- Navigation links (Accueil, Services, Réalisations, Contact)
- Underline animation on hover
- Mobile hamburger menu
- Background transition on scroll

Animation Specifications:

- Background transition: 300ms
- Link hover effect: 200ms
- Mobile menu transition: 300ms

---

### 6. Footer Component

Purpose: Display VBL SOLUTION's contact details, links, and social media.

Requirements:

- Responsive layout
- Social media icons (LinkedIn, GitHub, Email)
- Copyright information
- Quick navigation links

Key Features:

- Icons from Lucide React
- Hover effects on links and icons
- Responsive columns
- Company logo on the left or centered

Styling Notes:

- Dark background (`bg-gray-900`)
- Light text (`text-gray-100`)
- Accent hover colors (e.g., blue or yellow)
- Consistent spacing matching site layout

### 7. Logo Component

Purpose: Display the official VBL SOLUTION logo across the site as a consistent brand identifier.

Requirements:

- Use the provided logo image (`/logo_vbl.png`)
- Import via Next.js `<Image />` component for optimization
- Include `alt` text: "Logo VBL SOLUTION"
- Responsive sizing with defined max height
- Use in navigation bar and footer

Key Features:

- SVG or PNG logo for clarity at all screen sizes
- Position logo left in navbar and centered or left in footer
- Hover scale effect if needed (`hover:scale-105`)
- Optional: Wrap logo in a link to homepage

Implementation Notes:

- Place the logo image in the `public/` directory (`public/logo_vbl.png`)
- Example usage:

```tsx
import Image from 'next/image'

<Image
  src="/logo_vbl.png"
  alt="Logo VBL SOLUTION"
  width={160}
  height={160}
  className="h-12 w-auto object-contain"
/>


## Asset Configuration

### 1. Image Assets

All images used on the site are original and taken by VBL SOLUTION.

#### Hero Slider Images



```
- Image 1: /Vic_devant_machine_empaquettage.jpg
- Image 2: /Vic_modifie_panneau_thimon.jpg
- Image 3: /Vic_sur_boitier_elec.jpg
```




These images are placed in the `/public/` directory and used in the HeroSlider to showcase real interventions on production lines.

---

### 2. Color System

Palette personnalisée dérivée du logo officiel VBL SOLUTION.

```css
:root {
  --primary-color: #CD291E;    /* Rouge vif - clé plate sur engrenage */
  --secondary-color: #FDB912;  /* Jaune sécurité - élément de contraste */
  --dark-color: #2D2D2D;       /* Gris anthracite - texte principal */
  --light-color: #F7F7F7;      /* Blanc cassé - fonds clairs */
  --neutral-grey: #58595B;     /* Gris moyen - textes secondaires */
}


Usage in Tailwind:
// tailwind.config.js

```javascript:tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vbl-red": "#CD291E",
        "vbl-yellow": "#FDB912",
        "vbl-dark": "#2D2D2D",
        "vbl-light": "#F7F7F7",
        "vbl-grey": "#58595B",
      }
    }
  },
  plugins: [],
}

```

### 3. Image Configuration

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
}
