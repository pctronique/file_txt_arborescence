"use strict";
let nameFile = "file01.txt";
function testLoad(e) {
  fetch_txt(nameFile).then(function (response) {
    addTextDef(response);
    loadTxt(response);
  });
}
testLoad();
