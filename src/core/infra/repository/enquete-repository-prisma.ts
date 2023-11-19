import { Enquete } from "@domain/entity";
import { EnqueteRepository } from "@domain/repository";
import { Database } from "@infra/database";
import { PrismaClient } from "@prisma/client";

export class EnqueteRepositoryPrisma implements EnqueteRepository{
    constructor(private readonly database: Database<PrismaClient>) { }
    
    async findById(id: string): Promise<Enquete> {
        const result = await this.database.getConnection().enquete.findFirst({
            where:{
                id
            }
        })
        if(!result) throw new Error("Enquete não encontrada!")
        return new Enquete({
            id: result.id,
            pergunta: result.pergunta,
            tempo_segundos: result.tempo_segundos,
            ativo: result.ativo
        })
    }
    
    async updateStatus(enquete: Enquete): Promise<void> {
        await this.database.getConnection().enquete.update({
            data:enquete.getState(),
            where: {
                id: enquete.getState().id
            }
        })
    }

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