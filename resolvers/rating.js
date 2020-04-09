const user = require('../models/user')

module.exports = {
    Query: {
        rating: async (parent, {page}) => {
            if (page < 1) {
                throw new Error('Page should be > 0')
            }
            return user.findByPage(page)
        },
    }
};