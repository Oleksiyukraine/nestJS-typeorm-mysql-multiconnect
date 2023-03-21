import { Body, Controller, Get, Post } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";

@Controller(TopLevelPrefixesEnum.FACEBOOK)
export class FacebookController {
  constructor(
    private facebookService: FacebookService
  ) {}

  @Get('/')
  async findAll() {
    return this.facebookService.findAll(TopLevelPrefixesEnum.FACEBOOK);
  }

  @Post('/')
  async create(
    @Body() payload: { country: string },
  ) {
    return this.facebookService.create(TopLevelPrefixesEnum.FACEBOOK, payload);
  }

  @Post('/uniq')
  async uniq(
    @Body() payload: { country: string },
  ) {
    return this.facebookService.uniq(TopLevelPrefixesEnum.FACEBOOK);
  }
}
