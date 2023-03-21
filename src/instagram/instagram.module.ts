import { Module } from '@nestjs/common';
import { InstagramController } from './instagram.controller';
import { InstagramService } from './instagram.service';
import { InstagramRepository } from "./instagram.repository";

@Module({
  controllers: [InstagramController],
  providers: [InstagramService, InstagramRepository],
})
export class InstagramModule {}
