import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

categorySchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete (ret as unknown as any)._id;
    delete (ret as unknown as any).__v;
    return ret;
  }
});

categorySchema.set("toObject", {
  virtuals: true,
  transform: (_, ret) => {
    delete (ret as unknown as any)._id;
    delete (ret as unknown as any).__v;
    return ret;
  }
});

export const CategoryModel = model("Category", categorySchema);