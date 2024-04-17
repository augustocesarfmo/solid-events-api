import { describe, expect, it } from "vitest";
import { CreateEventUseCase } from "./create-event";
import { InMemoryEventsRepository } from "../repositories/in-memory/in-memory-events-repository";
import { PrismaEventsRepository } from "../repositories/prisma/prisma-events-repository";

describe("Caso de Uso: Criar Evento", () => {
  it("Deve ser possível criar um novo evento", async () => {
    const eventsRepository = new InMemoryEventsRepository();
    const sut = new CreateEventUseCase(eventsRepository);

    const { event } = sut.execute({ name: "Rifa de um cavalo" });

    expect(event.id).toEqual(expect.any(String));
  });
});
