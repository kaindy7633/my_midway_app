/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
  name: string;
  age: number;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface IUser {
  id: string;
  name: string;
  age: number;
}
