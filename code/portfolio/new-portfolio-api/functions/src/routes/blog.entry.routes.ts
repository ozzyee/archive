import * as cors from "cors";
import * as express from "express";
import {
   getAllEntries,
   getEntriesById,
   addEntry,
   updateEntry,
   deleteEntry,
} from "../models/blog.entry.models";

const app = express();
app.use(cors());

type EntryType = {
   title: string;
   text: string;
};

type Request = {
   body: EntryType;
   params: { id: string };
};

app.get("/", async (req: Request, res) => {
   const response = await getAllEntries();

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.get("/:id", async (req: Request, res) => {
   const { id } = req.params;
   const response = await getEntriesById(id);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.post("/", async (req: Request, res) => {
   const data = req.body;
   const response = await addEntry(data);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.put("/:id", async (req: Request, res) => {
   const data = req.body;
   const { id } = req.params;

   const response = await updateEntry(data, id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.delete("/:id", async (req: Request, res) => {
   const { id } = req.params;

   const response = await deleteEntry(id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

export default app;
