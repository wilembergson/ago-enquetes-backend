import { Enquete } from "@domain/entity"
import { EnqueteRepository } from "@domain/repository"
import { CriarEnquete } from "@domain/use-cases/enquete"

export class CriarEnqueteUseCase implements CriarEnquete{
    constructor(private readonly enqueteRepository: EnqueteRepository){}

    async execute(input: CriarEnquete.Input): Promise<void>{
        const novaEnquete = new Enquete({
            pergunta:input.pergunta,
            tempo_segundos: input.tempo_segundos,
            ativo: true
        })
        await this.enqueteRepository.save(novaEnquete)
    }
}
