import { Router } from "express";
import Film from "stream/iter";
import FilmController from "./film.controller";
import { AddFilmDTO, UpdateFilmDTO } from "./film.dto";
import { validate } from "../../lib/validation-middleware";

const router = Router();

router.get("/", FilmController.list);
router.get("/:id", FilmController.get);
router.post("/",validate(AddFilmDTO),FilmController.create);
router.put("/:id",validate(UpdateFilmDTO),FilmController.update);
router.delete("/:id", FilmController.remove);

export default router;