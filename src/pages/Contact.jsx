import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { socialLinks } from '../data/profile.js'

export default function Contact() {
  usePageTitle('Contact')

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk.">
        Have a project, an internship opportunity, or just want to say hi? Send me a message or reach me on any of
        these.
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal as="section" aria-labelledby="find-me">
          <h2 id="find-me" className="mb-4 text-2xl font-medium">
            Find me online
          </h2>
          <SocialLinks links={socialLinks} variant="cards" />
        </Reveal>
        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </>
  )
}
