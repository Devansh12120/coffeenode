const express = require('express')
const router = express.Router()
const controllers = require('../controllers');
router.get('/', async (req,res,next)=>{
    const data = req.context
    const ItemCtr = controllers.item.instance()
    data.coffee = await ItemCtr.get({category: "Coffee"})
    data.tea = await ItemCtr.get({category: "Tea"})
    data.cookies = await ItemCtr.get({category: "Cookies"})
    res.render('home' , data)
})
router.get('/blog', (req,res,next)=>{
    res.render('blog',  req.context)
})
router.get('/contact', (req,res,next)=>{
    res.render('contact',  req.context)
})
router.get('/blog-single', (req,res,next)=>{
    res.render('blog-single',  req.context)
})
router.get('/menu', (req,res,next)=>{
    res.render('menu',  req.context)
})
router.get('/res', (req,res,next)=>{
    res.render('reservation',  req.context)
})

//fetching from database
router.get('/items', async (req,res,next)=>{
    const filters = req.query
    const ItemCtr = controllers.item.instance()
    const items = await ItemCtr.get(filters)
    res.json({
        items
    })
})
module.exports = router


// booking table
router.post('/order', async (req,res,next)=>{
    const orderData = req.body
    // res.json(orderData)
    const orderCtr = controllers.order.instance()
    const order = await orderCtr.post(orderData)
    res.json(order)
})

router.post('/save', async (req,res,next)=>{
    const emaildata = req.body
    // res.json(emaildata)
    const saveCtr = controllers.save.instance()
    const save = await saveCtr.post(emaildata)
    res.json(save)
})