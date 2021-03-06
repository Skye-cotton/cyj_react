const express=require('express')
const Mock =require('mockjs')
const app=express()
const Random=Mock.Random

// 设置跨域
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Allow-Methods','*')
    res.header('Content-Type','application/json;charset=utf-8')
    next()
})

//获取文章列表
app.get('/posts',(req,res)=>{

    let number=100
    let posts=[]
    for(let i=0;i<number;i++){
        posts.push(Mock.mock({
            id:i,
            title: Random.cparagraph(1),
            content:Random.cparagraph(2,5),
            time:Random.datetime('yyyy-mm-dd hh:mm:ss'),
            author: Random.cname(),
            'like|1-1000':1
    
        }))
    }
    //获取当前页码、每页显示条数、计算总页数
    let perPageNumber= Number(req.query.perPageNumber ? 
        req.query.perPageNumber :10)

    let currentPage=Number(req.query.currentPage ? req.query.currentPage:1)

    let totalPage=Math.ceil(posts.length/perPageNumber)

    //slice 进行数据截取
    let start = (currentPage-1)*perPageNumber
    let end=currentPage*perPageNumber <= posts.length ?
    currentPage*perPageNumber :posts.length
    posts=posts.slice(start,end)
   
    res.json({content:posts,currentPage,totalPage})
})



app.listen(3001,()=>{
    console.log('Server port :3001');
})