import { Event } from "@prisma/client";
import { EventsRepository } from "../repositories/events-repository";

interface FetchEventUseCaseRequest {
  eventIdCursor?: string;
}

interface FetchEventUseCaseResponse {
  events: Event[];
}

export class FetchEventUseCase {
  constructor(private eventsRepository: EventsRepository) {}

  execute({
    eventIdCursor,
  }: FetchEventUseCaseRequest): FetchEventUseCaseResponse {
    const events = this.eventsRepository.findMany(eventIdCursor);

    return {
      events,
    };
  }
}
