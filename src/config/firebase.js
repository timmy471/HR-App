import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUeaTSBtw8NxfQ9Lob01Egd2in1miSE-0",
    authDomain: "staff-management-ffaf4.firebaseapp.com",
    databaseURL: "https://staff-management-ffaf4.firebaseio.com",
    projectId: "staff-management-ffaf4",
    storageBucket: "staff-management-ffaf4.appspot.com",
    messagingSenderId: "102142536094",
    appId: "1:102142536094:web:d027f57916cd3834e58e8f",
    measurementId: "G-GKCR61QKEV"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fb