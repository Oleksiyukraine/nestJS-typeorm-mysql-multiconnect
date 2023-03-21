import { Module } from '@nestjs/common';
import { FacebookController } from './facebook.controller';
import { FacebookService } from './facebook.service';
import { FacebookRepository } from "./facebook.repository";

@Module({
  controllers: [FacebookController],
  providers: [FacebookService, FacebookRepository],
})
export class FacebookModule {}
