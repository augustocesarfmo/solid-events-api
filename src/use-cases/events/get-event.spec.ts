import { beforeEach, describe, expect, it } from "vitest";

import { InMemoryEventsRepository } from "../../repositories/in-memory/in-memory-events-repository";
import { GetEventUseCase } from "./get-event";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

let eventsRepository: InMemoryEventsRepository;
let sut: GetEventUseCase;

describe("Caso de Uso: Obter Evento", () => {
  beforeEach(() => {
    eventsRepository = new InMemoryEventsRepository();
    sut = new GetEventUseCase(eventsRepository); // sut = System Under Test
  });

  it("Deve ser possível obter evento", async () => {
    const createdEvent = await eventsRepository.create({
      name: "Vaquejada de Surubim",
    });

    const { event } = await sut.execute({ eventId: createdEvent.id });

    expect(event.id).toEqual(createdEvent.id);
  });

  it("Não deve ser possível obter um evento com um ID inexistente", async () => {
    await expect(() =>
      sut.execute({ eventId: "non-existing-id" })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
