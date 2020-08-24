const model = {}

model.register = async (data) => {
    try{
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        var user = firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        view.setActiveScreen('loginPage')
    }catch(err){
        alert(err.message)
        console.log(err)
    }
}

model.login = async (data) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        console.log(response)
        // if (response && response.user.emailVerified) {
        //     // Login success, redirect to chat page
        //     model.currentUser = {
        //         email: response.user.emailVerified,
        //         displayName: response.user.displayName
        //     }
        //     console.log('Login Sucess')
        //     view.setActiveScreen('chatPage')
        // }else{
        //     alert('Please verify your email')
        // }
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}