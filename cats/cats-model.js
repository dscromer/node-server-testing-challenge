const db = require("../data/config")

function findById(id) {
    return db("cats").where({id}).first()
}

async function create(data) {
    const [id] = await db("cats").insert(data)
    return findById(id)
}

function remove(id) {
    return db("cats").where({id}).del()
}

module.exports = {
    findById,
    create,
    remove,
}