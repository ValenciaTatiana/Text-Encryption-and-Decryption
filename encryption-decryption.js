let regEx = /^[a-z\s]*$/;

function encryption() {
    let text = document.getElementById("textToEncrypt").value;
    let resultEncrypt = " ";

    if (!regEx.test(text) || text.length <= 0) {
        alert("Error")
    } else {
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
            } else {
                resultEncrypt += character;
            }
        }
        document.getElementById("message").textContent = "Encrypted Text!🎉​";
        document.getElementById("displayEncrypted-menssage").innerHTML = `<h3 class="style-message">${resultEncrypt}</h3>`;
    }
}

function decipher() {
    let text = document.getElementById("textToEncrypt").value;

    text = text.replaceAll("ai", "a");
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");

    document.getElementById("message").textContent = "Decrypted Text!🎉​";
    document.getElementById("displayEncrypted-menssage").innerHTML = `<h3 class="style-message">${text}</h3>`;
}