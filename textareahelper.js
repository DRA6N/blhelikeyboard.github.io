//Function to be called after each note has been played to update the textarea.

function updateTextarea(note, octave) {

    var textarea = document.getElementById("textoutput");
    textarea.value = textarea.value + note + octave + " 4 ";    

}
function removeNote() {

    var textarea = document.getElementById("textoutput");

    if (textarea.value.substring(textarea.value.length - 5, textarea.value.length - 4) == '#') {
        textarea.value = textarea.value.substring(0, textarea.value.length - 6);
    }
    else {
        textarea.value = textarea.value.substring(0, textarea.value.length - 5);
    }

}