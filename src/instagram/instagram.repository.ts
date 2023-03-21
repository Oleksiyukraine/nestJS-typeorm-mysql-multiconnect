import { Injectable } from '@nestjs/common';
import { ModuleRef } from "@nestjs/core";
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";
import { BaseRepository } from "../shared/modules/base/base.repository";
import { InstagramCountryOnlyEntity } from "./instagram.entity";

@Injectable()
export class InstagramRepository extends BaseRepository<InstagramCountryOnlyEntity> {
  constructor(moduleRef: ModuleRef) {
    super(InstagramCountryOnlyEntity, moduleRef);
  }

  async findSomeUniq(platform: TopLevelPrefixesEnum) {
    const entityManager = await this.loadEntityManager(platform);
    return entityManager.find(InstagramCountryOnlyEntity);
  }
}
