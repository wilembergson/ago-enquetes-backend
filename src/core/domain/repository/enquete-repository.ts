import { Enquete } from "@domain/entity";

export interface EnqueteRepository {
    save(enquete: Enquete): Promise<void>
}