//Function to be called after each note has been played to update the textarea.

var playedNotes = [];
var noteObj = {
    note: "note",
    octave: "octave",
    duration: "duration"
};

function updateTextarea() {

    //var textarea = document.getElementById("textoutput");
    //textarea.value = textarea.value + note + octave + " 4 ";    

    var textarea = document.getElementById("textoutput");
    textarea.value = "";

    playedNotes.forEach(nte => {
        textarea.value = textarea.value + nte.note + nte.octave + " " + nte.duration + " ";
    });

}

function playAndSave(note, octave) {

    playedNotes.push(
    noteObj = {
        note: note,
        octave: octave,
        duration: 4
    });

    updateTextarea();
}

function removeNote() {

    //var textarea = document.getElementById("textoutput");

    playedNotes.pop();
    updateTextarea();

    /*if (textarea.value.substring(textarea.value.length - 5, textarea.value.length - 4) == '#') {
        textarea.value = textarea.value.substring(0, textarea.value.length - 6);
    }
    else {
        textarea.value = textarea.value.substring(0, textarea.value.length - 5);
    }
    */
}