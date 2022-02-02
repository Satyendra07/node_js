const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('users list');
})

// router.get('/new', (req,res)=>{
//     res.send('users new foem ');
// })

// router.get('/:id', (req,res)=>{
//     res.send(`get user for ID ${req.params.id}`)
// })

router.route("/:id").get((req,res)=>{
    res.send(`get user for ID ${req.params.id}`)
}).put((req,res)=>{
    res.send(`put user for ID ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`delete user for ID ${req.params.id}`)
})

router.param("id",(req,res,next,id)=>{

    next();
})

module.exports = router;