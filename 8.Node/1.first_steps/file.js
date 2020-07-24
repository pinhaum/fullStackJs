const fs = require('fs');

fs.writeFile('test.txt', 'Hello NodeJs', (err) => {
  console.log(err);
});

// // Adicionar ao arquivo
// fs.appendFile('test2.txt', '\nAdicionando coisas no mesmo arquivo', (err) => {
//   console.log(err);
// });

// Renomear arquivo
// fs.rename('test.txt', 'test_renomeado.txt', (err) => console.log(err));

//
// fs.unlink('test2.txt', (err) => console.log(err));

console.log(__dirname);
