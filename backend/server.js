import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors())
app.post("/contact",(req,res)=>{
    console.log(req.body);
    res.send({
        message:"Data Recieved"
    })
})

app.listen(3000,()=>{console.log("Server started")
})