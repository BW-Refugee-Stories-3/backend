const request = require('supertest');

const server = require("../api/server")

it("should set db environment to testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });

describe("server", function() {
    describe("POST /register" , function() {
        it("should return 200", function() {
            return request(server)
                .post("/api/auth/register")
                .send({
                    username: "1234567",
                    password: "123456789"
                })
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })

    describe("POST /login" , function() {
        it("should return 201", function() {
            return request(server)
                .post("/api/auth/login")
                .send({
                    username: "1234567",
                    password: "123456789"
                })
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
    })

})