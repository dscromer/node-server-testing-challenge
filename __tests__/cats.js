const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("cats integration tests", () => {
    it("POST /cats", async () => {
        const res = await supertest(server).post("/cats").send({ name: "Sir Cuddles"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Sir Cuddles")
    })

    it("POST /cats - no name entered", async () => {
        const res = await supertest(server).post("/cats")
        expect(res.statusCode).toBe(400)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Must enter a name")
    })

    it("DELETE /cats/id", async () => {
        const res = await supertest(server).delete("/cats/1")
        expect(res.statusCode).toBe(204)
    })

    it("DELETE /cats.:id - incorrect ID", async () => {
        const res = await supertest(server).delete("/cats/50")
        expect(res.statusCode).toBe(404)
    })
})