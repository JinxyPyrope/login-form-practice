import React, { useState } from "react"

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  //User Login Test Info
  const database = [
    { username: "user1", passworrd: "pass1" },
    { username: "user2", passworrd: "pass2" }
  ]

  //Error Messages
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  }

  //Creates JSX code for conditional error message
  const renderErrorMessage = name => name === errorMessages.name && <div className="error">{errorMessages.message}</div>

  const handleSubmit = event => {
    // Prvenet page reload
    event.preventDefault()

    let { uname, pass } = document.forms[0]

    const userData = database.find(user => user.username === uname.value)

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    }
  }

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
