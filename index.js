const fs = require("fs");

var data = fs.readFileSync('ppl.csv','utf8');
data = data.replace(/;/g,' ').split("\r\n");

let ludi = [];

class Person{
  constructor(name, surname, gender, bd){
    this.name = name;
    this.surname = surname;
    this.passname = `${name[0]}. ${surname}`;
    this.bd = bd;
    this.gender = gender;
  }
}

for(let i = 0; i < data.length; i++){
  const el = data[i].split(' ');
  const person = new Person(...el);
  ludi.push(person)
}
 
ludi.shift()

let filteredpass = []
ludi.forEach(function(el){
  const passdata = {passname: el.passname, bd: el.bd};
  filteredpass.push(passdata);
})

filteredpass.sort(function(y, z){
  return new Date(y.bd)-new Date(z.bd)
})

filteredpass.forEach(function(el){
  console.log(`|${el.passname}| |${el.bd.replace(/-/g,'.')}|`);
})