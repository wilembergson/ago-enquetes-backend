import { Resposta } from "./Resposta"
import { ID } from "./id"

export class Enquete{
    private readonly id: ID
    private readonly pergunta: string
    private readonly tempo_segundos: number
    private ativo: boolean
    private respostas: Resposta[]

    constructor(input: Enquete.Constructor){
        this.id = new ID(input.id)
        this.pergunta = input.pergunta
        this.tempo_segundos = input.tempo_segundos
        this.ativo = input.ativo
    }

    getState(): Enquete.GetState{
        return {
            id: this.id.value,
            pergunta: this.pergunta,
            tempo_segundos: this.tempo_segundos,
            ativo: this.ativo
        }
    }

    setAtivo(input: boolean): void{
        this.ativo = input
    }

    getRespostas(): Resposta[]{
        return this.respostas
    }

    setRespostas(respostas: Resposta[]): void{
        this.respostas = respostas
    }
}

export namespace Enquete {
    export type Constructor = {
        id?: string;
        pergunta: string;
        tempo_segundos: number;
        ativo: boolean;
    }

    export type GetState = {
        id: string;
        pergunta: string;
        tempo_segundos: number;
        ativo: boolean;
    }
}