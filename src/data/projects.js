import mabayuanImg from '../assets/images/mabayuan-express.webp'
import portfolioImg from '../assets/images/this-portfolio.webp'

export const projects = [
  {
    id: 'mabayuan-express',
    title: 'Mabayuan Express',
    subtitle: 'Barangay Document Request Portal',
    description:
      'An online portal for Barangay Mabayuan, Olongapo City. Residents request documents like Barangay Clearance, Cedula, and Certificate of Residency, then track their status. Staff and the captain review and process requests from their own dashboards, with email updates at every step and a printable official document at the end.',
    features: [
      'Online document requests with live status tracking',
      'Role-based dashboards for residents, staff, captain, and admin',
      'Email notifications at every step of a request',
      'Printable official documents once a request is released',
    ],
    role: 'Built solo in my 2nd year and continued improving it in 3rd year, from planning and design to deployment.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Supabase'],
    image: mabayuanImg,
    imageAlt:
      'Mabayuan Express home page showing the headline about barangay document requests, the list of available services, and a Philippine holidays calendar',
    liveUrl: 'https://mabayuan-express.onrender.com/',
    liveNote: 'Hosted on a free server, so it may take up to a minute to wake up on the first visit.',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'This website',
    description:
      'The site you are viewing now: a responsive, multi-page portfolio with client-side routing, a reusable component structure, a 404 page, and a validated contact form.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Vercel'],
    image: portfolioImg,
    imageAlt: 'Home page of this portfolio with Rafael’s portrait and introduction',
    codeUrl: 'https://github.com/RafaelVillacrusis',
  },
]
