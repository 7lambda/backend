const router = require('express').Router()
const Attendee = require('./attendee-model')

router.post('/', (req,res,next)=>{
    Attendee.add(req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.get('/:event_id', (req,res,next)=>{
    Attendee.whosComming(req.params.event_id)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.delete('/:user_id', (req, res, next) => {
    Attendee.notComming(req.params.user_id)
        .then(data => {
            res.json({message:`${data} attendee deleted`})
        })
        .catch(next) 
});

module.exports = router;
