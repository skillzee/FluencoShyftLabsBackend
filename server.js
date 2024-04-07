import { dbConnect } from "./DataBase/database.js";
import { app } from "./app.js";


const port = 3000



dbConnect()
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})