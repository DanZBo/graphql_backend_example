const user = require('../models/user')
const faker = require('faker');
const colors = ['RED', 'GREEN', 'BLUE'];
const ENV = require('../env')
const usersCount = ENV.FAKE_USERS_COUNT;
const inseringDocsCount = 50000;
const totalParts = Math.floor(usersCount / inseringDocsCount)

insertingData().then((countDocuments) => {
    console.log(`You have ${countDocuments} documents in collection`)
}).catch((error) => {
    console.error(error)
}).finally(()=>{
    process.exit(0)
})

async function insertingData() {
    let limit = inseringDocsCount;
    for (let i = 0; i <= totalParts; i++) {
        if (i == totalParts) {
            limit = usersCount - (inseringDocsCount * (totalParts))
        }
        console.log(limit)
        let generatedData = await generator(limit);
        await user.insertMany(generatedData);
    }

    return await user.countDocuments();
}


async function generator(limit) {
    const generatedData = []
    for (let i = 0; i <= limit; i++) {
        generatedData.push({
            color: faker.helpers.randomize(colors),
            name: faker.name.firstName(),
            speed: faker.random.number(350),
            time: faker.random.number(10000) + 1000
        });
    }
    return generatedData
}

console.log('Starting generation data.../')