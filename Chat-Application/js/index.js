window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCRugn2ah5E3LBvHjgyuBEjx3DoxR4nwvw",
        authDomain: "chat-application-19498.firebaseapp.com",
        databaseURL: "https://chat-application-19498.firebaseio.com",
        projectId: "chat-application-19498",
        storageBucket: "chat-application-19498.appspot.com",
        messagingSenderId: "143451620783",
        appId: "1:143451620783:web:5f4f6d58f0d5970c931b5a",
        measurementId: "G-1LKH59BL5Y"
      };
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app())
    view.setActiveScreen('loginPage')
}

