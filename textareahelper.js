//Function to be called after each note has been played to update the textarea.

function updateTextarea(note, octave) {

    var textarea = document.getElementById("textoutput");
    textarea.value = textarea.value + note + octave + " 4 ";

}
function removeNote() {

    var textarea = document.getElementById("textoutput");
    textarea.value = textarea.value.substring(0, textarea.value.length - 5);

}