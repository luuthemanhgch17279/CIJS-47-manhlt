const components = {}

components.registerPage = 
    `<div class="register-container">
        <form id="register-container">
            <div class="register-header">MindX Chat</div>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First name" name="firstName">
                    <div class="error" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last name" name="lastName">
                    <div class="error" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm password" name="confirmPassword">
                <div class="error" id="confirm-password-error"></div>
            </div>
            <div class="form-action">
                <span class="cursor-pointer" id="redirect-login-page">
                    Already have an account? Login
                </span>
                <button class="btn cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>`

components.loginPage =
    `<div class="login-container">
        <form id="login-form">
            <div class="login-header">MindX Chat</div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="form-action">
                <span class="cursor-pointer" id="redirect-register-page"> 
                    Don't have an account? Register
                </span>
                <button class="btn cursor-pointer" type="submit">Login</button>
            </div>
        </form>
    </div>`

components.chatPage = 
    `<div class="chat-container">
        <div class="header">
            MindX chat
        </div>
        <div class="main">
            <div class="conversation-detail">
                <div class="conversation-title">First conversation</div>
                <div class="list-message"></div>
                <form id="send-message-form">
                    <div class="input-wrapper">
                        <input type="text" placeholder="Type of message" name="message"></input>
                    </div>
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>`

    