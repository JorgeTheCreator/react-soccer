import firebase from "firebase/app"
import "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyCrjzdv_hdwbuo0-ayyIrKEbCzdHvhv-Vo",
    authDomain: "m-city-f8870.firebaseapp.com",
    databaseURL: "https://m-city-f8870.firebaseio.com",
    projectId: "m-city-f8870",
    storageBucket: "m-city-f8870.appspot.com",
    messagingSenderId: "970528630990"
  };

  firebase.initializeApp(config)

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}

