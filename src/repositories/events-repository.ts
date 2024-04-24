import { Event, Prisma } from "@prisma/client";

export interface EventsRepository {
  create(data: Prisma.EventCreateInput): Promise<Event>;
  findById(id: string): Promise<Event | null>;
  findMany(eventIdCursor?: string): Promise<Event[]>;
}
