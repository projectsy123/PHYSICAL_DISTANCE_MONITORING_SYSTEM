// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8aBzh8A-_2YYlDjJbknXZgaPa-n1Zr4Y",
  authDomain: "physical-presence-detection.firebaseapp.com",
  databaseURL: "https://physical-presence-detection-default-rtdb.firebaseio.com",
  projectId: "physical-presence-detection",
  storageBucket: "physical-presence-detection.appspot.com",
  messagingSenderId: "88535623834",
  appId: "1:88535623834:web:49607288e797de16d8d723",
  measurementId: "G-ZV0M5EZMLG"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("page_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if (user != null) {
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        // document.getElementById("page_div").style.display = "block";
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("page_div").style.display = "block";
  
    }
  });
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
  
    // alert("Signed Up");     
  }
  
  
  
  function signIn() {
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
  
  
  
  
  }
  
  auth.onAuthStateChanged(function (user) {
  
    if (user) {
  
      var email = user.email;
      alert("Active User " + email);
  
      //Take user to a different or home page
  
      //is signed in
  
    } else {
  
      // alert("No Active User");
      //no user is signed in
    }
  
  
  
  });
  
  function logout() {
    firebase.auth().signOut();
  }