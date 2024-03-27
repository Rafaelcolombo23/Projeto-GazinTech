import { Request, Response } from "express";
import { RemoveDevService } from "../../services/Devs/RemoveDevsService";

class RemoveDevsController {
  async handle(req: Request, res: Response) {
    const id_devs = req.query.id_devs as string;

    const removeDevsService = new RemoveDevService();

    const devs = await removeDevsService.execute({
      id_devs,
    });

    return res.json(devs);
  }
}

export { RemoveDevsController };
