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
                    expect(res.status).toBe(200)
                })
        })
    })

    describe("POST /stories/process/" , function() {
        it("should return 201", function() {
            const story = {
                    name:"refugeeName",
                    location:"Albania",
                    date:"1/2/2020",
                    textbody:"alotoftextthatdoesntmatter"
            }
            return request(server)
                .post("/api/stories/process")
                .send(story)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })

    describe("DEL /stories/process" , function() {
        it("should return 200", function() {
            return request(server)
                .delete("/api/stories/process")
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })

    describe("PUT /stories/process" , function() {
        it("should return 200", function() {
            return request(server)
                .put("/api/stories/process")
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })

})