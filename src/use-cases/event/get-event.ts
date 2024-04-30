import { Event } from "@prisma/client";
import { EventsRepository } from "../../repositories/events-repository";

interface GetEventUseCaseRequest {
  eventId: string;
}

interface GetEventUseCaseResponse {
  event: Event;
}

export class GetEventUseCase {
  constructor(private eventsRepository: EventsRepository) {}

  async execute({
    eventId,
  }: GetEventUseCaseRequest): Promise<GetEventUseCaseResponse> {
    const event = await this.eventsRepository.findById(eventId);

    if (!event) {
      throw new Error("Recurso não encontrado.");
    }

    return {
      event,
    };
  }
}
