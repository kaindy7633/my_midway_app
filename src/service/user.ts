import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser({ uid }): Promise<IUserOptions> {
    if (!uid) return null;
    return {
      uid,
      name: 'Harry',
      age: 18,
    };
  }
}
