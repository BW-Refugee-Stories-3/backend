const request = require('supertest');

const server = require("./server")

it("should set db environment to testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });

describe("server", function() {
    describe("GET /" , function() {
        it("should return html", function() {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/html/i)
                })
        })
    })
})
