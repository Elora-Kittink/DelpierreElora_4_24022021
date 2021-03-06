

const modalbg = document.querySelector(".bground"); 
const modalBtn = document.querySelectorAll(".modal-btn"); 
const formData = document.querySelectorAll(".formData"); 
const closeBtn = document.querySelector (".close");
const firstname = document.getElementById ("first");
const lastname = document.getElementById ("last");
const email = document.getElementById ("email");
const numberOfTournament = document.getElementById ("quantity");
const locationCheckbox = document.getElementById("location");
const birthdate = document.getElementById("birthdate");
const regexTournament = new RegExp("[0-9]"); 
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}  /*Utilisé sur les media queries pour faire passer la barre de navigation de sa forme desktopà sa forme mobile*/ 


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));   /*pour chaque bouton, écouter l'évenement "click" et executer la onction "launchModal" */

function launchModal() {
  modalbg.style.display = "block";   /* fait apparaitre le formulaire en le passant en display block */
}

closeBtn.addEventListener ("click", closeModal)   /*au click executer la fonction closemodal*/

function closeModal () {
  modalbg.style.display = "none"; /*fermer en passant en display none*/
}

function validateFirstname() {
  const firstnameLength = firstname.value.length;
  if (firstnameLength < 2) {
    document.getElementById('errorFirstname').innerHTML = "Doit contenir au moins deux lettres";
    return false
  } else {
    document.getElementById('errorFirstname').innerHTML = "";   
    return true
  }   /*si la valeur fait moins de deux carractères afficher le message d'erreur, sinon c'est ok*/
}

firstname.addEventListener("input", validateFirstname) /*executer validateFirstname a chaque changement de caractère*/

function validateLastname() {
  const lastnameLenght = lastname.value.length;
  if (lastnameLenght < 2) {
    document.getElementById('errorLastname').innerHTML = "Doit contenir au moins deux lettres";
    return false
  } else {
    document.getElementById('errorLastname').innerHTML = "";
    return true
  }   /*si la valeur fait moins de deux carractères afficher le message d'erreur, sinon c'est ok*/
}

lastname.addEventListener("input", validateLastname); /*executer validateLastname a chaque changement de caractère*/



function validateEmail() {
  const userEmail = email.value
  if (regexEmail.test(userEmail) === false) {
    document.getElementById('errorEmail').innerHTML = "Adresse mail invalide"
    return false
  } else {
    document.getElementById('errorEmail').innerHTML = ""
    return true
  }
}  /*si la valeur n'est pas une adresse mail afficher message d'erreur, sinon c'est ok*/

email.addEventListener("input", validateEmail); /*executer validateEmail à chaque changement de caractère dans le champs*/

function validateBirthdate() {
  if (birthdate.value === "") {
    document.getElementById("errorBirthdate").innerHTML = "Vous devez saisir une date"
    return false
  } else {
    document.getElementById("errorBirthdate").innerHTML = ""
    return true
  }
}

birthdate.addEventListener("input", validateBirthdate);

function validateTournament() {
  let tournamentType = numberOfTournament.value
  if (regexTournament.test(tournamentType) === false){
    document.getElementById('errorTournament').innerHTML = "Chiffre demandé"
    return false
  } else {
    document.getElementById('errorTournament').innerHTML = ""
    return true 
  }
} /*si la valeur n'est pas un chiffre afficher le message d'erreur, sinon c'est ok*/

numberOfTournament.addEventListener("input", validateTournament); /*executer validateTournament à chaque changement de caractère dans le champs*/

function validateLocation() {
  if (document.getElementById("location1").checked
      || document.getElementById("location2").checked
      || document.getElementById("location3").checked 
      ||document.getElementById("location4").checked
      || document.getElementById("location5").checked
      || document.getElementById("location6").checked ){
        document.getElementById('errorLocation').innerHTML = "";
          return true
        } else {
          document.getElementById('errorLocation').innerHTML = "Vous devez choisir une ville";
          return false
        }
} /*si une des locations est coché c'est ok sinon afficher le message d'erreur*/


function validateTermsOfUse() {
  if (document.getElementById("checkbox1").checked) {
    document.getElementById('errorTermsOfUse').innerHTML = "";
    return true
  } else {
    document.getElementById('errorTermsOfUse').innerHTML = "Vous devez accepter les termes et conditions";
    return false
  }
} /*si la case est cochée c'est ok sinon afficher le message d'erreur*/

document.getElementById("checkbox1").addEventListener("change", validateTermsOfUse); /*executer validateTermsOfUse à chaque changement*/


function validate() {
  const isFirstnameValid = validateFirstname();
  const isLastnameValid = validateLastname();        /*appel de toutes les fonctions, fera apparaître les messages d'erreur */
  const isEmailValid = validateEmail();
  const isTournamentValid = validateTournament();
  const isLocationValid = validateLocation();
  const isTermsOfUseValid = validateTermsOfUse();
  const isBirthdateValid = validateBirthdate();
  if (
      isFirstnameValid
      && isLastnameValid
      && isEmailValid              /* vérifie que le formulaire peut être envoyé */
      && isTournamentValid
      && isLocationValid
      && isTermsOfUseValid 
      && isBirthdateValid ) {
      window.alert("Formulaire envoyé, merci d'avoir participé !");
      return true
  } else {
    document.getElementById('validateForm').innerHTML = "Formulaire invalide";
    return false
  }
} /*si toutes les fonctions retourne vrai alors lancer la window alert et valider le formulaire, sinon afficher le message d'erreur*/



document.getElementById("formSubmit").onsubmit = validate  /*executer la fonction validate au submit du formulaire*/
