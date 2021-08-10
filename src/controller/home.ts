import {
  Controller,
  Get,
  HttpCode,
  Post,
  Provide,
  SetHeader,
} from '@midwayjs/decorator';

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

  // 设置HttpCode
  @Get('/http-code')
  @HttpCode(201)
  async showHttpCode() {
    return 'Hello HTTP Code';
  }

  // 简单设置Header
  @Get('/header')
  @SetHeader('x-bbb', '123')
  async setHeader() {
    return 'Hello Set Header';
  }
}
