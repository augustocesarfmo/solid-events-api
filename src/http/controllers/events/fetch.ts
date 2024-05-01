import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeFetchEventsUseCase } from "../../../use-cases/factories/make-fetch-events-use-case";

const paramsSchema = z.object({
  eventIdCursor: z.string().optional(),
});

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  // Valida os dados da requisição
  const { eventIdCursor } = paramsSchema.parse(request.params);

  const createEventUseCase = makeFetchEventsUseCase();

  const { events } = await createEventUseCase.execute({
    eventIdCursor,
  });

  return reply.status(200).send(events);
}
