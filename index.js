-const fs = require("fs");
 
// асинхронное чтение
fs.readFile("ppl.csv", "utf8", 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});

const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');

const inputFile='ppl.csv';

const parser = parse(gender, function (err, data) {
  async.eachSeries(data, function (line, callback) {
    // do something with the line
    doSomething(line).then(function() {
      // when processing finishes invoke the callback to move to the next one
      callback();
    });
  })
});
fs.createReadStream(inputFile).pipe(parser);