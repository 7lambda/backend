const router = require('express').Router()
const Request = require('./request-model')

router.post('/', (req,res,next)=>{
    Request.add(req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.get('/:user_id', (req,res,next)=>{
    Request.findbyUser(req.params.user_id)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.delete('/:request_id', (req, res, next) => {
    Request.nuked(req.params.request_id)
        .then(data => {
            res.json({message:`${data} request deleted`})
        })
        .catch(next) 
});

module.exports = router;
