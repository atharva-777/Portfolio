'use client'

import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FiArrowUpRight, FiSend } from 'react-icons/fi'
import Reveal from './Reveal'

const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ID ?? 'jadhavatharva499@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('The form is unavailable right now. Please email me directly.')
      return
    }

    setSending(true)
    setStatus('')
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        to_email: emailAddress,
        message: form.message,
      }, publicKey)
      setForm({ name: '', email: '', message: '' })
      setStatus('Thanks for reaching out. I’ll be in touch soon.')
    } catch {
      setStatus('Your message could not be sent. Please email me directly instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact-section section-wrap">
      <div className="content-width contact-layout">
        <Reveal className="contact-copy">
          <p className="section-index">04 <span>/ CONTACT</span></p>
          <h2 className="contact-title">Have a good<br />problem? <em>Let&apos;s talk.</em></h2>
          <p className="contact-description">I&apos;m interested in thoughtful teams, useful products, and hard engineering problems.</p>
          <a className="contact-email" href={`mailto:${emailAddress}`}>{emailAddress}<FiArrowUpRight aria-hidden="true" /></a>
          <div className="contact-presence"><span className="status-dot" /> Open to a good conversation</div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.12}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input name="name" autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
            <label>What&apos;s on your mind?<textarea name="message" rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required /></label>
            <div className="form-bottom">
              <button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send a note'} <FiSend aria-hidden="true" /></button>
              <p role="status" aria-live="polite">{status}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
