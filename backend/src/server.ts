import Express from "express";
import CORS from "cors";
import { addRoutes } from "./routes";

const app = Express();
app.use(Express.json());
app.use(CORS());

addRoutes(app);

app.listen(3000, () => {
  console.info("Server is Running...");
});
