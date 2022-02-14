import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import {
    getAllContact,
    createContact,
    getOneContact,
    updateContact,
    deleteContact,
} from "./controllers/contacts.ts";
import { ErrorMiddleware, LogMiddleware } from "./utils/middlewares.ts";

const app = new Application();
app.use(LogMiddleware)
    .use(ErrorMiddleware)

app.get("/contacts", getAllContact)
    .post("/contact", createContact)
    .get("/contact/:id", getOneContact)
    .put("/contact/:id", updateContact)
    .delete("/contact/:id", deleteContact)
    .start({ port: 5000 });

console.log(`server listening on http://localhost:5000`);