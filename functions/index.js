const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

async function createUserDocument(user) {
  const { uid, email, displayName, photoURL } = user;
  //const newRole = isProducer === "Yes" ? "producer" : "user";
  const createdAt = new Date();
  const additionalData = { city: "", isProducer: "" };

  firestore
    .collection("users")
    .doc(uid)
    .set({
      displayName,
      email,
      photoURL,
      createdAt,
      ...additionalData,
    });
}

exports.createUserDocument = functions.auth.user().onCreate(createUserDocument);
