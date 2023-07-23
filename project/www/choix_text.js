"use strict";
document.querySelector('#text_1').addEventListener("click", function(e) {
    nameFile = "file01.txt";
    testLoad();
});
document.querySelector('#text_2').addEventListener("click", function(e) {
    nameFile = "file02.txt";
    testLoad();
});