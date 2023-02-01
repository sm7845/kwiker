// liga de la base de datos
var firebaseConfig = {
  apiKey: "AIzaSyBw7yZfb8Is_-Vdxzw9O9QKTIGX2FkwiU8",
  authDomain: "redessociales-414b5.firebaseapp.com",
  databaseURL: "https://redessociales-414b5-default-rtdb.firebaseio.com",
  projectId: "redessociales-414b5",
  storageBucket: "redessociales-414b5.appspot.com",
  messagingSenderId: "1094429864008",
  appId: "1:1094429864008:web:868776366eeacd148c287d"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
//para agregar los nombres de las salas no escribir#
document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location.replace("kwitter_page.html");

}

//busca en las variables de las salas ya antes creadas el nombre de la que pusiste entre todos los hijos y si esque encuentra el nombre de la sala que quieres te mandara a esta.
function getRoom() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class= 'room_name' id =" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>"; document.getElementById("output").innerHTML += row; });
  });
}
getRoom();


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}