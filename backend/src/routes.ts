import { Router } from "express";
import "express-async-errors";
import { CreateNivelController } from "./controllers/niveis/CreateNivelController";
import { ListNiveisController } from "./controllers/niveis/ListNiveisController";
import { RemoveNivelController } from "./controllers/niveis/RemoveNivelController";
import { EditNivelController } from "./controllers/niveis/EditNivelController";
import { CreateDevsController } from "./controllers/Devs/CreateDevsController";
import { ListDevsController } from "./controllers/Devs/ListDevsController";
import { RemoveDevsController } from "./controllers/Devs/RemoveDevsController";
import { EditDevController } from "./controllers/Devs/EditDevController";


const router = Router();

//Rotas Niveis
router.post("/nivel", new CreateNivelController().handle);
router.get("/nivel", new ListNiveisController().handle);
router.delete("/nivel/remove", new RemoveNivelController().handle);
router.put("/nivel", new EditNivelController().handle);
// Rotas Devs
router.post("/devs", new CreateDevsController().handle);
router.get("/devs", new ListDevsController().handle);
router.delete("/devs/remove", new RemoveDevsController().handle);
router.put("/devs", new EditDevController().handle);

export { router };
