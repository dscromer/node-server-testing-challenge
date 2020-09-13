const express = require("express")
const Cats = require("./cats-model")

const router = express.Router()

router.post("/", async (req, res, next) => {
    if (!req.body.name) {
        res.status(400).json({
            message: "Must enter a name"
        })
    }
    
    try {
        const cat = await Cats.create(req.body)
        res.status(201).json(cat)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const cat = await Cats.findById(req.params.id)
        if (!cat) {
            return res.status(404).json({
                message: "Cat not found",
            })
        }

        Cats.remove(cat)
        res.status(204).end()
    } catch(err) {
        next(err)
    }
})

module.exports = router