"use strict";
let textDisplay = document.querySelector("#test");
let recupText = "";
function createTxt(obj, decalage) {
  if(obj.contenu != undefined) {
    obj.contenu.forEach((element) => {
      recupText += decalage+element.name+"\n";
      if(element.contenu != undefined && element.contenu.length > 0) {
        createTxt(element, decalage+"\t");
      }
    });
  }
}

function loadTxtArea(obj) {
  createTxt(obj, "");
  textDisplay.innerHTML = recupText.trim("\n");
  //console.log(recupText);
}