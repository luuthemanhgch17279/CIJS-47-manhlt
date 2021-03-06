const view = {}
view.setActiveScreen = (screenName, fromCreateConversation = false) => {
    switch (screenName) {
        case 'registerPage':
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

        case 'loginPage':
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
                    owner: model.currentUser.email,
                    createdAt: new Date().toISOString()
                }
                //check empty message
                if (sendMessageForm.message.value.trim() === '') {
                    console.log("Empty message");
                } else {
                    model.addMessage(message)
                    sendMessageForm.message.value = ''
                }
            })
            const redirectCreateConversation = document.getElementById('create-conversation')
            redirectCreateConversation.addEventListener('click', () => {
                view.setActiveScreen('ConversationPage')
            })

            const addNewUserForm = document.getElementById('add-user-form')
            addNewUserForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: addNewUserForm.email.value,
                }
                controller.addUsers(data)
            })

            if (fromCreateConversation === true) {
                view.showCurrentConversation()
                view.showConversations()
            } else{
                model.getConversations()
                model.listenConversationChange()
            }
            break;
        case 'ConversationPage':
            document.getElementById('app').innerHTML = components.ConversationPage
            const redirectChatPage = document.getElementById('redirect-to-chat')
            redirectChatPage.addEventListener('click', () => {
                view.setActiveScreen('chatPage', true)
            })
            const newConversation =  document.getElementById('create-conversation-form')
            newConversation.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    title: newConversation.title.value,
                    email: newConversation.email.value
                }
                controller.newConversation(data)
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
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    console.log(messageWrapper)
    document.querySelector('.list-message').appendChild(messageWrapper)
}

view.showCurrentConversation = () => {
    document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
    document.querySelector('.list-message').innerHTML = ''
    for (let message of model.currentConversation.messages) {
        view.addMessage(message)
    }
    document.querySelector('.list-users').innerHTML = ''
    for(let user of model.currentConversation.users){
        view.addUser(user)
    }
    view.scrollToEndElement()
}

view.scrollToEndElement = () => {
    const element = document.querySelector('.list-message')
    element.scrollTop = element.scrollHeight
}

view.showConversations = () => {
    for (let conversation of model.conversations) {
        view.addConversation(conversation)
    }
}
view.addConversation = (conversation) => {  
    const conversationWrapper = document.createElement('div')
    conversationWrapper.classList.add('conversation')
    if(conversation.id === model.currentConversation.id){
        conversationWrapper.classList.add('current')
    }
    conversationWrapper.innerHTML = 
       `<div class="left-conversation-title">${conversation.title}</div>
        <div class="num-of-user">${conversation.users.length} users </div>`
    conversationWrapper.addEventListener('click', () => {
        model.currentConversation = model.conversations.filter(item => item.id === conversation.id)[0]
        view.showCurrentConversation()
        document.querySelector('.conversation.current').classList.remove('current')
        conversationWrapper.classList.add('current')
    })
    document.querySelector('.list-conversations').appendChild(conversationWrapper)   
}

view.addUser = (user) => {
    const userWrapper = document.createElement('div')
    userWrapper.classList.add('user-email')
    userWrapper.innerHTML = user
    document.querySelector('.list-users').appendChild(userWrapper)
}