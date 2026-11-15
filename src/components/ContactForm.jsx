import { useState } from 'react'
import { profile } from '../data/profile.js'
import Icon from './Icon.jsx'

// If a Formspree form ID is set in .env (VITE_FORMSPREE_ID), messages are sent
// straight to Rafael's inbox. Without it, the form opens the visitor's email app
// with the message already filled in, so the form always works.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const emptyForm = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(values.email)) errors.email = 'Please enter a valid email, like name@example.com.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  else if (values.message.trim().length < 10)
    errors.message = 'Your message is a bit short. Please add a few more words.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first field with a problem
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus()
      return
    }

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setValues(emptyForm)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `mt-2 w-full rounded-xl border bg-cream px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:outline-2 focus:outline-offset-0 focus:outline-accent ${
      errors[name] ? 'border-red-700' : 'border-line'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-medium">Send a message</h2>
      <p className="mt-1 text-sm text-muted">All fields are required.</p>

      <div className="mt-6 space-y-5">
        {[
          { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name', placeholder: 'Juan Dela Cruz' },
          { name: 'email', label: 'Your email', type: 'email', autoComplete: 'email', placeholder: 'name@example.com' },
        ].map((f) => (
          <div key={f.name}>
            <label htmlFor={`contact-${f.name}`} className="text-sm font-semibold">
              {f.label}
            </label>
            <input
              id={`contact-${f.name}`}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={values[f.name]}
              onChange={handleChange}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `contact-${f.name}-error` : undefined}
              className={fieldClass(f.name)}
            />
            {errors[f.name] && (
              <p id={`contact-${f.name}-error`} className="mt-2 animate-fade-in text-sm text-red-800">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Hi Rafael, I'd like to talk about..."
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`${fieldClass('message')} resize-y`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-2 animate-fade-in text-sm text-red-800">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
        {status !== 'sending' && (
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <div aria-live="polite" className="mt-4">
        {status === 'success' && (
          <p className="animate-fade-up rounded-xl border border-green-800/20 bg-green-50 p-4 text-sm text-green-900">
            {FORMSPREE_ID
              ? "Thank you! Your message was sent. I'll get back to you soon."
              : 'Your email app should open with your message ready to send. If nothing happened, email me directly at ' +
                profile.email +
                '.'}
          </p>
        )}
        {status === 'error' && (
          <p className="animate-fade-up rounded-xl border border-red-800/20 bg-red-50 p-4 text-sm text-red-900">
            Sorry, something went wrong and your message wasn't sent. Please try again, or email me directly at{' '}
            <a href={`mailto:${profile.email}`} className="font-semibold underline">
              {profile.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
