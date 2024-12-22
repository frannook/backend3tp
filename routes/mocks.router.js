const { Router } = require('express');
const { faker } = require('@faker-js/faker');
const User = require('../models/User');
const Pet = require('../models/Pet');

const mocksRouter = Router();

// Endpoint: /api/mocks/mockingpets
mocksRouter.get('/mockingpets', async (req, res) => {
    const pets = [];
    for (let i = 0; i < 10; i++) {
        pets.push({
            name: faker.animal.type(),
            species: faker.helpers.arrayElement(['dog', 'cat', 'bird', 'rabbit', 'fish']),
            age: faker.number.int({ min: 1, max: 15 }), // Cambiado aquí
        });
    }

    try {
        await Pet.insertMany(pets);
        res.json({ status: 'success', message: 'Pets added to database', data: pets });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Error saving pets', error });
    }
});

// Endpoint: /api/mocks/mockingusers
mocksRouter.get('/mockingusers', async (req, res) => {
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 80 }), // Cambiado aquí
            address: faker.location.streetAddress(),
        });
    }

    try {
        await User.insertMany(users);
        res.json({ status: 'success', message: 'Users added to database', data: users });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Error saving users', error });
    }
});

module.exports = mocksRouter;
