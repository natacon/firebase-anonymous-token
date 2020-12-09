// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
// require("firebase/firestore");

const config = require("./config")

// Initialize Firebase
firebase.initializeApp(config.firebaseConfig);

firebase.auth().signInAnonymously()
  .then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.getIdTokenResult()
          .then((result) => {
            // console.log(result);
            console.log(result.token);
          })
      } else {
        // User is signed out
        console.log("signed out.")
      }
    });
  })
  .catch((error) => {
    console.log(error.code, error.message)
  })
