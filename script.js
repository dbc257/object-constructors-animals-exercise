// fs is to read files
const fs = require('fs');
const readline = require('readline')

// let a = fs.readFile('/animals.csv')
// console.log(a)
// fs.readFileSync

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('filename: ', function(filename) {
//   rl.close();
//   fs.readFile(filename, function(error, buffer) {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     const content = buffer.toString();
//     const upperCased = content.toUpperCase();
//     console.log(upperCased);
//   });
// });
// rl.question('filename: ', function(filename) {
//     rl.close();
    fs.readFile('./animals.csv', function(error, buffer) {
      if (error) {
        console.log(error.message);
        return;
      }
      const content = buffer.toString();
    //   const upperCased = content.toUpperCase();
    var dataArray = content.split(/\r?\n/);
      console.log(dataArray);
    //   console.log(content)
    });

// fs.readFile('./file.csv', async (err, data) => {
//     if (err) {
//     console.error(err)
//     return
//     }
//     console.log(await neatCsv(data))
// })
//   });
// fs.readFile(inputPath, 'utf8', function (err, data) {
//     var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
//     // Your array contains ['ID', 'D11', ... ]
//   })
// Parent function
// function Animals() = (name, birthdate, species) {
//     this.name = name;
//     this.birthdate = birthdate;
//     this.species = species;
// } 