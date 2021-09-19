1,25 +1,12
const fs = require("fs");
 
// асинхронное чтение
fs.readFile("ppl.csv", "utf8", 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});

// const fs = require('fs');
// const parse = require('csv-parse');
// const async = require('async');

// const inputFile='ppl.csv';

// const parser = parse(gender, function (err, data) {
//   async.eachSeries(data, function (line, callback) {
//     // do something with the line
//     doSomething(line).then(function() {
//       // when processing finishes invoke the callback to move to the next one
//       callback();
//     });
//   })
// });
// fs.createReadStream(inputFile).pipe(parser);
function convertCSV2Array(data, delimiter = ',', firstRow = false)
{
  return data
    .slice(firstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(row => row.split(delimiter));
}
console.log(convertCSV2Array(
    '1, Название1, Значение1, Дата1\n' +
    '2, Название2, Значение2, Дата2\n' +
    '3, Название3, Значение3, Дата3\n'
));