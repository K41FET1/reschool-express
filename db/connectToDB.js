const { default: mongoose } = require('mongoose')
require('dotenv').config()

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('conneceted succesfully')
    } catch (e) {
        console.log("ver davukavshirda datas")
    }


}


module.exports = connectToDb