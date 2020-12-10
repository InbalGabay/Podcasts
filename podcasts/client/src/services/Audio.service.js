export function getAllAudios(initialData) {
  fetch("http://localhost:9000/api/getAudios")
    .then((response) => response.json())
    .then((data) => {
      initialData(data.audiosData);
      return data;
    })
    .catch((error) => console.log("error : " + error.message));
}


export function saveAudio(dispatchNewAudio, audioDetails) {
  console.log("in saveAudio (fetch)");
  fetch("http://localhost:9000/api/addNewAudio", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(audioDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatchNewAudio(data);
      return data;
    })
    .catch((error) => console.log("error : " + error.message));
}


export function updateAudio(updateAudioAction, audioDetails) {
  console.log(audioDetails);
  console.log("in updateAudio (fetch)");
  fetch("http://localhost:9000/api/updateAudio", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(audioDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`updateAudio data is: ${data}`);
      updateAudioAction(data);
      return data;
    })
    .catch((error) => console.log("error : " + error.message));
}

export function deleteAudio(updateAudioListAfterDelete, audioId) {
  fetch("http://localhost:9000/api/deleteAudio", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: audioId }),
  })
    .then((response) => response.json())
    .then((data) => {
      updateAudioListAfterDelete(audioId);
      return data;
    })
    .catch((error) => console.log("error : " + error.message));
}