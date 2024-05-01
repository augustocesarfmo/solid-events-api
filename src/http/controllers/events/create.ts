import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { makeCreateEventUseCase } from "../../../use-cases/factories/make-create-event-use-case";

const bodySchema = z.object({
  name: z.string(),
});

export async function create(request: FastifyRequest, reply: FastifyReply) {
  // Valida os dados da requisição
  const data = bodySchema.parse(request.body);

  const createEventUseCase = makeCreateEventUseCase();

  const { event } = await createEventUseCase.execute(data);

  return reply.status(201).send(event);
}
