import * as cors from "cors";
import * as express from "express";
import {
   getAllAbout,
   getAboutById,
   addAbout,
   updateAbout,
   deleteAbout,
} from "../models/about.section.models";

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
   const response = await getAllAbout();

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.get("/:id", async (req: Request, res) => {
   const { id } = req.params;
   const response = await getAboutById(id);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.post("/", async (req: Request, res) => {
   const data = req.body;
   const response = await addAbout(data);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.put("/:id", async (req: Request, res) => {
   const data = req.body;
   const { id } = req.params;

   const response = await updateAbout(data, id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.delete("/:id", async (req: Request, res) => {
   const { id } = req.params;

   const response = await deleteAbout(id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

export default app;
