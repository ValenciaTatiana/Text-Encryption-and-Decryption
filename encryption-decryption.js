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

    document.getElementById("message").innerHTML = "Encrypted Text!🎉​";
    let prueba = document.getElementById("displayEncrypted-menssage");
    prueba.innerHTML = resultEncrypt;
    prueba.style.fontSize = "1.5rem";
    prueba.style.color = "#2650aa";
    prueba.style.fontWeight = "bold"
}

function decipher() {
    let text = document.getElementById("textToEncrypt").value;
    
    if(text.includes("ai")){
        text = text.replaceAll("ai", "a");
    }
    if(text.includes("enter")){
        text = text.replaceAll("enter", "e");
    }
    if(text.includes("imes")){
        text = text.replaceAll("imes", "i");
    }
    if(text.includes("ober")){
        text = text.replaceAll("ober", "o");
    }
    if (text.includes("ufat")) {
        text = text.replaceAll("ufat", "u")
    } else {
        text = text;
    }
    document.getElementById("message").innerHTML = "Decrypted Text!🎉​";
    let prueba = document.getElementById("displayEncrypted-menssage");
    prueba.innerHTML = text;
    prueba.style.fontSize = "1.5rem";
    prueba.style.color = "#2650aa";
    prueba.style.fontWeight = "bold"
}

