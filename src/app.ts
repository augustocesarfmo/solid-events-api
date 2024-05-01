import fastify from "fastify";
import { ZodError } from "zod";

import { eventsRoutes } from "./http/controllers/events/routes";
import { ResourceNotFoundError } from "./use-cases/errors/resource-not-found-error";

export const app = fastify();

app.register(eventsRoutes);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: error.message });
  }

  if (process.env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});
