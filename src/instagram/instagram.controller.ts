import { Body, Controller, Get, Post } from '@nestjs/common';
import { InstagramService } from './instagram.service';
import { TopLevelPrefixesEnum } from "../common/enum/top-level-prefixes.enum";

@Controller(TopLevelPrefixesEnum.INSTAGRAM)
export class InstagramController {
  constructor(private instagramService: InstagramService) {}

  @Get('')
  async findAll() {
    return this.instagramService.findAll(TopLevelPrefixesEnum.INSTAGRAM);
  }

  @Post('')
  async create(
    @Body() payload: { country: string }
  ) {
    return this.instagramService.create(TopLevelPrefixesEnum.INSTAGRAM, payload);
  }

  @Post('uniq')
  async uniq() {
    return this.instagramService.uniq(TopLevelPrefixesEnum.INSTAGRAM);
  }
}
