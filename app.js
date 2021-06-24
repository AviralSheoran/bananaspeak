let btnTranslate = document.querySelector("#button");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector(".txt-area");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something went wrong, Please have patience");
}

function clickHandler() {
  let inputText = txtInput.value; // !Taking Input

  // !Calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.content.translated;
      outputDiv.innerText = translatedText; // !Output
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
