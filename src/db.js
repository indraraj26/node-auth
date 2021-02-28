const mongoose = require('mongoose');

(async function() {
    try {
        await mongoose.connect('mongodb://localhost:27017/node-auth', { useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000});
        console.log('database connected!');
    } catch(e) {
        console.log(e, "[Error | database] Something went wrong");
    }
})()

