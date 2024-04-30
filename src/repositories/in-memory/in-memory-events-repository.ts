import { randomUUID } from "node:crypto";

import { EventsRepository } from "../events-repository";
import { Event } from "@prisma/client";

export class InMemoryEventsRepository implements EventsRepository {
  private events: Event[] = [];

  async findById(id: string) {
    const event = this.events.find((item) => item.id === id);

    if (!event) return null;

    return event;
  }

  async findMany(eventIdCursor?: string) {
    return this.events;
  }

  async create({ name }: { name: string }) {
    const event: Event = {
      id: randomUUID(),
      name,
      description: null,
      created_at: new Date(),
    };

    this.events.push(event);

    return event;
  }
}
