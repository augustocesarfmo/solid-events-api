import { beforeEach, describe, expect, it } from "vitest";

import { InMemoryEventsRepository } from "../../repositories/in-memory/in-memory-events-repository";
import { FetchEventsUseCase } from "./fetch-events";

let eventsRepository: InMemoryEventsRepository;
let sut: FetchEventsUseCase;

describe("Caso de Uso: Buscar Eventos", () => {
  beforeEach(() => {
    eventsRepository = new InMemoryEventsRepository();
    sut = new FetchEventsUseCase(eventsRepository); // sut = System Under Test
  });

  it("Deve ser possível obter os eventos disponíveis", async () => {
    await eventsRepository.create({ name: "Rifa de um cavalo" });
    await eventsRepository.create({ name: "Rifa de um caminhão" });
    await eventsRepository.create({ name: "Rifa de um celular" });

    const { events } = await sut.;

    expect(events).toHaveLength(2);
  });
});
