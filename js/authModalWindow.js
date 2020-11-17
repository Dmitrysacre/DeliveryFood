function authorized() {

    const logOut = () => {
      loginValue = null
      localStorage.removeItem('user')
  
      buttonAuth.style.display = ''
      userName.style.display = ''
      buttonOut.style.display = ''
      cartButton.style.display = ''
  
      buttonOut.removeEventListener('click', logOut)
  
      isAuth()
    }
  
    userName.textContent = loginValue
  
    buttonAuth.style.display = 'none'
    userName.style.display = 'inline'
    buttonOut.style.display = 'flex'
    cartButton.style.display = 'flex'
  
    buttonOut.addEventListener('click', logOut)
  }
  
  function unauthorized() {
  
    const logIn = event => {
      if (authLoginInput.value) {
        event.preventDefault()
        loginValue = authLoginInput.value
        toggleModalAuth()
        localStorage.setItem('user', loginValue)
        buttonAuth.removeEventListener('click', toggleModalAuth)
        closeAuth.removeEventListener('click', toggleModalAuth)
        logInForm.removeEventListener('submit', logIn)
        logInForm.reset()
        isAuth()
      } else {
        authLoginInput.style.borderColor = 'red'
        event.preventDefault()
      }
    }
  
    buttonAuth.addEventListener('click', toggleModalAuth)
    closeAuth.addEventListener('click', toggleModalAuth)
    logInForm.addEventListener('submit', logIn)
  }