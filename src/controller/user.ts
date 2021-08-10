import { Controller, Provide, Get, Query, ALL } from '@midwayjs/decorator';
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

  // 使用 ALL 获取所有的Query参数
  @Get('/all')
  async getUserByAllQuery(@Query(ALL) queryObject: Record<string, unknown>) {
    return queryObject;
  }
}
