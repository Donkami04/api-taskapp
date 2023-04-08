const express = require('express');
const router = express.Router();
const {User} = require('../models/user');

router.get('/', 
    async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Hubo un error al obtener los usuarios.' });
        }
});


module.exports = router;
