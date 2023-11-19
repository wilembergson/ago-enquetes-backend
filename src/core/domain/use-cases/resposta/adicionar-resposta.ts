export interface AdicionarResposta {
    execute(input: AdicionarResposta.Input):Promise<void>
}

export namespace AdicionarResposta {
    export type Input = {
        resposta: string
        id_enquete: string
        crm: string
    }
}