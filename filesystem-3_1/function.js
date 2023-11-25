import fs from 'fs';

const file = (param) => {
  fs.access('./assets/text.txt', (err) => {
    if (err) {
      console.log('Datei "./assets/text.txt" existiert noch nicht');
      fs.writeFile('./assets/text.txt', param, () => {
        console.log(
          'Datei "./assets/text.txt" wurde erstellt und Inhalt wurde geschrieben'
        );
      });
    } else {
      console.log('Datei "./assets/text.txt" wurde gefunden');
      fs.writeFile('./assets/text.txt', `\n${param}`, { flag: 'a' }, (err) => {
        if (err) {
          console.log('Fehler beim schreiben', 'utf-8', err);
        }
        console.log('Inhalt wurde zu "./assets/text.txt" hinzugefügt');
      });
    }
  });
};

export default file;
