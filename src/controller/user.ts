import {
  Controller,
  Provide,
  Get,
  Query,
  ALL,
  Post,
  Body,
  Param,
} from '@midwayjs/decorator';
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

  // 获取单个Body参数
  @Post('/getUserByPost')
  async updateUser(@Body() id: string): Promise<IUser> {
    return {
      id,
      name: 'LiuZhen by Body',
      age: 45,
    };
  }

  // 通过POST获取所有Body中的JSON参数
  @Post('/getUserByAll')
  async updateUserByAll(@Body(ALL) user: IUser): Promise<IUser> {
    return {
      id: user.id,
      name: user.name,
      age: user.age,
    };
  }

  // 通过Param获取参数
  @Get('/:uid')
  async findUser(@Param() uid: string): Promise<IUser> {
    if (!uid) return null;
    return {
      id: uid,
      name: 'HEHE',
      age: 18,
    };
  }
}
