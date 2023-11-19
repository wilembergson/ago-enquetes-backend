import { Controller, Inject, Post, Body, Res } from "@nestjs/common";
import { Response } from "express";
import { EnqueteDependencies } from "src/ioc/enquete/enquete.dependencies";
import { CriarEnqueteDTO } from "./dto/enquete";
import { CriarEnquete } from "src/core/domain/use-cases/enquete";

@Controller('enquete')
export class EnqueteController{
    constructor(
        @Inject(EnqueteDependencies.CriarEnquete)
        private readonly criarEnquete: CriarEnquete,
    ){}

    @Post()
    async criarNovaEnquete(@Res() res: Response, @Body() body: CriarEnqueteDTO): Promise<void>{
        await this.criarEnquete.execute({
            pergunta: body.pergunta,
            tempo_segundos: parseInt(body.tempo_segundos)
        })
        res.status(201).send({
            message:"Enquete criada!"
        })
    }
}