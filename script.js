function transformerMessage(decalage) {
  let message = document.getElementById("message").value;
  let resultat = "";

  decalage = ((decalage % 26) + 26) % 26;

  for (let lettre of message) {
    let code = lettre.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      resultat += String.fromCharCode(((code - 65 + decalage) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      resultat += String.fromCharCode(((code - 97 + decalage) % 26) + 97);
    } else {
      resultat += lettre;
    }
  }

  document.getElementById("resultat").textContent = resultat;
}

function chiffrer() {
  let decalage = Number(document.getElementById("decalage").value);
  transformerMessage(decalage);
}

function dechiffrer() {
  let decalage = Number(document.getElementById("decalage").value);
  transformerMessage(-decalage);
}
