const authRoutes = require('../auth/authRoutes.js');
const userRoutes = require('../users/userRoutes.js');
const notesRoutes = require('../notes/notesRoutes.js');

module.exports = function (server) {
    // sanity check route
    server.get('/', function (req, res) {
        res.json({ api: 'up and running' });
    });

    server.use('/users', userRoutes);
    server.use('/users/auth', authRoutes);
    server.use('/users/notes', notesRoutes);
};
