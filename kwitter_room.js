const firebaseConfig = {
    apiKey: "AIzaSyBEPPM4VUhXBs9kZKF4exGRWeTLsBuN0mU",
    authDomain: "projectc-94-b5307.firebaseapp.com",
    databaseURL: "https://projectc-94-b5307-default-rtdb.firebaseio.com",
    projectId: "projectc-94-b5307",
    storageBucket: "projectc-94-b5307.appspot.com",
    messagingSenderId: "13206634809",
    appId: "1:13206634809:web:c3c9ac4a1bb03e867168e8"
  };

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name +  "!";
   
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
   localStorage.setItem("room_name",room_name);
   window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name = " + room_name);
      row="<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id);' >#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location("kwitter_page.html");
}
