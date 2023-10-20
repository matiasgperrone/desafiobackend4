import app from "./app.js";
import { init } from "./socket.js";

const PORT = 8076;

const httpServer = app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

init(httpServer);
