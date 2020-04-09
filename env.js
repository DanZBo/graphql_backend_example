const envalid = require('envalid')
const {
    str,
    port,
    host,
    num
} = envalid

const env = envalid.cleanEnv(process.env, {
    MONGO_URL: str({
        default: 'mongodb://mongo:27017/test'
    }),
    SERVER_PORT: port({
        default: 4000
    }),
    FAKE_USERS_COUNT: num({
        default: 4000001
    }),
    DOCS_INSERT_COUNT: num({
        default: 100000
    })
})

module.exports = env