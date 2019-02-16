const route=require('express').Router()
const Products=require('../db').Products


route.get('/showProducts',(req,res)=>{
    Products.findAll()
    .then((products) => {
        res.send(products)
    })
    .catch((err)=>{
        res.status(500).send({
            error: "Couldnot retrieve Products!"
        })
    })
    
})
route.get('/addProducts',(req,res)=>{
    res.render('addProducts')
})

route.post('/addProducts',(req,res)=>{
    Products.create({
        ProductName: req.body.name,
        ProductCost: req.body.cost
    }).then((product)=>{
        console.log(product);
        res.render('addProducts')
    }).catch((err)=>{
        res.send(err)
    })
})


exports=module.exports=route