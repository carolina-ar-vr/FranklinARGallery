import firebase from "firebase/app";
import "firebase/database";

let config = {
    apiKey: "AIzaSyArx-pPN4YdgUL2faFmUUStZUwHVo0vb2U",
    authDomain: "franklinar-87e49.firebaseapp.com",
    databaseURL: "https://franklinar-87e49-default-rtdb.firebaseio.com",
    projectId: "franklinar-87e49",
    storageBucket: "franklinar-87e49.appspot.com",
    messagingSenderId: "301630218147",
    appId: "1:301630218147:web:29b01fdb57ceff6bc74416",
    measurementId: "G-CMR7ZDXJK4"
  };

firebase.initializeApp(config);

export default firebase.database();