import { Event } from "../../types";
import { EventsRepository } from "../events-repository";

export class PrismaEventsRepository implements EventsRepository {
  create({ name }: { name: string }): Event {
    const event: Event = {
      id: "1",
      name: "event",
    };

    return event;
  }
}
