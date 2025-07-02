import mongoose from 'mongoose';

// const mongo_url = "mongodb+srv://lakshyachandaliya71:L!ak2shya-mongocluster@cluster0.fyorl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongo_url = "mongodb+srv://lakshyachandaliya71:L!ak2shya-mongocluster@cluster0.fyorl.mongodb.net/mern-ecommerce"

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const dbconnection = mongoose;
export default dbconnection;