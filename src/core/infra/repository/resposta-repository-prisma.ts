import { Resposta } from "@domain/entity";
import { RespostaRepository } from "@domain/repository";
import { Database } from "@infra/database";
import { PrismaClient } from "@prisma/client";

export class RespostaRepositoryPrisma implements RespostaRepository {
    constructor(private readonly database: Database<PrismaClient>) { }

    async save(resposta: Resposta): Promise<void> {
        const { id, conteudo, crm, id_enquete } = resposta.getState()
        await this.database.getConnection().resposta.create({
            data: {
                id,
                conteudo,
                crm,
                id_enquete
            }
        })
    }
}