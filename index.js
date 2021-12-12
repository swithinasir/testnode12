const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.redirect('/log')
})
app.get('/log',function(req,res){
    res.send("hi")
})
app.listen(8080)