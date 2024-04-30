import { beforeEach, describe, expect, it } from "vitest";

import { InMemoryEventsRepository } from "../../repositories/in-memory/in-memory-events-repository";
import { CreateEventUseCase } from "./create-event";

let eventsRepository: InMemoryEventsRepository;
let sut: CreateEventUseCase;

describe("Caso de Uso: Criar Evento", () => {
  beforeEach(() => {
    eventsRepository = new InMemoryEventsRepository();
    sut = new CreateEventUseCase(eventsRepository); // sut = System Under Test
  });

  it("Deve ser possível criar um novo evento", async () => {
    const { event } = await sut.execute({ name: "Rifa de um cavalo" });

    expect(event.id).toEqual(expect.any(String));
  });
});
