const express = require('express')
const userRouter= require('./user.js')
const productRouter=require('./product.js')
const app = express()
app.listen(8080,()=>{
    console.log('服务器启动成功')
})

//     前缀
app.use('/user',userRouter)
app.use('/product',productRouter)