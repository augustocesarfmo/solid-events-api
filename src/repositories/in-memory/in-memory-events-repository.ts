import { randomUUID } from "node:crypto";
import { EventsRepository } from "../events-repository";

import { Event } from "../../types";

export class InMemoryEventsRepository implements EventsRepository {
  private events: Event[] = [];

  findById(id: string) {
    throw new Error("Method not implemented.");
  }
  findMany(eventIdCursor?: string) {
    throw new Error("Method not implemented.");
  }

  create({ name }: { name: string }): Event {
    const event: Event = {
      id: randomUUID(),
      name,
    };

    this.events.push(event);
    return event;
  }
}
