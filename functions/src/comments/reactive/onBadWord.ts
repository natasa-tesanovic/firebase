import * as functions from "firebase-functions";


const onBadWordCreated = functions.firestore
  .document("comments/{commentsId}")
  .onCreate((snapshot, context) => {
    const comm = snapshot.data();

    let badWords:string[]=["fuck", "boody hell", "prick" ];
    let array = comm.body.split(" ");
  
    let words = array.length;

  badWords.forEach((bad)=>{
    for(let i = 0; i< words; i++){
      if(bad == array[i]){
        let stars ="*****";
        array[i] = stars;
      }
    }
  })
    

console.log(array);

return null;
  });

export default onBadWordCreated;