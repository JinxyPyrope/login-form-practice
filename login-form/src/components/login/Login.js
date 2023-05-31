import React, { useState } from "react"

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  //Creates JSX code for conditional error message
  const renderErrorMessage = name => name === errorMessages.name && <div className="error">{errorMessages.message}</div>

  const handleSubmit = event => {
    // Prvenet page reload
    event.preventDefault()
  }

  const database = [{username: "user1", passworrd: "pass1"}]

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="text" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Login
