import mongoose from "mongoose";

async function connect() {
    mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@clusterbooks.3cegldn.mongodb.net/library?retryWrites=true&w=majority`)
    return mongoose.connection
}


export default connect