import { IsNotEmpty } from "@nestjs/class-validator"

export class AdicionarRespostaDTO {
    @IsNotEmpty()
    resposta:string

    @IsNotEmpty()
    crm: string

    @IsNotEmpty()
    id_enquete: string
}