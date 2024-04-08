// import { dbConnect } from "./DataBase/database.js";
// import { app } from "./app.js";

const app = require("./app.js").app
const dbConnect = require("./DataBase/database.js").dbConnect


const port = process.env.PORT



dbConnect()
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})