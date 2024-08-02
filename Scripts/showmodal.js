// Vérifier si le modal doit être affiché
console.log("Checking if modal should be shown")
var modalShown = localStorage.getItem('modalShown');
console.log("modalShown cookie value: " + modalShown)

if (!modalShown) {
  // Afficher le modal
  console.log("Modal should be shown")
  var modalTriggerBtn = document.getElementById('modalTriggerBtn');
  modalTriggerBtn.click();
  
}