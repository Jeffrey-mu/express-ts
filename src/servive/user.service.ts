import UserModel from '../model/users.model'

/**
 * 验证密码
 * @return {Promise<Todo>}
 */
export async function getUser({ password }) {
  const passwordInfo = await UserModel.findOne({
    where: {
      password,
    },
  })
  if (!passwordInfo) {
    return Promise.reject(new Error(`User ${password} not found`))
  }
  return passwordInfo
}
