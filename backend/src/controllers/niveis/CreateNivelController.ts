import { Request, Response } from "express";
import { CreateNivelService } from "../../services/niveis/createNivelService";

class CreateNivelController {
  async handle(req: Request, res: Response) {
    const {name} = req.body;

    const createNivelService = new CreateNivelService();

    const nivel = await createNivelService.execute({name});

    return res.json(nivel);
  }
}

export { CreateNivelController };
