
import { Category } from './category.entity';

export type Film = {
  id: string;
  name: string;
  description: string;
  rating: number;
  releaseDate: Date;
  categoryID: Category | string;
};
