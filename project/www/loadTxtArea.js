"use strict";
let conversionElem = document.querySelector("#conversion");
let textLoadConv = document.querySelector("#testDef");
let textDisplay = document.querySelector("#test");
let nbDecalage = 0;
function addTxtLine(line) {
  textDisplay.innerHTML += "\n" + line;
}
function addLine(line) {
  if (line == ";") {
    nbDecalage--;
  } else if (line.startsWith("#")) {
    addTxtLine(
      "\t".repeat(nbDecalage) +
        line.replace(/^#/, "").replace(/;$/, "").replace(/>$/, "")
    );
    if (line.endsWith(">")) {
      nbDecalage++;
    }
  }
}
function loadTxt(txt) {
  textDisplay.innerHTML = "";
  txt = txt.replaceAll("\r", "\n").replaceAll("\n\n", "\n");
  let allLines = txt.split("\n");
  allLines.forEach((line) => {
    addLine(line.trim());
  });
  textDisplay.innerHTML = textDisplay.innerHTML.trim("\n");
}
function addTextDef(text) {
  textLoadConv.value = text;
  textLoadConv.innerHTML = text;
  loadTxtAbo(text);
}
function conversion(e) {
  loadTxt(textLoadConv.value);
}
conversionElem.addEventListener("click", conversion);