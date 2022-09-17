import * as admin from "firebase-admin";
import * as firebaseAdmin from "firebase-admin";

// admin.initializeApp({
//    credential: admin.credential.cert({
//       privateKey: functions.config().private.Key.replace(/\\n/g, "\n"),
//       projectId: functions.config().project.id,
//       clientEmail: functions.config().client.email,
//    }),
//    databaseURL: "https://portfolio2022-beb43.firebaseio.com",
// });

firebaseAdmin.initializeApp({
   credential: firebaseAdmin.credential.cert({
      privateKey:
         "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjKCNPiH+5RaPa\nriXgIDq4izELZMtPO+PgnUSyu2fM+kYhYTLyThZqM2f5O6ioo6mEeV1FKbAoZdwS\nqPiyWJcDGSVjF0GnrToKLamJR6Me/vedA+41WeyiL88d4N9A5ICdRIF0nW+1C489\nHkvi2cY0YsRS7mAKrYe+0gwHnamlmulaW1642zBD8Gb3OgZvpxsYHhlXsBLqYEk3\ncG1n6qXonc9BAMYEWz7VnQqEMyvDYrD4Vts3TWCGkS3SyOsKRx55ZsJG6+P8PGPd\nJlQe5zAsu2GvEbVM45O0833YIO5kQqJT18dKgkBPvrcxa+NhYgTGgrEbnmaWCWei\nw3rbhstpAgMBAAECggEAC95FVUl9Wv2LGgLte+R0SQzM/EJwfJrDbIkcIHE773/s\nHoz6vv/5pu+G2m0hy2SeVeXbKEcMSqAANnZGoviJQZ8wZkkgjEEwVeG08ai9n6lV\n2zzYNNbN/Q1DwG1laAvHJEmBrjkukUmeOYis5ftH7PMbS1oOL/CoDXQrjllEaCij\nBALfm8M4k4rfrgw9NL47855WgyP5KNm3kkyCTJ0TgEu946q/X3gRbE/yTIkN0EU5\nI2ahQppEkBvLPwJSxgIptMiS6uprhtZCOWuOEQZNVhggkfSTmayK+Sm7a9irMFVe\nnKo+IRtHW12zwKuFIRuWWG04EXppY0bdRT4YUTXloQKBgQDfPMonamWVlT5lC7Br\nLDzjXV0i1fFkP4T/gno2yaU5/3PM6XpXQdmuL6ZrvUGt95y3MVb1bnUrsoBtdtqE\n+oXITGEKPkVCsgBTFPRA6Bi6bXMQGdgtmX4ovlv6GQqkR32aYTgb8nl0TQvLW1QW\nEFMGvL8Zfpl6zPjkmlF4lNFF+QKBgQC7GhG9agsZd3s1Wu2z29hDywJctkOSr5a7\nIh2VWfVZXUpF0gwP8PkUXeDkiLaXRcOCqilwaUw+GST2trvWsTvT3OoGn7eI/ZAd\noiy0r1RCoXDaZ8YBbLFa0L/WrnLhHap+LeOfudp0vZ/daU8+jI9FIsVuhcFAzw1J\njhx2Ry5M8QKBgDdNDNskzVN37EQF2EdEZzT/zPGzRCBMZ/sP7Iyj+U1bzekGMatq\nAa3X2gc4lAuvml/7VgpouZgAmTYEym9EzF1pJmTuNiQmilQKjdOCa5XLRUTI0jfB\nnXIkbg6Po4Y8u43B5a9uqs23xGM1Fah9lMPHgCOlrAmyuzmOTP5tB0apAoGAHY0V\nhjQsgp4zcI7nAkRT2QlEWz5SV+Wxyeaug3tM3At3AqYVT6NAw+276nyJUkUrhwS3\nPND0wM4Z33mnG1as216F+/vX8iQSUgveQb97cHatK2G+jVUMggp8cjzlWhbkab93\nty+UiGG20TKj2H481q+SPU2U41aQg7CVYD0H3BECgYEAsi0Nx8FRQ7AO6XkQvVl9\neigTvE5FMPnq7hwzpo4BRMURZZFbwO5JIx7D8mzk5YFXRROQFdNx7hHBPu1dQ/49\nxJ8JLJ9qKvvqNgCUegdmerh8i9fABIqOVCry2OF8SK8/B4huvkM2J2UpLWOTsZ9f\nzsaR6Trd902poWRlvKojzm8=\n-----END PRIVATE KEY-----\n",
      clientEmail:
         "firebase-adminsdk-7x5le@portfolio2022-beb43.iam.gserviceaccount.com",
      projectId: "portfolio2022-beb43",
   }),
   databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
});

const db = admin.firestore();
export { admin, db };
