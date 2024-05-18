"use strict";
function loadFilesImgAll(event) {
    let files = event.target.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /^text/;

        if (!imageType.test(file.type)) {
            continue;
        }
        
        var reader = new FileReader();
        reader.onload = (function (e, divContenu) {
            const base64String = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');
            let text = atob(base64String);
            loadTextAll(text);
        });
        reader.readAsDataURL(file);
    }
}
document.querySelector("#file").addEventListener("change", loadFilesImgAll);