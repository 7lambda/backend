const router = require('express').Router()
const Foods = require('./foods-model')

router.get('/:event_id', (req,res,next) =>{
    Foods.findFoodByEventId(req.params.event_id)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    Foods.addFood(req.body)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})

router.put('/:food_id', (req,res,next)=>{
    console.log(req.body.user_id)
    Foods.assignFoodToAttendee(req.params.food_id,req.body.user_id)
    .then(data =>{
        res.json(data)
    })
    .catch(next)
})
router.delete('/:food_id', (req, res, next) => {
    Foods.nuked(req.params.food_id)
        .then(data => {
            res.json({message:`${data} food deleted`})
        })
        .catch(next) 
});

module.exports = router;
