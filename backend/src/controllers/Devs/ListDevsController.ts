import { Request, Response } from "express";
import { ListDevsService } from "../../services/Devs/ListDevsService";


class ListDevsController {
  async handle(req: Request, res: Response) {
    const listDevsService = new ListDevsService();

    const devs = await listDevsService.execute();

    return res.json(devs);
  }
}

export { ListDevsController };
