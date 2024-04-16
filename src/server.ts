import { app } from "./app";

const port = 3000;

app
  .listen({
    host: "0.0.0.0",
    port,
  })
  .then(() => {
    console.log(`HTTP server running in port: ${3000}`);
  });
