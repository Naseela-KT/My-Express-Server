const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("helloo");
});
app.get("/about",function(req,res){
    res.send("My name is naseela");
})
app.listen(3000);