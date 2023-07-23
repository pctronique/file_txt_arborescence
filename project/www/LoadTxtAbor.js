"use strict";
let aborUl = document.querySelector(".tree");
let listLine = [];
let listUl = [];
function modifLin(line) {
  return line.replace(/^#/, "").replace(/;$/, "").replace(/>$/, "");
}
function createAbo() {
  let line = listLine[0].trim();
  listLine.shift();
  let elementUl = listUl[listUl.length - 1];
  if (line.startsWith("#") && line.endsWith(">")) {
    let newLi = document.createElement("li");
    let newDetails = document.createElement("details");
    let newSummary = document.createElement("summary");
    let newUl = document.createElement("ul");
    let newContent = document.createTextNode(modifLin(line));
    newDetails.setAttribute("open", "");
    newSummary.appendChild(newContent);
    newDetails.appendChild(newSummary);
    newDetails.appendChild(newUl);
    newLi.appendChild(newDetails);
    elementUl.appendChild(newLi);
    listUl.push(newUl);
  } else if (line.startsWith("#") && line.endsWith(";")) {
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(modifLin(line));
    newLi.appendChild(newContent);
    elementUl.appendChild(newLi);
  } else if (line == ";") {
    listUl.pop();
  }
}
function loadTxtAbo(text) {
  while (aborUl.firstChild) {
    aborUl.firstChild.remove();
  }
  listUl = [aborUl];
  listLine = text
    .replaceAll("\r", "\n")
    .replaceAll("\n\n", "\n")
    .replaceAll("&gt;", ">")
    .trim("\n")
    .split("\n");
  while (listLine.length >= 1) {
    createAbo();
  }
}
