import { Event } from "../types";
import { EventsRepository } from "../repositories/events-repository";

interface CreateEventUseCaseRequest {
  name: string;
}

interface CreateEventUseCaseResponse {
  event: Event;
}

export class CreateEventUseCase {
  constructor(private eventsRepository: EventsRepository) {}

  execute({ name }: CreateEventUseCaseRequest): CreateEventUseCaseResponse {
    const event = this.eventsRepository.create({ name });

    return {
      event,
    };
  }
}
