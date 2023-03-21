import { EntityManager, EntityTarget } from 'typeorm';
import { ModuleRef } from "@nestjs/core";
import { getEntityManagerToken } from "@nestjs/typeorm";
import { TopLevelPrefixesEnum } from "../../../common/enum/top-level-prefixes.enum";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseRepository<T> {
  protected entity: EntityTarget<T>;
  protected moduleRef: ModuleRef;

  constructor(
    entity: EntityTarget<T>,
    moduleRef: ModuleRef,
  ) {
    this.entity = entity;
    this.moduleRef = moduleRef;
  }

  async loadEntityManager(systemId: string): Promise<EntityManager> {
    const ormToken = getEntityManagerToken(`db-${systemId}`);
    return this.moduleRef.get(ormToken, { strict: false });
  }

  async findAll(platform: TopLevelPrefixesEnum) {
    const entityManager = await this.loadEntityManager(platform);
    return entityManager.find(this.entity);
  }

  async create(platform: TopLevelPrefixesEnum, payload: any) {
    const entityManager = await this.loadEntityManager(platform);
    return entityManager.transaction(async (entityManager) => {
      return entityManager.save(this.entity, payload);
    });
  }
}
