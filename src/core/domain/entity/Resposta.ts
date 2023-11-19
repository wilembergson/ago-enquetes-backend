import { Enquete } from "./Enquete";
import { Medico } from "./Medico";
import { ID } from "./id";

export class Resposta{
    private readonly id: ID
    private readonly conteudo: string
    private readonly crm: string
    private medico: Medico
    private enquete: Enquete

    constructor(input: Resposta.Constructor){
        this.id = new ID(input.id)
        this.conteudo = input.conteudo
    }

    getState(): Resposta.GetState{
        return {
            id: this.id.value,
            conteudo: this.conteudo,
            crm: this.crm
        }
    }

    getMedico():Medico{
        return this.medico
    }

    setMedico(medico: Medico){
        this.medico = medico
    }

    getEnquete():Enquete{
        return this.enquete
    }

    setEnquete(enquete: Enquete){
        this.enquete = enquete
    }

}

export namespace Resposta {
    export type Constructor = {
        id?: string;
        conteudo: string;
        crm: string
    }

    export type GetState = {
        id: String
        conteudo: string
        crm: string
    }
}