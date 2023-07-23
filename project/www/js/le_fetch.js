"use strict";
function fetch_txt(url) {
    return fetch(url)
        .then((response) => response.text())
        .catch((error) => console.error("Error:", error));
}
