import { ClassProvider, FactoryProvider, Provider } from "@nestjs/common";
import { EnqueteRepositoryPrisma } from "@infra/repository";
import { CriarEnqueteUseCase } from "@application/use-cases/enquete";
import { EnqueteRepository } from "@domain/repository";
import { CriarEnquete } from "@domain/use-cases/enquete";
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

export const providers: Provider[] = [
    databaseProvider,
    enqueteRepositoryProvider,
    criarEnqueteProvider
]
