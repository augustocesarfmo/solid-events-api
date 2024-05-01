import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { GetEventUseCase } from "../events/get-event";

export function makeGetEventUseCase() {
  const prismaEventsRepository = new PrismaEventsRepository();
  const useCase = new GetEventUseCase(prismaEventsRepository);

  return useCase;
}
