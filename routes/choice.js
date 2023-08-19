const router = require('express').Router() 
const prisma = require('../db/myprisma')

// create a poll
router.post('/choice', async(req, res)=>{ 
    try{ 
        const choice = await prisma.choice.create({
            data: req.body
        })
        res.json(choice)
    } catch(e) {
        res.json({"Error": e})
    }
}) 

// fetch polls
router.get('/choices', async(req, res)=>{ 
    try{ 
        const polls = await prisma.choice.findMany({ })
        res.json(polls)
    } catch(e) {
        res.json({"Error": e})
    }
})


// fetch poll
router.get('/choice/:id', async(req, res)=>{ 
    try{ 
        const poll = await prisma.choice.findFirst({ 
            where: { id: Number.parseInt(req.params.id) }, 
            include: { choices: true } })
        res.json(poll)
    } catch(e) {
        res.json({"Error": e})
    }
})

// update poll
router.put('/choice/:id', async(req, res)=>{ 
    try{ 
        const poll = await prisma.poll.update({
            data:{ quiz: "Is adventure a good thing?" },
            where: { id: Number.parseInt(req.params.id) }
        })
        res.json(poll)
    } catch(e) {
        res.json({"Error": e})
    }
})

// update poll
router.delete('/choice/:id', async(req, res)=>{ 
    try{ 
        const poll = await prisma.poll.delete({ 
            where: { id: Number.parseInt(req.params.id) }
        })
        res.json(`${poll.quiz} poll deleted successfully!`)
    } catch(e) {
        res.json({"Error": e})
    }
})

module.exports = router