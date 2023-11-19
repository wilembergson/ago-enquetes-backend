import { Enquete } from "@domain/entity";
import { EnqueteRepository } from "@domain/repository";
import { BuscarAtiva } from "@domain/use-cases/enquete";

export class BuscarAtivaUseCase implements BuscarAtiva {
    constructor(private readonly enqueteRepository: EnqueteRepository) { }

    async execute(): Promise<Enquete.GetState | null> {
        const result = await this.enqueteRepository.findActive()
        if(!result) return null
        return result.getState()
    }

}