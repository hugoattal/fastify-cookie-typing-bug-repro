import { FastifyInstance } from "fastify";
import "fastify-cookie";

type TReply = {
    message: string;
}

function handler(server: FastifyInstance) {
    server.post<{ Reply: TReply }>("/", (request, reply) => {
        reply.send({ message: 123 }); // TS2322: Type 'number' is not assignable to type 'string'
    });
}

function handlerWithCookie(server: FastifyInstance) {
    server.post<{ Reply: TReply }>("/", (request, reply) => {
        reply
            .setCookie("hello", "world")
            .send({ message: 123 }); // Missing typescript error
    });
}
