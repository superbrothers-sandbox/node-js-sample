"use strict";

const request = require("supertest");
const index = require("../index.js");

describe("GET /", () => {
    it("respond with 200", done => {
        request(index)
            .get("/")
            .expect(200, "Hello World!", done)
    });
});
