import fs from 'fs';

// Erstelle dir in deinem Projektordner eine Datei mit dem Namen „blog1.txt“. In ihr soll „Hello World“ stehen.
fs.writeFile('./blog1.txt', 'Hello World', () => {
  console.log('Text "Hello World" wurde in "./blog1.txt" geschrieben');
});

// Führe jetzt folgende Schritte aus. Allerdings nicht manuell per Terminal oder UI sondern mit Hilfe von den vorgefertigten Funktionen aus dem File System von Node.js:

// Ändere den Textinhalt der Datei "blog1.txt" in “Ich bin ein Webdeveloper”
fs.writeFile('./blog1.txt', 'Ich bin ein Webdeveloper', () => {
  console.log('Der Text in "./blog1.txt" wurde geändert');
});

// Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein.
fs.writeFile('./blog2.txt', 'Das hier ist ein beliebiger Text', () => {
  console.log('Datei "./blog2.txt" wurde erstellt und Text wurde eingetragen');
});

// Überprüfe, ob der Ordner "assets" bereits existiert. Falls ja, lösche diesen.
fs.access('./assets', (err) => {
  if (err) {
    console.log('Ordner "./assets" existiert nicht');
  }
  fs.rm('./assets', { recursive: true }, () => {
    console.log('Ordner "./assets" wurde gelöscht');
  });
});

// Erstelle einen neuen Ordner "assets".
fs.mkdir('./assets', (err) => {
  if (err) {
    console.log('Ordner "./assets" konnte nicht erstellt werden');
  } else {
    console.log('Ordner "./assets" wurde erstellt');
  }
});

// Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese.
fs.access('./delete.txt', (err) => {
  if (err) {
    console.log('Datei "./delete.txt" existiert nicht');
  }
  fs.rm('./delete.txt', { recursive: true }, () => {
    console.log('Datei "./delete.txt" wurde gelöscht');
  });
});

// Erstelle eine Datei namens „delete.txt“.
fs.writeFile('./delete.txt', '', () => {
  console.log('Datei "./delete.txt" wurde erstellt');
});

// Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. Benenne die Datei anschließend in "HelloWorld.txt" um.
fs.writeFile('./Hello.txt', 'Beliebiger Text', () => {
  console.log(
    'Datei "./Hello.txt" wurde erstellt und ein beliebiger Text eingetragen'
  );
  fs.rename('Hello.txt', 'HelloWorld.txt', () => {
    console.log('Datei "Hello.txt" wurde in "HelloWorld.txt" umbenannt');
  });
});
