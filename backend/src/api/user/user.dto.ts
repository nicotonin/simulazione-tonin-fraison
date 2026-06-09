import { IsIn, IsString } from "class-validator";

export class QueryListUserDTO {
    @IsString()
    @IsIn(['utente', 'admin'])
    role: string;
} 