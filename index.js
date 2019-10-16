
const express = require('express')
const app = express()
require('dotenv').config()

const Person = require('./models/person')

const cors = require('cors')
app.use(cors())


const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

morgan.token('POST', function (req, res) {
    return (
        `{name: ${req.body.name}, number: ${req.body.number}}`
    )
})

app.use(morgan('tiny', {
    skip: function (req, res) { return req.method === 'POST' }
}))


app.use(morgan(':method :status :res[content-length] - :response-time ms :POST ', {
    skip: function (req, res) { return req.method !== 'POST' }
}))


app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})



app.post('/api/persons', (request, response) => {
    console.log(typeof request.method)
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number is missing: please fill in both'
        })
    }

    if ((persons.filter(person => (person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()))).length !== 0) {
        console.log("Name exists already")
        return response.status(400).json({
            error: 'name imust be unique, person already exists'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons.map(person => person.toJSON()))
    });
});

app.get('api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person.toJSON())
            } else {
                response.status(404).end()
            }

        })
        .catch(error => {
            console.log(error);
            response.status(400).send({ error: 'Malformatted id' })
        })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('/api/info', (req, res) => {
    const date = new Date()
    const length = persons.length
    console.log(length)
    res.send(`<p>Phonebook has ${length} entries</p> <p>${date} </p>`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})