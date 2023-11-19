import { ID } from "./id";

export class Medico{
    private readonly id: ID
    private readonly nome: string
    private readonly crm: string

    constructor(input: Medico.Constructor){
        this.id = new ID(input.id)
        this.nome = input.nome
        this.crm = input.crm
    }

    getState(): Medico.GetState{
        return {
            id: this.id.value,
            nome: this.nome,
            crm: this.crm
        }
    }

}

export namespace Medico {
    export type Constructor = {
        id?: string;
        nome: string;
        crm: string
    }

    export type GetState = {
        id: String
        nome: string
        crm: string
    }
}