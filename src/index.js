import express, { json, urlencoded } from "express";
import routes from "./routes/index.routes.js";
const app = express();

// middlewares
app.use(json());
app.use(urlencoded({ extended: false }));

// routes
app.use(routes);

app.listen(3000);
console.log("Server on port 3000");
