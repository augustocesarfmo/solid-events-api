import { Event } from "../types";

export interface EventsRepository {
  create({ name }: { name: string }): Event;
}
