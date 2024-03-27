import { Request, Response } from "express";
import { RemoveNivelService } from "../../services/niveis/RemoveNivelService";

class RemoveNivelController {
  async handle(req: Request, res: Response) {
    const id_nivel = req.query.id_nivel as string;
    const RemoveDevsService = new RemoveNivelService();

    const nivel = await RemoveDevsService.execute({
      id_nivel,
    });

    return res.json(nivel);
  }
}

export { RemoveNivelController };
