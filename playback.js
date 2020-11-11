function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function doPlayback(start) {

    console.log(playedNotes)

    if (playedNotes.length > start) {

        AudioSynth.prototype.play("piano", playedNotes[start].note, playedNotes[start].octave, playedNotes.duration)

        sleep(playedNotes[start].duration * 500).then(() => {
            doPlayback(start + 1)
        });
    }

}