import { Response } from "express";
import { Controller, Inject, Post, Body, Res } from "@nestjs/common";
import { RespostaDependencies } from "src/ioc/resposta";
import { AdicionarResposta } from "@domain/use-cases/resposta";
import { AdicionarRespostaDTO } from "./dto/resposta";

@Controller('resposta')
export class RespostaController {
    constructor(
        @Inject(RespostaDependencies.AdicionarResposta)
        private readonly adicionarResposta: AdicionarResposta,
    ) { }

    @Post()
    async adicionarNovaResposta(@Body() body: AdicionarRespostaDTO): Promise<void> {
        const { resposta, crm, id_enquete } = body
        await this.adicionarResposta.execute({
            resposta,
            crm,
            id_enquete
        })
    }
}