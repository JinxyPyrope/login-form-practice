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

    //Search for user data
    const userData = database.find(user => user.username === uname.value)

    //Check for match
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      //No Username found
      setErrorMessages({ name: "uname", message: errors.uname })
    }
  }

  const renderForm = (
    <div className="form">
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

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

export default Login
