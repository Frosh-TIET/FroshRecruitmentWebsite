



const firebaseConfig = {
    apiKey: "AIzaSyAPrHceRS4nBTxEmoxzga7p_-B1WdMz2Ec",
    authDomain: "froshrecuitmentform.firebaseapp.com",
    databaseURL: "https://froshrecuitmentform-default-rtdb.firebaseio.com",
    projectId: "froshrecuitmentform",
    storageBucket: "froshrecuitmentform.appspot.com",
    messagingSenderId: "332914579057",
    appId: "1:332914579057:web:80612e9d424ee43c872dd0",
    measurementId: "G-EEG7XBG6WX"
  };

  //initialize firebase app
firebase.initializeApp(firebaseConfig);

//reference your database
firebase.database().ref('recruitmentForm')