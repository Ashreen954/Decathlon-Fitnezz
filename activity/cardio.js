// Get the modal
var aboutModal = document.getElementById("about-modal");
var notesModal = document.getElementById("notes-modal");

// Get the button that opens the modal
var aboutLink = document.getElementById("about-link");
var addNoteButton = document.getElementById("add-note-button");

// Get the <span> element that closes the modal
var aboutClose = aboutModal.getElementsByClassName("close")[0];
var notesClose = notesModal.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
aboutLink.onclick = function() {
  aboutModal.style.display = "block";
}

addNoteButton.onclick = function() {
  notesModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aboutClose.onclick = function() {
  aboutModal.style.display = "none";
}

notesClose.onclick = function() {
  notesModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target == notesModal) {
    notesModal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("about-modal");

// Get the link that opens the modal
var aboutLink = document.getElementById("about-link");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal
aboutLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}