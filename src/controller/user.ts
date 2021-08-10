import { Controller, Provide, Get, Query } from '@midwayjs/decorator';
import { IUser } from '../interface';

@Provide()
@Controller('/api/user')
export class UserController {
  // 获取单个Query参数的方法
  @Get('/')
  async getUser(@Query() id: string): Promise<IUser> {
    if (!id) return null;
    return {
      id,
      name: 'Kaindy.Liu',
      age: 45,
    };
  }

  // 为Query参数指定别名的方法
  @Get('/alias')
  async getUserByAliasQuery(@Query('id') uid: string): Promise<IUser> {
    if (!uid) return null;
    return {
      id: uid,
      name: 'LiuZhen',
      age: 45,
    };
  }
}
