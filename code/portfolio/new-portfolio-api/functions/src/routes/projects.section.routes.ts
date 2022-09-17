import * as cors from "cors";
import * as express from "express";
import {
   getAllProjects,
   getProjectsById,
   addProjects,
   updateProjects,
   deleteProjects,
} from "../models/projects.section.models";

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
   const response = await getAllProjects();

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.get("/:id", async (req: Request, res) => {
   const { id } = req.params;
   const response = await getProjectsById(id);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.post("/", async (req: Request, res) => {
   const data = req.body;
   const response = await addProjects(data);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.put("/:id", async (req: Request, res) => {
   const data = req.body;
   const { id } = req.params;

   const response = await updateProjects(data, id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.delete("/:id", async (req: Request, res) => {
   const { id } = req.params;

   const response = await deleteProjects(id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

export default app;
