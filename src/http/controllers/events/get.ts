import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeGetEventUseCase } from "../../../use-cases/factories/make-get-event-use-case";
import { ResourceNotFoundError } from "../../../use-cases/errors/resource-not-found-error";

const paramsSchema = z.object({
  eventId: z.string(),
});

export async function get(request: FastifyRequest, reply: FastifyReply) {
  // Valida os dados da requisição
  const data = paramsSchema.parse(request.params);

  const getEventUseCase = makeGetEventUseCase();

  try {
    const { event } = await getEventUseCase.execute({
      eventId: data.eventId,
    });

    return reply.status(200).send(event);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }
  }
}
