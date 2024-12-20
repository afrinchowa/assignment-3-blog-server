import { IUser } from "./user.interface"
import { UserModel } from "./user.model"

const createUser = async(payload:IUser):Promise<IUser>=>{
  const result =await UserModel.create(payload)
  return result
}
export const userService ={
  createUser,
}

