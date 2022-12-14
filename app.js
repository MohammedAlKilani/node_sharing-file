const express = require ("express")
const mongoose = require("mongoose")
require("dotenv").config()
const multer = require("multer")
const bodyParser = require("body-parser")
const app= express()
const upload =multer({dest : "upload"}) 
const filedata = require("./data file")
const handledownload =require("./download")
port = 3000 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect(process.env.mdb_url)



app.post("/up",upload.single("file"),async(req,res)=>{

    console.log(req.body.pas)
    if (req.file !=null)
    {
        const file ={
            filename:req.file.originalname,
            path:req.file.path,

        }
        const fileid = await filedata.create(file)
        console.log(fileid.id)
        console.log(req.file.originalname)
        console.log(req.file.path)
       


    }else {console.log("ples add file")}


    

}) 

app.route("/download/:id").get(handledownload).post(handledownload)

app.listen(port,()=>{

    console.log(port)
})