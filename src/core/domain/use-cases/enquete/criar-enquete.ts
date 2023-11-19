export interface CriarEnquete {
    execute(input: CriarEnquete.Input): Promise<void>
}

export namespace CriarEnquete {
    export type Input = {
        pergunta: string,
        tempo_segundos: number,
    }
}