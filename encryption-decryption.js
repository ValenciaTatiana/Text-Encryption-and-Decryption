// Expresión regular para validar que el texto contenga solo letras minúsculas y espacios
let regEx = /^[a-z\s]*$/;

let vowels = ["a", "e", "i", "o", "u"]
let vowelsEncryp = ["ai", "enter", "imes", "ober", "ufat"]

// Función para mostrar alertas
function alerts() {
    let text = document.querySelector(".text-field-textarea").value;
    let alert = document.querySelector(".alert");

    // Mostrar alerta si no se cumple la validación de la expresión regular o si el campo está vacío
    alert.textContent = !regEx.test(text) ? "Uppercase letters and special characters are not allowed in this field." : "The field cannot be empty."

    alert.style.display = "block";

    // Ocultar la alerta después de 2 segundos
    setTimeout(function () {
        alert.style.display = "none";
    }, 2000)
}
// Función para encriptar el texto
function encryption() {
    let text = document.querySelector(".text-field-textarea").value;
    let resultEncrypt = " ";
    let alert = document.querySelector(".alert");

    if (!regEx.test(text) || text.length <= 0) {
        alerts();
    } else if (vowelsEncryp.some(vowelEn => text.includes(vowelEn))) {
        alert.textContent = "You can't encrypt, the text is already encrypted.";
        alert.style.display = "block";

        setTimeout(function () {
            alert.style.display = "none";
        }, 2000)
    } else {
        // Encriptar el texto reemplazando las vocales por sus equivalentes encriptados
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
        // Mostrar el texto encriptado
        document.querySelector(".display-titel").textContent = "Encrypted Text!🎉​";
        document.querySelector(".display-encrypted-menssages").innerHTML = `<h3 class="style-message">${resultEncrypt}</h3>`;
    }
}
// Función para desencriptar el texto
function decipher() {
    let text = document.querySelector(".text-field-textarea").value;
    let alert = document.querySelector(".alert");

    if (!regEx.test(text) || text.length <= 0) {
        alerts();
    } else if (vowels.some(vowel => text.includes(vowel)) && !vowelsEncryp.some(vowelEn => text.includes(vowelEn))) {
        alert.textContent = "You can't decrypt, the text is already decrypted.";
        alert.style.display = "block";
        
        setTimeout(function () {
            alert.style.display = "none";
        }, 2000)
    } else {
        // Desencriptar el texto reemplazando los equivalentes encriptados por las vocales originales
        text = text.replaceAll("ai", "a");
        text = text.replaceAll("enter", "e");
        text = text.replaceAll("imes", "i");
        text = text.replaceAll("ober", "o");
        text = text.replaceAll("ufat", "u");

        // Mostrar el texto desencriptado
        document.querySelector(".display-titel").textContent = "Decrypted Text!🎉​";
        document.querySelector(".display-encrypted-menssages").innerHTML = `<h3 class="style-message">${text}</h3>`;
    }
}
// Función para copiar el texto encriptado/desencriptado al portapapeles
function copy() {
    let textToCopy = document.querySelector(".display-encrypted-menssages");

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy.textContent;

    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    // Mostrar mensaje de copia exitosa
    document.querySelector(".display-titel").innerHTML = `<h3 class="alert-copy">Copy Text ✅​</h3>`;
}