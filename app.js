const express=require('express');
const app=express();
const userModel=require('./usermodel');
app.get("/",(req,res)=>{
res.send("hello")
})
//create

app.get("/create",async(req,res)=>{
    let createduser=await userModel.create({
        name:"yuvraj singh",
        username:"yuvi123",
        email:"yuvr0131@gmail.com"
    })
    res.send(createduser);
})

app.get("/create",async(req,res)=>{
    let createduser=await userModel.create({
        name:"puja singh",
        username:"pooja123",
        email:"puja0131@gmail.com"
    })
    res.send(createduser);
})


//read
app.get("/read",async(req,res)=>{
    let users=await userModel.find();
res.send(users);
})


//update
app.get("/update", async(req,res)=>{
    let userupdated=await userModel.findOneAndUpdate({username:"yuvi123"},{name:"bhola singh"},{new:true})
    res.send(userupdated);
})




//delete
app.get("/delete", async(req,res)=>{
    let userdeleted=await userModel.findOneAndDelete({username:"yuvi123"});
    res.send(userdeleted);
})
app.listen(3000);