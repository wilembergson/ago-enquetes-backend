import { Enquete } from "@domain/entity";

export interface EnqueteRepository {
    save(enquete: Enquete): Promise<void>

    updateStatus(enquete: Enquete): Promise<void>

    findById(id: string): Promise<Enquete>

    findActive(): Promise<Enquete | null>
}