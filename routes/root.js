"use strict";
import gpio from "onoff";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: false };
  });

  fastify.post("/1", async function (request, reply) {
    console.log(request.body);
    return request.body;
  });

  fastify.post("/motor", async function (request, reply) {
    console.log(request.body);
    return request.body;
  });
};
