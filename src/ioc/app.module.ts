import { Module } from '@nestjs/common';
import { EnqueteModule } from './enquete/enquete.module';
import { RespostaModule } from './resposta/resposta.module';

@Module({
  imports: [RespostaModule, EnqueteModule],
})
export class AppModule {}
