import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyApZu6EALazP78vg6i6TOA9GziipXdTxd0",
    authDomain: "login-epm.firebaseapp.com",
    databaseURL: "https://login-epm-default-rtdb.firebaseio.com",
    projectId: "login-epm",
    storageBucket: "login-epm.appspot.com",
    messagingSenderId: "1061107555846",
    appId: "1:1061107555846:web:30005b049c477ae0fb2d87",
    measurementId: "G-1ECBPE8NVC"
  }

  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()

  
  firebase.auth().signInWithEmailAndPassword("teste123@gmail.com", "123456").then(response => {
    console.log("sucess", response)
}).catch(error => {
    console.log("error", error)
})

var login = document.getElementById("login")

if (login) {
login.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert('Usuário logado com sucesso!');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
    });

  });

}

export { firebase, auth, app }