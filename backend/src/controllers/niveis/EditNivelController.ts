import { Response, Request } from "express";
import { EditNivelService } from "../../services/niveis/EditNivelService";

class EditNivelController {
  async handle(req: Request, res: Response) {
    const {id_nivel, name} = req.body;

    const editNivelService = new EditNivelService();

    const nivel = await editNivelService.execute({
      name,
      id_nivel,
    });

    return res.json(nivel);
  }
}

export { EditNivelController };
