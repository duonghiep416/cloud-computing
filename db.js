const { MongoClient, ObjectId } = require("mongodb");

const mongoURI =
    "mongodb+srv://haianhngu:haianhngu@cluster0.1oekati.mongodb.net/"; // Replace with your MongoDB connection URL
const dbName = "products"; // Replace with your database name

let db;

const connectToDatabase = async () => {
    try {
        const client = await MongoClient.connect(mongoURI, {
            useUnifiedTopology: true,
        });
        db = client.db(dbName);
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err; // Throw the error to indicate a failed connection
    }
};

const getDatabase = () => {
    if (!db) {
        throw new Error(
            "Database not connected. Call connectToDatabase first."
        );
    }
    return db;
};

module.exports = { connectToDatabase, getDatabase, ObjectId };
