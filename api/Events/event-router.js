const router = require('express').Router()
const Event = require('./event-model')
const checkOrganizeridmatchupdate = require('../middleware/checkOrganizeridmatchupdate')

router.get('/getall', (req, res, next) => {
    Event.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(next)
})
router.get('/:user_id/user', (req, res, next) => {
    Event.getByUserId(req.params.user_id)
        .then(data => {
            res.json(data)
        })
        .catch(next)
})

router.get('/:event_id/event', (req, res, next) => {
    Event.getByEventId(req.params.event_id)
        .then(data => {
            res.json(data)
        })
        .catch(next)
})

router.put('/:event_id', checkOrganizeridmatchupdate, (req, res, next) => {
    Event.updateevent(req.params.event_id,req.body, req.decodedJwt.subject)
        .then(data => {
            res.json(...data)
        })
        .catch(next) 
});
router.delete('/:event_id', checkOrganizeridmatchupdate, (req, res, next) => {
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
