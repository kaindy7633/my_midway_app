import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/api/handle_middleware', { middleware: ['reportMiddleware'] })
export class MiddlewareController {
  @Get('/')
  async handle_middleware() {
    return {
      title: 'This is a middleware test',
    };
  }
}
