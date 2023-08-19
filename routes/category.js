const router = require('express').Router() 
const prisma = require('../db/myprisma')

// create a category
router.post('/category', async(req, res)=>{ 
    try{ 
        const category = await prisma.category.create({
            data: {
                    name: "Entertainment",
                    icon: "music",
                    pollsterId: 1
                }
        })
        res.json(category)
    } catch(e) {
        res.json({"Error": e})
    }
})

// create categories
router.post('/categories', async(req, res)=>{ 
    try{ 
        const categories = await prisma.category.createMany({
            data: [
                {
                    name: "Sports",
                    icon: "futbol",
                    pollsterId: 1
                },
                {
                    name: "Lifestyle",
                    icon: "spoon",
                    pollsterId: 1
                }
            ]
        })
        res.json(categories)
    } catch(e) {
        res.json({"Error": e})
    }
})


// fetch categories
router.get('/categories', async(req, res)=>{ 
    try{ 
        const categories = await prisma.category.findMany({ })
        res.json(categories)
    } catch(e) {
        res.json({"Error": e})
    }
})


// fetch categories
router.get('/category/:id', async(req, res)=>{ 
    try{ 
        const category = await prisma.category.findFirst({ where: { id: Number.parseInt(req.params.id) }})
        res.json(category)
    } catch(e) {
        res.json({"Error": e})
    }
})

// fetch categories
router.put('/category/:id', async(req, res)=>{ 
    try{ 
        const category = await prisma.category.update({
            data:{ name: "Adventure", icon: 'bird' },
            where: { id: Number.parseInt(req.params.id) }
        })
        res.json(category)
    } catch(e) {
        res.json({"Error": e})
    }
})

// fetch categories
router.delete('/category/:id', async(req, res)=>{ 
    try{ 
        const category = await prisma.category.delete({ 
            where: { id: Number.parseInt(req.params.id) }
        })
        res.json(category)
    } catch(e) {
        res.json({"Error": e})
    }
})

module.exports = router