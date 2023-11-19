import { Resposta } from "@domain/entity";

export interface RespostaRepository {
    save(resposta: Resposta): Promise<void>
}