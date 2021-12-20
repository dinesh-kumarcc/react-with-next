import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const connection_url =
    "mongodb+srv://Savreen:codecorners@cluster0.ot7uo.mongodb.net/start?retryWrites=true&w=majority";
    const db = await mongoose.connect(connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default dbConnect;