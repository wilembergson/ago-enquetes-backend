import { Enquete } from "@domain/entity";

export interface BuscarAtiva {
    execute(): Promise<Enquete.GetState | null>
}

