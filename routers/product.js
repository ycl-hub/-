const express = require('express')
//创建路由器对象
const router = express.Router()
//添加路由
router.get('/list',(req,res)=>{
    res.send('这是商品列表')
})
//导出路由器对象
module.exports=router