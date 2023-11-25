// Das Ziel dieser Übung ist es, den Inhalt einer JSON Datei in eine .txt-Datei umzuwandeln.
// Erstelle dir eine JSON Datei mit dem vorgegebenen Code (siehe Code - Snippet)
// Importiere die json-Datei in deiner index.js und nutze das File System, um die JSON Datei in eine neue .txt-Datei zu schreiben.

import fs from 'fs';

fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) {
    console.log('fehler beim lesen der json file', 'utf-8', err);
    return;
  }
  console.log('data:', data);

  const parsed_data = JSON.parse(data);
  console.log(parsed_data);

  parsed_data.forEach((item) => {
    fs.writeFile(
      './data.txt',
      `${item.id} - ${item.title} \n${item.description} \n\n`,
      { flag: 'a' }, // flag -> open mode; a = append
      (err) => {
        if (err) {
          console.log('fehler beim schreiben der txt file', 'utf-8', err);
        }
        console.log('daten wurden in txt file geschrieben');
      }
    );
  });
});
