import * as cors from "cors";
import * as express from "express";
import {
   getAllUsers,
   getUsersById,
   addUsers,
   updateUsers,
   deleteUsers,
} from "../models/users.models";

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
   const response = await getAllUsers();

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.get("/:id", async (req: Request, res) => {
   const { id } = req.params;
   const response = await getUsersById(id);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.post("/", async (req: Request, res) => {
   const data = req.body;
   const response = await addUsers(data);

   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.put("/:id", async (req: Request, res) => {
   const data = req.body;
   const { id } = req.params;

   const response = await updateUsers(data, id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

app.delete("/:id", async (req: Request, res) => {
   const { id } = req.params;

   const response = await deleteUsers(id);
   res.status(response.statusCode).json({
      ...response.data,
   });
});

export default app;
