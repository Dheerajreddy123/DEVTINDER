const express=require('express');
const app=express();
app.use("/test",(req,res)=>{
    res.send("Test");
})
app.use("/Home",(req,res)=>{
    res.send(" My Home");
})
app.use("/",(req,res)=>{
    res.send("Helloworld");
})

app.listen(3000,()=>{
    console.log("Server is running Sucessfully...");
})