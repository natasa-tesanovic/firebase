import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const getAllToComments = createRestuflFunction({
  method: MethodEnum.GET,
  callback: async (req, res) => {
    try {
      const query = db.collection("comments");
      const querySnapshot = await query.get();
      const data: { id: string; comm: FirebaseFirestore.DocumentData }[] = [];
      querySnapshot.forEach((doc) =>
        data.push({
          id: doc.id,
          comm: doc.data(),
        })
      );

      res.status(200).json({
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default getAllToComments;