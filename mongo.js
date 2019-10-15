const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://joostenr:${password}@cluster0-vjpwe.mongodb.net/people-app?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const peopleSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', peopleSchema)

if (process.argv.length == 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(response => {
        console.log('Added', process.argv[3], "number ", process.argv[4], " to phonebook")
        mongoose.connection.close()
    })

}

if (process.argv.length == 3) {
    Person
        .find({})
        .then(persons => {
            persons.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })
}

