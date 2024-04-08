import { dbConnect } from "./DataBase/database.js";
import { app } from "./app.js";


const port = process.env.PORT



dbConnect()
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})