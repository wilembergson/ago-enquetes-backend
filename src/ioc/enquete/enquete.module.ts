import { EnqueteController } from "@infra/controllers";
import { Module } from "@nestjs/common";
import { providers } from "./enquete.providers";

@Module({
    controllers:[EnqueteController],
    providers: providers
})
export class EnqueteModule{}