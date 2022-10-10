import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 
  response.send("Hello from Firebase!");
});


//create
import createToDo from "./comments/restful/createComments";
export {createToDo};

//delete
import deleteToDo from "./comments/restful/deleteComments";
export {deleteToDo};

//update
import updateToDo from "./comments/restful/updateComments";
export {updateToDo};

//get all
import getAllToDos from "./comments/restful/getAllComments";
export {getAllToDos};

//bad- words
import getAllBadWords from "./comments/restful/getAllBadWords";
export {getAllBadWords};