const express = require("express")
const app = express()
const router = require("./routes/start")
const PORT = 5000

app.use(express.static("views"))
app.use(express.static("public"))

app.use("/",router)

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})
