import { faker } from '@faker-js/faker'
import { PrismaClient, Medico } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const medicos: Medico[] = [
        {
            id: faker.string.uuid(),
            nome: "Augusto Francisco da Silva",
            crm: "12345RJ"
        },
        {
            id: faker.string.uuid(),
            nome: "Taciana Gonçalves",
            crm: "98756PB"
        }
    ]
    await prisma.medico.createMany({
        data: medicos
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });