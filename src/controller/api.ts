import { Controller, Provide, Inject, Get, Query } from '@midwayjs/decorator';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/get_user')
export class APIController {
  @Inject()
  userService: UserService;

  @Get('/')
  async getUserService(@Query('id') uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return {
      success: true,
      message: 'OK',
      data: user,
    };
  }
}
