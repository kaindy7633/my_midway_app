import { Provide, Get, Controller, App } from '@midwayjs/decorator';
import { Application } from 'egg';

@Provide()
@Controller('/api/get_application')
export class AppController {
  @App()
  app: Application;

  @Get('/')
  async get_application(): Promise<any> {
    const data = await this.app.curl(
      'https://api.spacexdata.com/v4/launches/latest'
    );

    return data;
  }
}
