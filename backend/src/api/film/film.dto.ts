import { Type } from "class-transformer";
import { IsString, IsOptional, IsNumber, IsDateString, IsNotEmpty, IsDate, IsMongoId } from "class-validator";


export class AddFilmDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  releaseDate: Date;

  @IsMongoId()
  @IsNotEmpty()
  categoryID: string;


}

export class UpdateFilmDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  releaseDate?: Date;

  @IsString()
  @IsOptional()
  categoryID?: string;
}