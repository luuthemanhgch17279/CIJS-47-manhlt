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
        document.getElementById('last-name-error').innerText ='Please input your last name!'
    }else{
        document.getElementById('last-name-error').innerText =''
    }

    // Check error for email
})