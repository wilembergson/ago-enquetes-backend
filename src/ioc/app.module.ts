import { Module } from '@nestjs/common';
import { EnqueteModule } from './enquete/enquete.module';

@Module({
  imports: [EnqueteModule],
})
export class AppModule {}
