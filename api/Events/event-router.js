const router = require('express').Router()
const Event = require('./event-model')

router.get('/getall', (req, res, next) => {
    Event.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(next)
})
router.get('/:user_id', (req, res, next) => {
    Event.getById(req.params.user_id)
        .then(data => {
            res.json(data)
        })
        .catch(next)
})

router.put('/:event_id', (req, res, next) => {
    console.log(req.params.event_id)
    Event.updateevent(req.params.event_id,req.body)
        .then(data => {
            res.json(...data)
        })
        .catch(next) 
});
router.delete('/:event_id', (req, res, next) => {
    Event.nuked(req.params.event_id)
        .then(data => {
            res.json({message:`${data} event deleted`})
        })
        .catch(next) 
});

router.post('/', (req, res, next) => {
    Event.insert(req.body)
        .then(data => {
            res.json(...data)
        })
        .catch(next) 
});

module.exports = router;
