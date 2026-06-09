import { Request, Response } from "express";
import FilmService from "./film.service";

class FilmController {

  list = async (req: Request, res: Response)=> {
    try {
      res.json(await FilmService.list());
    } catch (err) {
      res.status(500).json({ message: "Errore nel recupero" });
    }
  };

  get = async (req: Request, res: Response)=> {
    try {
      const item = await FilmService.get(req.params.id);
      if (!item) res.status(404).json({ message: "Non trovato" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: "Errore nel recupero" });
    }
  };

  create = async (req: Request, res: Response)=> {
    try {
      res.status(201).json(await FilmService.create(req.body));
    } catch (err) {
      res.status(400).json({ message: "Errore nella creazione" });
    }
  };

  update = async (req: Request, res: Response)=> {
    try {
      const item = await FilmService.update(req.params.id, req.body);
      if (!item) res.status(404).json({ message: "Non trovato" });
      res.json(item);
    } catch (err) {
      res.status(400).json({ message: "Errore nell'aggiornamento" });
    }
  };

  remove = async (req: Request, res: Response)=> {
    try {
      const item = await FilmService.remove(req.params.id);
      if (!item) res.status(404).json({ message: "Non trovato" });
      res.json({ message: "Eliminato" });
    } catch (err) {
      res.status(500).json({ message: "Errore nell'eliminazione" });
    }
  };
}

export default new FilmController();
