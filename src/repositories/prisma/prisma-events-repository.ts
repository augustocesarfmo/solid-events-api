import { Prisma } from "@prisma/client";
import { EventsRepository } from "../events-repository";
import { prisma } from "../../lib/prisma";

export class PrismaEventsRepository implements EventsRepository {
  async create(data: Prisma.EventCreateInput) {
    const event = await prisma.event.create({
      data,
    });

    return event;
  }

  async findById(id: string) {
    const event = await prisma.event.findUnique({
      where: {
        id,
      },
    });

    return event;
  }

  async findMany(eventIdCursor?: string) {
    const events = await prisma.event.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return events;
  }
}
