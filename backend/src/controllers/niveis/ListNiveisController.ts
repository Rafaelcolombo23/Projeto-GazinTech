import { Request, Response } from "express";
import { ListNiveisService } from "../../services/niveis/ListNiveisService";

class ListNiveisController {
  async handle(req: Request, res: Response) {
    const listNivelService = new ListNiveisService();

    const nivel = await listNivelService.execute();

    return res.json(nivel);
  }
}

export {ListNiveisController}
