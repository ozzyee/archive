import * as firebaseAdmin from "src/firebase/firebase-admin";

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from "./new-bugtracker-firebase-adminsdk-j1n0v-19d0e92b95.json";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  });
}

export { firebaseAdmin };
