/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encryption() {
    let text = document.getElementById("textToEncrypt").value;
    let resultEncrypt = " ";

    for (let character of text) {
        if (character === "a") {
            resultEncrypt += character.replaceAll("a", "ai");
        } else if (character === "e") {
            resultEncrypt += character.replaceAll("e", "enter")
        } else if (character === "i") {
            resultEncrypt += character.replaceAll("i", "imes")
        } else if (character === "o") {
            resultEncrypt += character.replaceAll("o", "ober")
        } else if (character === "u") {
            resultEncrypt += character.replaceAll("u", "ufat")
        }
        else {
            resultEncrypt += character;
        }
    }
    console.log(resultEncrypt);
}

