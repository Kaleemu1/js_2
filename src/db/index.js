import {DB_NAME} from '../constants.js'
import mongoose from 'mongoose';



const ConnectDB = async () => {
    try {
        const connecionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB CONNECTED !! CONNECTION HOST: ${connecionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED: ", error)
        process.exit(1)
    }
}

export default ConnectDB