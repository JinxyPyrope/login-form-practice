import React, { useState } from "react"

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  //Creates JSX code for conditional error message
  const renderErrorMessage = name => name === errorMessages.name && <div className="error">{errorMessages.message}</div>

  return <div>Hello World</div>
}

export default Login
