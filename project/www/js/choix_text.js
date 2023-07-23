"use strict";
document.querySelector('#text_1').addEventListener("click", function(e) {
    nameFile = "./files/file01.txt";
    testLoad();
});
document.querySelector('#text_2').addEventListener("click", function(e) {
    nameFile = "./files/file02.txt";
    testLoad();
});