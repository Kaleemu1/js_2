import dotenv from "dotenv"
import ConnectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


ConnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is Listening on ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed!!!", err);
})