const mongoose = require('mongoose');

mongoose.connect('mongodb://fakefly:123456@cluster0-shard-00-00.scdv4.mongodb.net:27017,cluster0-shard-00-01.scdv4.mongodb.net:27017,cluster0-shard-00-02.scdv4.mongodb.net:27017/test?ssl=true&replicaSet=atlas-rwjx7d-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose;