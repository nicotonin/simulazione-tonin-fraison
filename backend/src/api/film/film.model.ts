import { model, Schema } from "mongoose";

const filmSchema = new Schema(
  {
    name: { type: String, required: true }
      , description: { type: String, required: true } 
      , rating: { type: Number, required: true }
      , releaseDate: { type: Date, required: true }
      , categoryID: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
  },
  { timestamps: true }
);

filmSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete (ret as unknown as any)._id;
    delete (ret as unknown as any).__v;
    return ret;
  }
});

filmSchema.set("toObject", {
  virtuals: true,
  transform: (_, ret) => {
    delete (ret as unknown as any)._id;
    delete (ret as unknown as any).__v;
    return ret;
  }
});

export const FilmModel = model("Film", filmSchema);