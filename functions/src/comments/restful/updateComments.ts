import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const updateComments = createRestuflFunction({
  method: MethodEnum.PATCH,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];
      const title = req.body["title"];

      const query = db.collection("comments").doc(docId);
      await query.set({ title }, { merge: true });
      const snap = await query.get();

      res.status(200).json({
        message: "Comments updated",
        data: {
          id: docId,
          comm: snap.data(),
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default updateComments;
