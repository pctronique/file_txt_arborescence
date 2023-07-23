"use strict";
let aborUl = document.querySelector(".tree");
function addUl(ulMain, title) {
  let newLi = document.createElement("li");
    let newDetails = document.createElement("details");
    let newSummary = document.createElement("summary");
    let newUl = document.createElement("ul");
    let newContent = document.createTextNode(title);
    newDetails.setAttribute("open", "");
    newSummary.appendChild(newContent);
    newDetails.appendChild(newSummary);
    newDetails.appendChild(newUl);
    newLi.appendChild(newDetails);
    ulMain.appendChild(newLi);
    return newUl;
}
function addLi(ulMain, title) {
  let newLi = document.createElement("li");
  let newContent = document.createTextNode(title);
  newLi.appendChild(newContent);
  ulMain.appendChild(newLi);
}
function createAbo(obj, ulDef) {
  if(obj.contenu != undefined) {
    obj.contenu.forEach((element) => {
      if(element.contenu != undefined && element.contenu.length > 0) {
        let newUl = addUl(ulDef, element.name);
        createAbo(element, newUl);
      } else {
        addLi(ulDef, element.name);
      }
    });
  }
}
function loadTxtAbo(obj) {
  while (aborUl.firstChild) {
    aborUl.firstChild.remove();
  }
  createAbo(obj, aborUl);
}
