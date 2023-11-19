import { Module } from "@nestjs/common";
import { providers } from "./resposta.providers";
import { RespostaController } from "@infra/controllers";

@Module({
    controllers:[RespostaController],
    providers: providers
})
export class RespostaModule{}