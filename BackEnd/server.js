const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");
 const app=express();
 app.use(cors());
 app.use(express.json());

 const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"sql@123",
        database:"login_crud"
 
    }
 );
 db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database succes")
    }
 })
 app.post('/signup',(req,res)=>{
    const sql="INSERT INTO user(`name`,`email`,`password`) values(?,?,?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password

    ]
    db.query(sql,values,(err,data)=>{
        if(err){
            console.log(err);
        }
        return res.json(data);
    })
 })
 app.listen(3000,()=>{
    console.log("listening")
 })
 app.post('/login',(req,res)=>{
    const sql="select * from user where `email`=? and `password`=?";
    const values=[
        
        req.body.email,
        req.body.password

    ]
    db.query(sql,values,(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data.length>0){
            return res.json("success");
        }
        else{
            return res.json("failes"); 
        }
    })
 })
 