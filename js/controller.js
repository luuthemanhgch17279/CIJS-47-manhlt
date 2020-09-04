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
    if(title.trim() === '') {
      view.setErrorMessage('create-conversation-title-error', 'Please input conversation name')
    } else {
      view.setErrorMessage('create-conversation-title-error', '')
    }

    if(email.trim() === '') {
      view.setErrorMessage('create-conversation-email-error','Please input friend email')
    } else {
      view.setErrorMessage('create-conversation-email-error', '')
    }
    if(title.trim() !== '' && email.trim() !== '') {
      const data = {
        createdAt: (new Date()).toISOString(),
        messages: [],
        title: title,
        users: [email, model.currentUser.email]
      }
      model.newConversation(data)
    }
  }
