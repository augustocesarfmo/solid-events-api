import { FastifyInstance } from "fastify";

import { create } from "./create";
import { get } from "./get";
import { fetch } from "./fetch";

export async function eventsRoutes(app: FastifyInstance) {
  app.post("/events", create);
  app.get("/events/:eventId", get);
  app.get("/events", fetch);
}
