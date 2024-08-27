# SOLID Events API

API REST Node.js que demonstra a aplicação de Princípios e Padrões de Projeto no gerenciamento de `eventos`, incluindo testes unitários e integração com um banco de dados PostgreSQL.

**Princípios de Projeto (SOLID):**

- Single Responsibility Principle (Princípio da Responsabilidade Única)
- Interface Segregation Principle (Princípio da Segregação de Interface)
- Dependency Inversion Principle (Princípio da Inversão de Dependência)

**Padrões de Projetos**

- Factory Pattern (Padrão de Fábrica)
- Repository Pattern (Padrão de Repositório)

## 🚀 Tecnologias

Este projeto foi desenvolvido para portfólio com as seguintes tecnologias:

- [typescript](https://www.typescriptlang.org/)
- [fastify](https://fastify.dev/docs/v4.26.x/)
- [docker](https://www.docker.com/)
- [prisma](https://www.prisma.io/docs/getting-started)
- [zod](https://zod.dev/)
- [vitest](https://vitest.dev/guide/)

## ℹ️ Executando

Para clonar e executar este projeto, execute na sua linha de comando:

```bash
# Clonando este repositório
$ git clone https://github.com/augustocesarfmo/solid-events-api.git

# Acessando o repositório
$ cd solid-events-api

# Instalando as dependências
$ npm install

# Criando o banco de dados PostgreSQL da API com Docker
$ docker compose up -d

# Aplicando as migrações no banco de dados
$ npx prisma migrate dev

# Executando o app
$ npm run dev
```

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](https://github.com/augustocesarfmo/solid-events-api/blob/main/LICENSE.md) para obter mais informações.

---

by Augusto César Oliveira 👐🏼
