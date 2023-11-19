import { IsNotEmpty } from "@nestjs/class-validator";

export class CriarEnqueteDTO {
    @IsNotEmpty()
    pergunta:string

    @IsNotEmpty()
    tempo_segundos: string
}