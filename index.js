import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/health",function(req,res) {
    res.json({message: "The HTTP server is healthy"})
})

const port = 3000
app.listen(port,function() {
    console.log(`Server is running on port ${port}`)
})