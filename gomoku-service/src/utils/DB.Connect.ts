import mongoose, {mongo} from 'mongoose';

const ConnectDB =async () => {
    const dbUri = "mongodb+srv://nirajrbrb:U48r5IVEmpIiF6Cj@cluster0.odhcvpl.mongodb.net/gomoku?retryWrites=true&w=majority";
    mongoose.set('strictQuery', false);
    console.log("Connecting to Database")
    try{
        await mongoose.connect(dbUri);
        console.log("Database Connection Success!");
    } catch(error){
        console.log("Failed to connect to database: " + error);
        process.exit(1);
    }
}

export default ConnectDB;