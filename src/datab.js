const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://'+process.env.NOTES_APP_MONGODB_HOST+'/'+process.env.NOTES_APP_MONGODB_DB;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('Database is connected')).catch(err => console.log(err));