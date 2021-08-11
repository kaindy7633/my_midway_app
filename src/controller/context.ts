import { Provide, Inject, Get, Controller } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/api/get_context')
export class ContextController {
  @Inject()
  ctx: Context;

  @Get('/')
  async getContext() {
    return {
      req: this.ctx.request,
      res: this.ctx.response,
      query: this.ctx.query,
    };
  }
}
