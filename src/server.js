require("dotenv").config();
const connectdb= require("./database/db");
connectdb();
const app= require("./app");

app.listen(process.env.PORT,(req,res)=>{
     console.log(`server start at port ${process.env.PORT}`);
})



