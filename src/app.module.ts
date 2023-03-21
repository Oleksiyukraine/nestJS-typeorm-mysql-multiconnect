import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookModule } from './facebook/facebook.module';
import ormConfig, { getDatabaseSystemIds } from './common/config/orm.config';
import {InstagramModule} from "./instagram/instagram.module";

const databasesConfig = getDatabaseSystemIds().map((systemId) => {
  return TypeOrmModule.forRootAsync({
    name: `db-${systemId}`.toLowerCase(),
    imports: [ConfigModule.forFeature(ormConfig)],
    useFactory: (config: ConfigService) => config.get(`orm.${systemId}`),
    inject: [ConfigService],
  });
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ...databasesConfig,
    FacebookModule,
    InstagramModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
