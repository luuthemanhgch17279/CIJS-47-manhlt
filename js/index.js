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
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user)
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        if (user.emailVerified) {
          view.setActiveScreen('chatPage')
        }else{
          alert('Please verify your email')
          view.setActiveScreen('loginPage')
        }
      }else{
        view.setActiveScreen('loginPage')
      }
    })
}

const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}

const getManyDocument = (response) => {
  const listData = []
  for(const doc of response.docs){
    listData.push(getOneDocument(doc))
    // console.log(getOneDocument(doc))
  }
  return listData
}

const templateFirestore = async () => {
  // =========================CRUD==============================
  // READ
  // get one 
  const docID = 'iuj9mBaBVrssYRkLlg3V'
  const response = await firebase.firestore().collection('conversations').doc(docID).get()
  const user = getOneDocument(response)
  console.log(user.title)

  // get many
  const responseMany = await firebase.firestore().collection('users').where('age','==', 20).get()
  // const firstUser = getOneDocument(responseMany.docs[1])
  // console.log(firstUser)
  const users = getManyDocument(responseMany)
  // console.log(users)

  // CREATE
  const dataToCreate = {
    age: 100,
    name: 'ABC'
  }
  //firebase.firestore().collection('users').add(dataToCreate)
  
  // UPDATE
  const idToUpdate = 'Ez1bjXtY3Uj9jpuv4dDz'
  const dataToUpdate = {
    name: 'ITZY',
    phone: firebase.firestore.FieldValue.arrayUnion('09828')
  }

  firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)

  //DELETE
  // const idToDelete = 'XYHP2CPB6MggoFDWwuqz'
  // firebase.firestore().collection('users').doc(idToDelete).delete()
}
