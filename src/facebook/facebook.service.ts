import { Injectable } from '@nestjs/common';
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";
import { FacebookRepository } from "./facebook.repository";

@Injectable()
export class FacebookService {
  constructor(
    private readonly facebookRepository: FacebookRepository
  ) {}

  async findAll(platform: TopLevelPrefixesEnum) {
    return this.facebookRepository.findAll(platform);
  }

  async create(platform: TopLevelPrefixesEnum, payload: { country: string }) {
    return this.facebookRepository.create(platform, payload);
  }

  async uniq(platform: TopLevelPrefixesEnum) {
    return this.facebookRepository.findSomeUniq(platform);
  }
}
