import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cat.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
