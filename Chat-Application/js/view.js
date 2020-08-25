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
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log(sendMessageForm.message.value)
                const message = {
                    content: sendMessageForm.message.value,
                    owner: model.currentUser.email
                }
                const messageFormBot = {
                    content: sendMessageForm.message.value,
                    owner: 'Bot'
                }
                //check empty message
                if(sendMessageForm.message.value === ''){
                    console.log("Empty message");
                }else{
                    view.addMessage(message)
                    view.addMessage(messageFormBot)
                }
                //after click submit button, input form = null
                sendMessageForm.message.value = ''
            })
        break;
    }
}

view.setErrorMessage = (elementID, content) => {
    document.getElementById(elementID).innerText = content
}

view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = 
        `<div class="content">${message.content}</div>`
    }else{
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `   
    }
    console.log(messageWrapper)
    document.querySelector('.list-message').appendChild(messageWrapper)
}