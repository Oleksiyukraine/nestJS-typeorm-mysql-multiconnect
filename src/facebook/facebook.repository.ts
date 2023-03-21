import { Injectable } from '@nestjs/common';
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";
import { BaseRepository } from "../shared/modules/base/base.repository";
import { FacebookCountryOnlyEntity } from "./facebook.entity";
import {ModuleRef} from "@nestjs/core";

@Injectable()
export class FacebookRepository extends BaseRepository<FacebookCountryOnlyEntity> {
  constructor(moduleRef: ModuleRef) {
    super(FacebookCountryOnlyEntity, moduleRef);
  }
  async findSomeUniq(platform: TopLevelPrefixesEnum) {
    const entityManager = await this.loadEntityManager(platform);
    return entityManager.find(FacebookCountryOnlyEntity);
  }
}
