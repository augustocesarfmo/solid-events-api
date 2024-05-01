import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeGetEventUseCase } from "../../../use-cases/factories/make-get-event-use-case";

const paramsSchema = z.object({
  eventId: z.string(),
});

export async function get(request: FastifyRequest, reply: FastifyReply) {
  // Valida os dados da requisição
  const data = paramsSchema.parse(request.params);

  const createEventUseCase = makeGetEventUseCase();

  const { event } = await createEventUseCase.execute({
    eventId: data.eventId,
  });

  return reply.status(200).send(event);
}
