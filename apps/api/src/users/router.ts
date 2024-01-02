import { NextFunction, Response, Router, Request } from "express";
const userRouter = Router();
import { pushEvent } from "../enqueue";

userRouter.get(
  "/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      hi: "Message",
    });
  }
);

userRouter.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      hi: "Message",
    });
  }
);

userRouter.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({
      hi: "Message",
    });
  }
);

export default userRouter;