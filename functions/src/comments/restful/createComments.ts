
import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";
import { createCommentRequest } from "../helpers/helpers";
import { ICreateCommentRequest } from "../models/models";

const createComment = createRestuflFunction({
  method: MethodEnum.POST,
  callback: async (req, res) => {
    try {
      const body: ICreateCommentRequest = req.body;

      const comm = createCommentRequest({
        title: body.title,
        desc: body.desc,
      });

      const ref = await db.collection("comments").add(comm);
      const doc = await ref.get();

      res.status(200).json({
        message: "comm created",
        data: {
          id: doc.id,
          comm: doc.data(),
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

export default createComment;