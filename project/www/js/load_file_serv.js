"use strict";
let nameFile = "./files/file01.txt";
function testLoad(e) {
  fetch_txt(nameFile).then(function (response) {
    loadTextAll(response);
  });
}
testLoad();
