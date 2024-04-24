import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEventUseCase } from "../../../use-cases/create-event";
import { PrismaEventsRepository } from "../../../repositories/prisma/prisma-events-repository";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { name } = request.body;

  const prismaEventsRepository = new PrismaEventsRepository();
  const createEventUseCase = new CreateEventUseCase(prismaEventsRepository);

  const { event } = await createEventUseCase.execute({
    name,
  });

  return reply.status(201).send(event);
}
