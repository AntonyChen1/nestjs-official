import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cat.controller';

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
