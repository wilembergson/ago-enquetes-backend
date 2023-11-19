import { ClassProvider, FactoryProvider, Provider } from "@nestjs/common";
import { EnqueteRepositoryPrisma, MedicoRepositoryPrisma, RespostaRepositoryPrisma } from "@infra/repository";
import { EnqueteRepository, MedicoRepository, RespostaRepository } from "@domain/repository";
import { Database, PrismaDatabase } from "@infra/database";
import { AdicionarResposta } from "@domain/use-cases/resposta";
import { AdicionarRespostaUseCase } from "@application/use-cases/resposta";
import { RespostaDependencies } from "./resposta.dependencies";

const databaseProvider: ClassProvider<Database> = {
    provide: RespostaDependencies.Database,
    useClass: PrismaDatabase,
}

const enqueteRepositoryProvider: FactoryProvider<EnqueteRepository> = {
    provide: RespostaDependencies.EnqueteRepository,
    useFactory: (database: Database) => new EnqueteRepositoryPrisma(database),
    inject: [RespostaDependencies.Database],
};

const medicoRepositoryProvider: FactoryProvider<MedicoRepository> = {
    provide: RespostaDependencies.MedicoRepository,
    useFactory: (database: Database) => new MedicoRepositoryPrisma(database),
    inject: [RespostaDependencies.Database],
};

const respostaRepositoryProvider: FactoryProvider<RespostaRepository> = {
    provide: RespostaDependencies.RespostaRepository,
    useFactory: (database: Database) => new RespostaRepositoryPrisma(database),
    inject: [RespostaDependencies.Database],
};

const adicionarRespostaProvider: FactoryProvider<AdicionarResposta> = {
    provide: RespostaDependencies.AdicionarResposta,
    useFactory: (
        respostaRepository: RespostaRepository,
        medicoRepository: MedicoRepository,
        enqueteRepository: EnqueteRepository
    ) => new AdicionarRespostaUseCase(
        respostaRepository,
        medicoRepository,
        enqueteRepository,
    ),
    inject: [
        RespostaDependencies.RespostaRepository,
        RespostaDependencies.MedicoRepository,
        RespostaDependencies.EnqueteRepository
    ]
};


export const providers: Provider[] = [
    databaseProvider,
    enqueteRepositoryProvider,
    respostaRepositoryProvider,
    medicoRepositoryProvider,
    adicionarRespostaProvider,
]
