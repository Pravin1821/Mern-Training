import React from 'react'
import { useState } from 'react'
import './Form.css'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea name="message" value={formData.message} onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />  
      </form>
    </div>
  )
}

export default Form
