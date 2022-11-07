import App from "./app";
import { config } from "dotenv";

import "./../infrastructure/connections/mongoose";
config();
// const port: number = process.env.PORT || 8080;
const port: number = Number(process.env.PORT);

const app = new App(port);
app.run();
