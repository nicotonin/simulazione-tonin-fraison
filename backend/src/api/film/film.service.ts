import { create } from "domain";
import { get } from "http";

import {FilmModel} from "./film.model";
import { Film } from "./film.entity";

class FilmService {

  list() {
    return FilmModel.find().populate('categoryID');
  }

  get(id: string) {
    return FilmModel.findById(id).populate('categoryID');
  }

  create(data:Film) {
    return FilmModel.create(data);
  }

  update(id: string, data: any) {
    return FilmModel.findByIdAndUpdate(id, data, { new: true });
  }

  remove(id: string) {
    return FilmModel.findByIdAndDelete(id);
  }
}

export default new FilmService();