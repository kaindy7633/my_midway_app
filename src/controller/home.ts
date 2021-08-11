import {
  ContentType,
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

  // 设置多个响应头，直接传入对象
  @Get('/multiple-header')
  @SetHeader({
    'x-aaa': '123',
    'x-ccc': '456',
  })
  async setMultipleHeader() {
    return 'Hello Set Multiple Header';
  }

  // 设置响应类型
  @Get('/custom-content-type')
  @ContentType('html')
  async login() {
    return '<body>Hello Content Type</body>';
  }
}
