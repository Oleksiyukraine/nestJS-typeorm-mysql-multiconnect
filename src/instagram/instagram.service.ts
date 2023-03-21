import { Injectable } from '@nestjs/common';
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";
import { InstagramRepository } from "./instagram.repository";

@Injectable()
export class InstagramService {
  constructor(
    private readonly instagramRepository: InstagramRepository,
  ) {}

  async findAll(platform: TopLevelPrefixesEnum) {
    return this.instagramRepository.findAll(platform);
  }

  async create(platform: TopLevelPrefixesEnum, payload: { country: string }) {
    return this.instagramRepository.create(platform, payload);
  }

  async uniq(platform: TopLevelPrefixesEnum) {
    return this.instagramRepository.findSomeUniq(platform);
  }
}
