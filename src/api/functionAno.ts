import { Router, Request, Response } from "express";

const router = Router();

router.get('/testRouting', (req: Request, res: Response) => {
  res.json('test_ok');
});

export default router;
