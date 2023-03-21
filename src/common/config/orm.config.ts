import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { TopLevelPrefixesEnum } from "../enum/top-level-prefixes.enum";
import { FacebookCountryOnlyEntity } from "../../facebook/facebook.entity";
import { InstagramCountryOnlyEntity } from "../../instagram/instagram.entity";


dotenv.config(); // used to get process.env access prior to AppModule instanciation

export const getDatabaseSystemIds = (): string[] => {
  return process.env.DATABASE_SYSTEM_IDS.split(',');
};

export default registerAs('orm', () => {
  const config = {};

  getDatabaseSystemIds().forEach((systemId) => {
    const params = {
      type: process.env[`${systemId}_TYPE`],
      host: process.env[`${systemId}_HOST`],
      port: parseInt(process.env[`${systemId}_PORT`]),
      username: process.env[`${systemId}_USER_NAME`],
      password: process.env[`${systemId}_USER_PASSWORD`],
      database: process.env[`${systemId}_DATABASE`],
      synchronize: process.env[`${systemId}_SYNCHRONIZE`] === 'true',
    };

    config[systemId] = {
      ...params,
      synchronize: process.env[`${systemId}_SYNCHRONIZE`] === 'true',
      entities: [systemId.toLowerCase() === TopLevelPrefixesEnum.FACEBOOK ? FacebookCountryOnlyEntity : InstagramCountryOnlyEntity],
    };
  });

  return config;
});
