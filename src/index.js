const app = require('express')();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const adminRoutes = require('./api/api-admin');

const port = process.env.PORT || 3000;

require('./db');
require('./middleware/middleware')(app);

app.get('/api/check', (req,res) => {
    console.log(process.env.NODE_ENV)
    res.json({check: true})
})

app.use('/api/admin',adminRoutes);

app.use(require('./middleware/error.logger'));

app.listen(port, () => {
    console.log('Server is up on ', port)
})