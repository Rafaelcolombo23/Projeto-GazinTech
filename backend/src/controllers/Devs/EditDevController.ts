import { Request, Response } from "express";
import { EditDevServices } from "../../services/Devs/EditDevService";

class EditDevController {
  async handle(req: Request, res: Response) {
    const { id_devs, nome, idade, sexo, datanascimento, hobby, nivel_id } = req.body;

    const editDevService = new EditDevServices();

    const devs = await editDevService.execute({
      id_devs,
      nome,
      idade,
      sexo,
      datanascimento,
      hobby,
      nivel_id,
    });

    return res.json(devs);
  }
}

export { EditDevController };
