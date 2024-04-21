import React from 'react'
const forms = ({formData, setFormdata, setError}) => {
  
  if (formData.name === '' && formData.email === '') {
    setError(true)
  } else {
    setError(false)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormdata({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormdata({...formData, email: e.target.value})}
        />
      </div>
    </div>
  )
}
export default forms
