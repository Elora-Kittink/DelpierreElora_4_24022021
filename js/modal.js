const modalbg = document.querySelector(".bground"); /*modalbg = .bground*/
const modalBtn = document.querySelectorAll(".modal-btn"); /*modalBtn = .modal-btn*/ 
const formData = document.querySelectorAll(".formData"); /* formData = .formData */
const closeBtn = document.querySelector (".close") 


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));   /*pour chaque bouton, écouter l'évenement "click" et executer la onction "launchModal" */

closeBtn.addEventListener ("click", closeModal)

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}  /*Si le nom de class de x est "topnav" alors on lui ajoute le nom de class "responsive" sinon ça reste juste topnav*/ 

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal () {
  modalbg.style.display = "none"; /*fermer en passant en display none*/
}