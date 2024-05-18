"use strict";
function textCompare(text){
  let textOut = text;
  if(ignoreAccent) {
    textOut = textOut.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  if(ignoreCase) {
    textOut = textOut.toLowerCase();
  }
  return textOut;
}
function compare(a, b) {
    if(!trieAscending) {
      return compareDesc(a, b);
    } else {
      return compareAsc(a, b);
    }
}
function compareAsc(a, b) {
  if (textCompare(a.name) < textCompare(b.name)) {
    return -1;
  }
  if (textCompare(a.name) > textCompare(b.name)) {
    return 1;
  }
  return 0;
}
function compareDesc(a, b) {
  if (textCompare(a.name) < textCompare(b.name)) {
    return 1;
  }
  if (textCompare(a.name) > textCompare(b.name)) {
    return -1;
  }
  return 0;
}
function orderContenu(obj) {
    if(obj.contenu != undefined) {
      obj.contenu.sort(compare);
      obj.contenu.forEach((element) => {
        orderContenu(element);
      });
    }
}
function displayDef(text) {
    textLoadConv.value = text;
    textLoadConv.innerHTML = text;
}
function loadAllDisplay(obj) {
    loadTxtAbo(obj);
    loadTxtArea(obj);
}
function loadTextAll(text) {
    recupText = "";
    // on appel le fichier
    let txt = text.replaceAll("&gt;", ">");
    // remplace les retour de chariot par des retour a la ligne
    txt = txt.replaceAll("\r", "\n").replaceAll("\n\n", "\n");
    displayDef(txt);
    // recupère chaque ligne sous format d'un tableau
    let allLines = txt.split("\n");
    let o0 = new Object();
    o0["name"] = "";
    o0["contenu"] = [];
    let tabObj = [o0];
    //on parcours chaque ligne
    allLines.forEach((line) => {
      //on enlève les expaces avant et après le texte
      line = line.trim();
      //on vérifie si la ligne contien \ et ;
      if (line == "\\;") {
        tabObj.pop();
      } else if (line.startsWith("#")) {
        if(line.endsWith(">") || line.endsWith(";")) {
          let o1 = new Object();
          o1["name"] = line
            .replace(/^#/, "")
            .replace(/;$/, "")
            .replace(/>$/, "");
          o1["contenu"] = [];
          tabObj[tabObj.length - 1]["contenu"].push(o1);
          if (line.endsWith(">")) {
            tabObj.push(o1);
          }
        }
      }
    });
    if(trieCont) {
      orderContenu(o0);
    }
    loadAllDisplay(o0);
  }