const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://avinash4666:4666@cluster0.aplr3d6.mongodb.net/VentureCatalyst?retryWrites=true&w=majority&appName=Cluster0';

const fis = new mongoose.Schema({
    // Define schema fields here
    // Example: name: String,
});

// Create a Mongoose model using the schema
const FoodItem = mongoose.model('FoodItem', fis,'food_items');

const mongoDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");

        // Use the Mongoose model to find all documents in the collection
        const data = await FoodItem.find({});
        //console.log(data);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
