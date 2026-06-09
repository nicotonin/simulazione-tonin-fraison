import { create } from "domain";
import { get } from "http";
import Category from "stream/iter";
import {CategoryModel} from "./category.model";

class CategoryService {

  list() {
    return CategoryModel.find();
  }

  get(id: string) {
    return CategoryModel.findById(id);
  }

  create(data: any) {
    return CategoryModel.create(data);
  }

  update(id: string, data: any) {
    return CategoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  remove(id: string) {
    return CategoryModel.findByIdAndDelete(id);
  }
}

export default new CategoryService();