const controller = {}
controller.register = ((data)=> {
    // Check error for first name
    if(data.firstName === ''){
        document.getElementById('first-name-error').innerText = 'Please input your first name!'
    }else{
        document.getElementById('first-name-error').innerText = ''
    }

    // sử dụng hàm setErrorMessage và toán tử 3 ngôi để validate
    // Check error for last name
    view.setErrorMessage('last-name-error', data.lastName === '' ? 'Please input your last name' : '')

    // Check error for email
    view.setErrorMessage('email-error', data.email === '' ? 'Please input your email!' : '')

    // Check error for password
    view.setErrorMessage('password-error', data.password === '' ? 'Please input your password!' : '')


    // Check error for confirm password
    if(data.confirmPassword === ''){
        document.getElementById('confirm-password-error').innerText = 'Please input your confirm password!'
    }else if(data.confirmPassword !== data.password){
        document.getElementById('confirm-password-error').innerText = 'Please input the same password!'
    }else{
        document.getElementById('confirm-password-error').innerText = ''
    }

    if(data.firstName !== '' 
    && data.lastName !== ''
    && data.email !== ''
    && data.password !== ''
    && data.password === data.confirmPassword){
        model.register(data)
    }
})

controller.login = ((data) => {
    // Check error for email
    view.setErrorMessage('email-error', data.email === '' ? 'Please input your email!' : '')
    
    // Check error for password
    view.setErrorMessage('password-error', data.password === '' ? 'Please input your password!' : '')
    
    if(data.email !== '' && data.password !== ''){
        model.login(data)
    }
})

controller.showMessage = async () => {
    const conversationID = "iuj9mBaBVrssYRkLlg3V"
    const response = await firebase.firestore().collection('conversations').doc(conversationID).get()
    const getDocument = getOneDocument(response)
    // get title from firebase and change conversation title
    const conversationTitle = getDocument.title
    document.querySelector('.conversation-title').innerText = conversationTitle

    // get message from firebase and print 
    const messageContent = getDocument.messages
    for(const item of messageContent){
        view.addMessage(item)
    }
}

controller.newConversation = ({title, email}) => {
    // check error for title conversation
    view.setErrorMessage('create-conversation-title-error', title.trim() === '' ? 'Please input conversation name' : '')
    // check error for email friend
    view.setErrorMessage('create-conversation-email-error', email.trim() === '' ? 'Please input friend email' : '')
    
    if(title.trim() !== '' && email.trim() !== '') {
      model.newConversation({title, email})
    }
  }

controller.addUsers = ({email}) => {
    //check error for email
    if(email.trim() === ''){
        view.setErrorMessage('error-email', 'Please input friend email')
    }else{
        model.addNewUser({email})
    }
}
