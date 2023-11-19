import { Medico } from "@domain/entity";

export interface MedicoRepository {
    getByCRM(crm: string): Promise<Medico>
}