const mongoose = require("mongoose")

//connection to the database
const connectToDb = async (url) => {
    await mongoose.connect(url)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log("Failed to connect to MongoDB", err))
}

module.exports = connectToDb