import { Request, Response } from "express";
import { CreateDevsService } from "../../services/Devs/CreateDevsService";

class CreateDevsController {
  async handle(req: Request, res: Response) {
    const { nome, sexo, datanascimento, idade, hobby, nivel_id } = req.body;

    const createDevsServices = new CreateDevsService();

    const devs = await createDevsServices.execute({
      nome,
      sexo,
      datanascimento,
      idade,
      hobby,
      nivel_id,
    });

    return res.json(devs);
  }
}

export { CreateDevsController };
