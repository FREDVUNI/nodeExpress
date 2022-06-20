const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/",(req,res)=>{
    res.sendFile(__dirname,"index.html")
})

router.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/about.html"))
})

router.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/contact.html"))
})

router.use(function(req, res, next) {
    res.status(404).redirect("404.html") 
});

module.exports = router