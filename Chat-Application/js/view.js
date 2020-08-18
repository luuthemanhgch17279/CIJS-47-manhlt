const view = {} 
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'registerPage' :
            document.getElementById('app').innerHTML = component.registerPage
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
        break;
    }
}