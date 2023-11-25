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
