import { Enquete } from "@domain/entity";
import { EnqueteRepository } from "@domain/repository";
import { Database } from "@infra/database";
import { PrismaClient } from "@prisma/client";

export class EnqueteRepositoryPrisma implements EnqueteRepository{
    constructor(private readonly database: Database<PrismaClient>) { }

    async save(enquete: Enquete): Promise<void> {
        const { id, pergunta, tempo_segundos, ativo } = enquete.getState()
        await this.database.getConnection().enquete.create({
            data:{
                id,
                pergunta,
                tempo_segundos,
                ativo
            }
        })
    }
}