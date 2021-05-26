const router = require('express').Router()
const attendeeandfood = require('./attendeeandfood-model')

router.get('/:attendeeandfood_Id', (req,res,next) =>{
    attendeeandfood.findFoodByEventId(req.params.attendeeandfood_Id)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    attendeeandfood.addFood(req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.post('/attendwithoutbringingFood', (req,res,next)=>{
    attendeeandfood.comewithoutFood(req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.put('/:attendeeandfood_Id', (req,res,next)=>{
    let stuff = []
    stuff.attendeeandfood_Id = req.body.user_id
    stuff.is_attendings = req.body.is_attendings
    const user_id = req.body.user_id
    const is_attendings = req.body.is_attendings
    attendeeandfood.assignFoodToAttendee(req.params.attendeeandfood_Id, user_id, is_attendings)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})
router.delete('/:attendeeandfood_Id', (req, res, next) => {
    attendeeandfood.nuked(req.params.attendeeandfood_Id)
        .then(data => {
            res.json({message:`${data} food deleted`})
        })
        .catch(next) 
});

module.exports = router;
