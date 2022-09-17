import { db } from "../config/firebase";

type EntryType = {
   title: string;
   text: string;
};

export const getAllUsers  = async () => {
   let message = `got data successfully`,
      _data,
      hasError = false;

   try {
      const allEntries: EntryType[] = [];
      const querySnapshot = await db.collection("users").get();
      querySnapshot.forEach((doc: any) => allEntries.push(doc.data()));
      _data = allEntries;
   } catch (err) {
      const error = err as Error;
      const _message = error.message;
      hasError = true;
      message = _message;
   }

   if (hasError) {
      const unsuccessfulRes = {
         statusCode: 500,
         data: { status: "unsuccessful", Error: message },
      };
      return unsuccessfulRes;
   }

   const successfulRes = {
      statusCode: 200,
      data: { status: "successful", message, _data },
   };

   return successfulRes;
};

export const getUsersById = async (id: string) => {
   let message = `got data with id: ${id}`,
      _data,
      hasError = false;

   try {
      const ref = await db.collection("users").doc(id).get();
      const data = ref.data();
      _data = data;

      if (!data) {
         throw {
            message: `no data with id: ${id}`,
         };
      }
   } catch (err) {
      const error = err as Error;
      const _message = error.message;
      hasError = true;
      message = _message;
   }

   if (hasError) {
      const unsuccessfulRes = {
         statusCode: 500,
         data: { status: "unsuccessful", Error: message },
      };
      return unsuccessfulRes;
   }

   const successfulRes = {
      statusCode: 200,
      data: { status: "successful", message, _data },
   };

   return successfulRes;
};

export const addUsers = async (data: object) => {
   let message = "entry added successfully",
      _data,
      hasError = false;

   try {
      const entry = db.collection("users").doc();
      const entryObject = {
         id: entry.id,
         ...data,
      };
      await entry.set(entryObject);
      _data = entryObject;
   } catch (err) {
      const error = err as Error;
      const _message = error.message;
      hasError = true;
      message = _message;
   }

   if (hasError) {
      const unsuccessfulRes = {
         statusCode: 500,
         data: { status: "unsuccessful", Error: message },
      };
      return unsuccessfulRes;
   }

   const successfulRes = {
      statusCode: 200,
      data: { status: "successful", message, _data },
   };

   return successfulRes;
};

export const updateUsers = async (data: object, id: string) => {
   let _data,
      statusCode = 200,
      status,
      hasError = false,
      message = `entry with id: ${id} updated successfully`;

   try {
      const entry = db.collection("users").doc(id);

      const entryObject = {
         id: id,
         ...data,
      };

      await entry.set(entryObject).catch((error) => {
         hasError = true;
         statusCode = 400;
         status = "error";
         message = error.message;
      });
      _data = entryObject;
   } catch (err) {
      const error = err as Error;
      const _message = error.message;
      hasError = true;
      message = _message;
   }

   if (hasError) {
      const unsuccessfulRes = {
         statusCode,
         data: { status, Error: message },
      };
      return unsuccessfulRes;
   }

   const successfulRes = {
      statusCode: 200,
      data: { status: "successful", message, _data },
   };

   return successfulRes;
};

export const deleteUsers = async (id: string) => {
   let statusCode = 200,
      status,
      hasError = false,
      message = `entry with id: ${id} deleted successfully`;

   try {
      const entry = db.collection("users").doc(id);

      await entry.delete().catch((error) => {
         hasError = true;
         statusCode = 400;
         status = "error";
         message = error.message;
      });
   } catch (err) {
      const error = err as Error;
      const _message = error.message;
      hasError = true;
      message = _message;
   }

   if (hasError) {
      const unsuccessfulRes = {
         statusCode: statusCode,
         data: { status, Error: message },
      };
      return unsuccessfulRes;
   }

   const successfulRes = {
      statusCode: 200,
      data: { status: "successful", message },
   };

   return successfulRes;
};
