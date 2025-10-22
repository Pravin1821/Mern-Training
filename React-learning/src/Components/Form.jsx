import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // clear single-field error while typing
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSuccess(false)
  }

  const validate = () => {
    const err = {}
    if (!formData.name.trim()) err.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      err.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please enter a valid email.'
    }
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length) {
      setErrors(validation)
      setSuccess(false)
      return
    }

    // In a real app you'd send `formData` to a server here.
    console.log('Form submitted:', formData)
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <div className="form">
      <div className="form-card">
        <h3 className="form-title">Get in touch</h3>
        <p className="form-sub">Have a question or want to collaborate? Send a message.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="actions">
            <button type="submit" className="btn-primary">Send message</button>
            {success && <div className="success">Thanks — your message was sent!</div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
