const view = {} 
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'registerPage' :
            document.getElementById('app').innerHTML = components.registerPage
            const registerForm = document.getElementById("register-container")
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                controller.register(data)
            })
            const redirectLoginPage = document.getElementById("redirect-login-page")
            redirectLoginPage.addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
        break;
        case 'loginPage' :
            document.getElementById('app').innerHTML = components.loginPage
            const loginForm = document.getElementById("login-form")
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            const redirectRegisterPage = document.getElementById("redirect-register-page")
            redirectRegisterPage.addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
        break;
        case 'chatPage':
            document.getElementById('app').innerHTML = components.chatPage
            document.getElementById('header').innerHTML =
             `Welcome ${firebase.auth().currentUser.displayName}`
        break;
    }
}

view.setErrorMessage = (elementID, content) => {
    document.getElementById(elementID).innerText = content
}