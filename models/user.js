const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ENV = require('../env')
mongoose.set('useCreateIndex', true)

mongoose.connect(ENV.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch((error) => {
    console.error(error)
})

const userSchema = new Schema({
    color: String,
    name: String,
    speed: Number,
    time: {
        type: Number,
        index: true
    },
})

userSchema.statics.findByPage = function (page, cb) {
    let skip = 50 * (page - 1);
    return this.find().skip(skip).limit(50).sort({
        time: 1
    }).find({}, cb)
}

const UserModel = mongoose.model('Users', userSchema)
module.exports = UserModel;