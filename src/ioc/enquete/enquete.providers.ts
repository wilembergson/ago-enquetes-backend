import { ClassProvider, FactoryProvider, Provider } from "@nestjs/common";
import { EnqueteRepositoryPrisma } from "@infra/repository";
import { AtualizarStatusUseCase, BuscarAtivaUseCase, CriarEnqueteUseCase } from "@application/use-cases/enquete";
import { EnqueteRepository } from "@domain/repository";
import { AtualizarStatus, BuscarAtiva, CriarEnquete } from "@domain/use-cases/enquete";
import { Database, PrismaDatabase } from "@infra/database";
import { EnqueteDependencies } from "./enquete.dependencies";

const databaseProvider: ClassProvider<Database> = {
    provide: EnqueteDependencies.Database,
    useClass: PrismaDatabase,
}

const enqueteRepositoryProvider: FactoryProvider<EnqueteRepository> = {
    provide: EnqueteDependencies.EnqueteRepository,
    useFactory: (database: Database) => new EnqueteRepositoryPrisma(database),
    inject: [EnqueteDependencies.Database],
};

const criarEnqueteProvider: FactoryProvider<CriarEnquete> = {
    provide: EnqueteDependencies.CriarEnquete,
    useFactory: (enqueteRepository: EnqueteRepository) => new CriarEnqueteUseCase(enqueteRepository),
    inject: [EnqueteDependencies.EnqueteRepository]
};

const atualizarSatusEnqueteProvider: FactoryProvider<AtualizarStatus> = {
    provide: EnqueteDependencies.AtualizarStatus,
    useFactory: (enqueteRepository: EnqueteRepository) => new AtualizarStatusUseCase(enqueteRepository),
    inject: [EnqueteDependencies.EnqueteRepository]
};

const buscarEnqueteAtivaProvider: FactoryProvider<BuscarAtiva> = {
    provide: EnqueteDependencies.BuscarAtiva,
    useFactory: (enqueteRepository: EnqueteRepository) => new BuscarAtivaUseCase(enqueteRepository),
    inject: [EnqueteDependencies.EnqueteRepository]
}

export const providers: Provider[] = [
    databaseProvider,
    enqueteRepositoryProvider,
    criarEnqueteProvider,
    atualizarSatusEnqueteProvider,
    buscarEnqueteAtivaProvider
]
