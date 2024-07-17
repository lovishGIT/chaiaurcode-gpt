import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number,
}
const connection: ConnectionObject = {} // storing connections here.

export const dbConnect: Function = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log('Already Connected to database');
        return;
    }
    try {
        const dbConnection = await mongoose.connect(
            process.env.MONGODB_URI || '',
            {}
        );
        console.log(dbConnection.connections);

        connection.isConnected =
            dbConnection.connections[0].readyState;
        console.log("DB Connecred Successfully.");

    } catch (error) {
        console.log("Db Connection Failed! ", error);
        process.exit(1);
    }
};

