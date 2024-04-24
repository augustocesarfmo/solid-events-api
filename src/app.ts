import fastify from "fastify";
import { eventsRoutes } from "./http/controllers/events/routes";

export const app = fastify();

app.register(eventsRoutes);

app.get("/teste", (request, reply) => {
  reply.send("teste");
});
