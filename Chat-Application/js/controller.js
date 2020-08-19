const controller = {}
controller.register = ((data)=> {
    // Check error for first name
    if(data.firstName === ''){
        document.getElementById('first-name-error').innerText = 'Please input your first name!'
    }else{
        document.getElementById('first-name-error').innerText = ''
    }

    // Check error for last name
    if(data.lastName === ''){
        document.getElementById('last-name-error').innerText = 'Please input your last name!'
    }else{
        document.getElementById('last-name-error').innerText = ''
    }

    // Check error for email
    if(data.email === ''){
        document.getElementById('email-error').innerText = 'Please input your email!'
    }else{
        document.getElementById('email-error').innerText = ''
    }

    // Check error for password
    if(data.password === ''){
        document.getElementById('password-error').innerText = 'Please input your password!'
    }else{
        document.getElementById('password-error').innerText = ''   
    }

    // Check error for confirm password
    if(data.confirmPassword === ''){
        document.getElementById('confirm-password-error').innerText = 'Please input your confirm password!'
    }else if(data.confirmPassword !== data.password){
        document.getElementById('confirm-password-error').innerText = 'Please input the same password!'
    }else{
        document.getElementById('confirm-password-error').innerText = ''
    }
})

controller.login = ((data) => {
    // Check error for email
    if(data.email === ''){
        document.getElementById('email-error').innerText = 'Please input your email!'
    }else{
        document.getElementById('email-error').innerText = ''
    }
    
    // Check error for password
    if(data.password === ''){
        document.getElementById('password-error').innerText = 'Please input your password!'
    }else{
        document.getElementById('password-error').innerText = ''   
    }
})