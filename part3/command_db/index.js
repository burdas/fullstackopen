const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Number of arguments wrong: node index.js <password> <name> <number>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb://mongo:${password}@roundhouse.proxy.rlwy.net:43399`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((p) => {
      console.log(p);
    });
    mongoose.connection.close();
  });
}

const name = process.argv[3];
const number = process.argv[4];

const person = new Person({
  name: name,
  number: number,
});

person.save().then((result) => {
  console.log(`Added ${name} ${number} to phonebook`);
  mongoose.connection.close();
});
