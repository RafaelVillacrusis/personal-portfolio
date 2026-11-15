import PageHeader from '../components/PageHeader.jsx'
import Button from '../components/Button.jsx'
import Tag from '../components/Tag.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { achievements, education, instruments, softSkills, technicalSkills } from '../data/profile.js'
import drumsImg from '../assets/images/rafael-drums.webp'
import bassImg from '../assets/images/rafael-bass.webp'

function Card({ title, children, delay = 0 }) {
  return (
    <Reveal
      as="section"
      delay={delay}
      className="rounded-3xl border border-line bg-surface p-6 transition-shadow duration-500 hover:shadow-lg sm:p-8"
    >
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  )
}

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHeader eyebrow="About me" title="Curious about tech since I was a kid.">
        I'm Rafael M. Villacrusis, a 3rd-year BSIT student at Gordon College in Olongapo City.
      </PageHeader>

      <div className="mx-auto max-w-6xl space-y-6 px-5 pb-20 sm:px-8">
        {/* Background */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card title="My story">
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Ever since I was a kid, I've been interested in technology, and that interest is what led me to
                Information Technology. Today I'm a 3rd-year BSIT student with a focus on programming, web development,
                and continuous learning.
              </p>
              <p>
                In my 2nd year, I built <span className="font-semibold text-ink">Mabayuan Express</span> on my own: a
                document request portal for a real barangay, with role-based dashboards, email notifications, and a
                database behind it. Building it taught me how to take a project from planning all the way to deployment.
              </p>
              <p>
                I'm always eager to sharpen my technical skills, explore new technologies, and gain experiences that
                help me grow in the IT field.
              </p>
            </div>
          </Card>

          <Card title="Education" delay={120}>
            <p className="font-semibold">{education.degree}</p>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.status}</p>

            <h3 className="mt-8 text-lg font-medium">Achievements</h3>
            <ul className="mt-3 divide-y divide-line">
              {achievements.map((a) => (
                <li key={a.title} className="flex items-start justify-between gap-4 py-3">
                  <span>
                    <span className="block font-semibold">{a.title}</span>
                    {a.detail && <span className="block text-sm text-muted">{a.detail}</span>}
                  </span>
                  <span className="shrink-0 text-sm text-muted">{a.year}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Skills */}
        <Card title="Skills">
          <h3 className="font-sans text-xs font-semibold tracking-[0.15em] text-muted uppercase">Technical</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {technicalSkills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
          <h3 className="mt-6 font-sans text-xs font-semibold tracking-[0.15em] text-muted uppercase">Soft skills</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
        </Card>

        {/* Music */}
        <Reveal as="section" className="overflow-hidden rounded-3xl bg-ink text-cream">
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:items-center md:p-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sand uppercase">Beyond code</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Music keeps me grounded.</h2>
              <p className="mt-4 leading-relaxed text-cream/80">
                Outside the classroom, I play in our church worship team. Playing in a band taught me a lot of the same
                things good teams need: listening, timing, and showing up prepared.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {instruments.map((i) => (
                  <li key={i} className="rounded-full border border-cream/25 px-3 py-1 text-xs font-medium">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={drumsImg}
                alt="Rafael playing drums on stage under blue lights"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover transition-transform duration-500 ease-out hover:-rotate-2 hover:scale-[1.03]"
              />
              <img
                src={bassImg}
                alt="Rafael playing an orange bass guitar on a stage with a colorful painted backdrop"
                loading="lazy"
                className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover object-[center_75%] transition-transform duration-500 ease-out hover:scale-[1.03] hover:rotate-2"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button to="/projects" icon="arrow">
            See my projects
          </Button>
          <Button to="/contact" variant="secondary">
            Contact me
          </Button>
        </div>
      </div>
    </>
  )
}
