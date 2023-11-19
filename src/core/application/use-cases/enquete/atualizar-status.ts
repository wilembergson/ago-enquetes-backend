import { EnqueteRepository } from "@domain/repository";
import { AtualizarStatus } from "@domain/use-cases/enquete";

export class AtualizarStatusUseCase implements AtualizarStatus{
    constructor(private readonly enqueteRepository: EnqueteRepository){}
    
    async execute(id: string): Promise<void> {
        const enquete = await this.enqueteRepository.findById(id)
        enquete.setAtivo(false)
        await this.enqueteRepository.updateStatus(enquete)
    }

}