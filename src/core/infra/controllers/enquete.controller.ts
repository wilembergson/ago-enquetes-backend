import { Response } from "express";
import { Controller, Inject, Post, Body, Res, Put, Param, Get } from "@nestjs/common";
import { AtualizarStatus, BuscarAtiva, CriarEnquete } from "@domain/use-cases/enquete";
import { EnqueteDependencies } from "src/ioc/enquete";
import { CriarEnqueteDTO } from "./dto/enquete";
import { Enquete } from "@domain/entity";

@Controller('enquete')
export class EnqueteController {
    constructor(
        @Inject(EnqueteDependencies.CriarEnquete)
        private readonly criarEnquete: CriarEnquete,
        @Inject(EnqueteDependencies.AtualizarStatus)
        private readonly atualizarStatus: AtualizarStatus,
        @Inject(EnqueteDependencies.BuscarAtiva)
        private readonly buscarAtiva: BuscarAtiva,
    ) { }

    @Post()
    async criarNovaEnquete(@Res() res: Response, @Body() body: CriarEnqueteDTO): Promise<void> {
        await this.criarEnquete.execute({
            pergunta: body.pergunta,
            tempo_segundos: parseInt(body.tempo_segundos)
        })
        res.status(201).send({
            message: "Enquete criada!"
        })
    }

    @Put(':id')
    async atualizarStatusEnquete(@Res() res: Response, @Param() param): Promise<void> {
        await this.atualizarStatus.execute(param.id)
        res.status(200).send({
            message: "Enquete encerrada!"
        })
    }

    @Get('/ativa')
    async buscarEnqueteAtiva(): Promise<Enquete.GetState | null> {
        return await this.buscarAtiva.execute()

    }
}