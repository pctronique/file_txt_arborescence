"use strict";
document.querySelector('#trieCont').addEventListener("change", function(e) {
    trieCont = document.querySelector('#trieCont').checked;
    conversion();
});
document.querySelector('#ascending').addEventListener("click", function(e) {
    trieAscending = document.querySelector('#ascending').checked;
    conversion();
});
document.querySelector('#descending').addEventListener("change", function(e) {
    trieAscending = document.querySelector('#ascending').checked;
    conversion();
});
document.querySelector('#accent').addEventListener("change", function(e) {
    ignoreAccent = document.querySelector('#accent').checked;
    conversion();
});
document.querySelector('#thecase').addEventListener("change", function(e) {
    ignoreCase = document.querySelector('#thecase').checked;
    conversion();
});