const { Router } = require('express');
const mocksRouter = Router();

// Endpoint: /api/mocks/mockingpets
mocksRouter.get('/mockingpets', (req, res) => {
    const pets = [
        { name: 'Firulais', species: 'dog' },
        { name: 'Michi', species: 'cat' },
        { name: 'Tweety', species: 'bird' },
    ];
    res.json({ status: 'success', data: pets });
});

module.exports = mocksRouter;
