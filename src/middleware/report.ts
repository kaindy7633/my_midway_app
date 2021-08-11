import { Provide } from '@midwayjs/decorator';
import { IMidwayWebNext, IWebMiddleware } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ReportMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      // 控制器前执行的逻辑
      const startTime = Date.now();
      console.log('start time: ', startTime);
      // 执行下一个Web中间件，最后执行到控制器
      await next();
      // 控制器之后执行的逻辑
      console.log('end time: ', Date.now());
      console.log('耗时：', Date.now() - startTime);
    };
  }
}
