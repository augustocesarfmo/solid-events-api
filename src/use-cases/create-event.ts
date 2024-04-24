import { EventsRepository } from "../repositories/events-repository";
import { Event, Prisma } from "@prisma/client";

interface CreateEventUseCaseRequest extends Prisma.EventCreateInput {}

interface CreateEventUseCaseResponse {
  event: Event;
}

export class CreateEventUseCase {
  constructor(private eventsRepository: EventsRepository) {}

  async execute(data: CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse> {
    const event = await this.eventsRepository.create(data);

    return { event };
  }
}
