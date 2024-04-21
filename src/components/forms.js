import React from 'react'
const forms = ({formData, setFormdata, setError}) => {
  if (formData.userName === '' && formData.password === '') {
    setError(true)
  } else {
    setError(false)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={formData.userName}
          onChange={(e) => setFormdata({...formData, userName: e.target.value})}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="PassWord"
          value={formData.password}
          onChange={(e) => setFormdata({...formData, password: e.target.value})}
        />
      </div>
    </div>
  )
}
export default forms
