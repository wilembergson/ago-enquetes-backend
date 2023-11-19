import { Medico } from "@domain/entity";
import { MedicoRepository } from "@domain/repository";
import { Database } from "@infra/database";
import { PrismaClient } from "@prisma/client";

export class MedicoRepositoryPrisma implements MedicoRepository {
    constructor(private readonly database: Database<PrismaClient>) { }
    
    async getByCRM(crm: string): Promise<Medico> {
        const result = await this.database.getConnection().medico.findFirst({
            where:{
                crm
            }
        })
        if(!result) throw new Error("CRM não encontrado.")
        return new Medico(result)
    }

    
}