const router = require('express').Router() 
const prisma = require('../db/myprisma')

// create a pollster
router.post('/pollster', async(req, res)=>{ 
    try{ 
        const pollster = await prisma.pollster.create({
            data: req.body
        })
        res.json(pollster)
    } catch(e) {
        console.log(e)
        res.json({"Error": e})
    }
})

// create a pollsters
router.post('/pollsters', async(req, res)=>{ 
    try{ 
        const pollsters = await prisma.pollster.createMany({
            data: req.body
        })
        res.json(pollsters)
    } catch(e) {
        res.json({"Error": e})
    }
})

// fetch pollster
router.get('/pollster/:id', async(req, res)=>{ 
    try{ 
        const pollster = await prisma.pollster.findFirst({
            where:{ id: Number.parseInt(req.params.id)},
            include: { polls: true, categories: true, votes: true }
        })
        res.json(pollster)
    } catch(e) {
        console.log(e)
        res.json({"Error": e})
    }
})


// fetch pollsters
router.get('/pollsters', async(req, res)=>{ 
    try{ 
        const pollsters = await prisma.pollster.findMany({})
        res.json(pollsters)
    } catch(e) {
        console.log(e)
        res.json({"Error": e})
    }
})


// update pollster
router.put('/pollster/:id', async(req, res)=>{ 
    try{ 
        const pollster = await prisma.pollster.update({ 
            where: { id: Number.parseInt(req.params.id) },
            data: req.body
        })
        res.json(pollster)
    } catch(e) {
        res.json({"Error": e})
    }
})

// delete pollster
router.delete('/pollster/:id', async(req, res)=>{ 
    try{ 
        const pollster = await prisma.pollster.delete({ 
            where: { id: Number.parseInt(req.params.id) }
        })
        res.json(`pollster of id ${req.params.id} deleted successfully!`)
    } catch(e) {
        res.json({"Error": e})
    }
})


module.exports = router