import { Controller, Get, Post, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello World!';
  }

  @Post('/update')
  async updateData() {
    return 'This is a post method';
  }
}
