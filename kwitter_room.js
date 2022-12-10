
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyAiTtof9ThUBhwF45zy4t9WxplREIXR67c",
      authDomain: "croco-chat-b3367.firebaseapp.com",
      databaseURL: "https://croco-chat-b3367-default-rtdb.firebaseio.com",
      projectId: "croco-chat-b3367",
      storageBucket: "croco-chat-b3367.appspot.com",
      messagingSenderId: "791401896416",
      appId: "1:791401896416:web:d733eb0983df3918b2b385",
      measurementId: "G-RW874P16XJ"
    };
    
    // Initialize Firebase
   
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "hola "+user_name+"!";  
  
    function addRoom(){    
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
      
      }
      
  
  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
  
      //Final del código
      });});}
  
  getData();
  function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
      
  }
  
  function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location.replace("kwitter_page.html");
  }
  
      