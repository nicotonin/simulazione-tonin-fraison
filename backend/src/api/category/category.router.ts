import { Router } from "express";
import Category from "stream/iter";
import CategoryController from "./category.controller";
import { AddCategoryDTO, UpdateCategoryDTO } from "./category.dto";
import { validate } from "../../lib/validation-middleware";

const router = Router();



router.get("/", CategoryController.list);
router.get("/:id", CategoryController.get);
router.post("/",validate(AddCategoryDTO),CategoryController.create);
router.put("/:id",validate(UpdateCategoryDTO),CategoryController.update);
router.delete("/:id", CategoryController.remove);

export default router;