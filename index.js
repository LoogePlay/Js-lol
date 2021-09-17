const fs = require("fs");
 
// асинхронное чтение
fs.readFile("ppl.csv", "utf8", 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});