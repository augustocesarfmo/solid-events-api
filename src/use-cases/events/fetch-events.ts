import { Event } from "@prisma/client";
import { EventsRepository } from "../../repositories/events-repository";

interface FetchEventsUseCaseRequest {
  eventIdCursor?: string;
}

interface FetchEventsUseCaseResponse {
  events: Event[];
}

export class FetchEventsUseCase {
  constructor(private eventsRepository: EventsRepository) {}

  async execute({
    eventIdCursor,
  }: FetchEventsUseCaseRequest): Promise<FetchEventsUseCaseResponse> {
    const events = await this.eventsRepository.findMany(eventIdCursor);

    return {
      events,
    };
  }
}
