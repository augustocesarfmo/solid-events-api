import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { FetchEventsUseCase } from "../events/fetch-events";

export function makeFetchEventsUseCase() {
  const prismaEventsRepository = new PrismaEventsRepository();
  const useCase = new FetchEventsUseCase(prismaEventsRepository);

  return useCase;
}
