import { Module } from '@nestjs/common';
import { BaseRepository } from './base.repository';

@Module({
  providers: [BaseRepository],
  exports: [BaseRepository],
})
export class BaseModule {}
