// Erstelle mithilfe des Node.js Filesystems einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei später angelegt werden.
// Schreibe eine Funktion, die einen Parameter annimmt.
// Diese soll prüfen, ob die txt-Datei bereits existiert. Wenn dies nicht der Fall ist, soll sie erstellt werden.
// In die Datei soll der Inhalt des Parameters geschrieben werden. Denk daran, diesen auch mitzuliefern, wenn du die Funktion aufrufst.
// Existiert die Datei bereits? Dann füge der bereits bestehenden Datei den Inhalt des Parameters in einer neuen Zeile hinzu.
//
import fs from 'fs';
import file from './function.js';

fs.mkdir('./assets', (err) => {
  if (err) {
    console.log('Ordner "./assets" wurde nicht erstellt');
  } else {
    console.log('Ordner "./assets" wurde erstellt');
    // (weil es ihn schon gibt)
  }
});

const text =
  'Das hier ist der Text, der in einer neuen Zeile in die Datei geschrieben wird.';
//

file(text);
