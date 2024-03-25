require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('twitter')
})
app.get('/login',(req,res)=>{
    res.send('login')
})
app.get('/rudra',(req,res)=>{
    res.send('<h2>everything will be fine soon</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})