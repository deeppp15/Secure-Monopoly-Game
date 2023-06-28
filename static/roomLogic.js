

function joinRoom()
{ 
  console.log("IN JOIN ROOM");
  const nameInput = document.createElement("input");
  
  nameInput.type = "hidden";
  nameInput.name = "name";
  nameInput.value = playerName;
  roomForm.appendChild(nameInput);

  roomId=document.getElementById('roomID');
  const url = "/room/" + roomId;
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: playerName
    })
  })
  .then(response => {
    console.log(response);
    window.location.href = response.url;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}



function createRoom() {
  console.log("IN CREATE ROOM");
  const nameInput = document.createElement("input");
  nameInput.type = "hidden";
  nameInput.name = "name";
  nameInput.value = playerName;
  roomForm.appendChild(nameInput);

  const url = "/room";

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: playerName
    })
  })
  .then(response => {
    console.log(response);
    window.location.href = response.url;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}