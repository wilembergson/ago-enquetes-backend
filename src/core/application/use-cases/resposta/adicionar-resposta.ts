import { Medico, Resposta } from "@domain/entity";
import { EnqueteRepository, MedicoRepository, RespostaRepository } from "@domain/repository";
import { AdicionarResposta } from "@domain/use-cases/resposta";

export class AdicionarRespostaUseCase implements AdicionarResposta {
    constructor(
        private readonly respostaRepository: RespostaRepository,
        private readonly medicoRepository: MedicoRepository,
        private readonly enqueteRepository: EnqueteRepository
    ) { }

    async execute(input: AdicionarResposta.Input): Promise<void> {
        const resposta = new Resposta({
            conteudo: input.resposta
        })
        const medico = await this.medicoRepository.getByCRM(input.crm)
        const enquete = await this.enqueteRepository.findById(input.id_enquete)
        if(!enquete.getState().ativo) throw new Error("Votação encerrada")
        resposta.setMedico(medico)
        resposta.setEnquete(enquete)
        await this.respostaRepository.save(resposta)
    }

}