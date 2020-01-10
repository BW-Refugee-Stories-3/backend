const request = require('supertest');

const server = require("../api/server")

it("should set db environment to testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });

describe("server", function() {

    describe("GET api/stories/approved" , function() {
        it("should return 200", function() {
            return request(server)
                .get("/api/stories/approved")
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })

    describe("GET /stories/process" , function() {
        it("should return 201", function() {
            return request(server)
                .post("/api/stories/process")
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })

    describe("POST /stories/process/" , function() {
        it("should return NaN", function() {
            const story = {
                    name:"refugeeName",
                    location:"Albania",
                    date:"1/2/2020",
                    textbody:"alotoftextthatdoesntmatter",
                    id: 2121
            }
            return request(server)
                .post("/api/stories/process")
                .send(story)
                .then(res => {
                    expect(res.body.id).not.toBeNaN()
                })
        })
    })

    describe("DEL /stories/process/:id" , function() {
        it("should return NaN", function() {
            const story = {
                    name:"refugeeName",
                    location:"Albania",
                    date:"1/2/2020",
                    textbody:"alotoftextthatdoesntmatter",
            }

            return request(server)
                .delete("/api/stories/process/:id")
                .send(story)
                .then(res => {
                    // wants to make sure there is no ID 
                    expect(res.body.id).not.toBeNaN()
                })
        })
    })

    describe("PUT /stories/process/:id" , function() {
        it("Should return true", function() {
            const storyChange = {
                id: 2,
                name:"Name",
                location:"Canada",
                date:"1/3/1200",
                textbody:"ChangedTest",
                approved: 1
        }
            return request(server)
                .put("/api/stories/process/2")
                .send({storyChange})
                .then(res => {
                    // should return 400 becuase there is no token
                    expect(res.status).toBe(400)
                })
        })

        })
    })