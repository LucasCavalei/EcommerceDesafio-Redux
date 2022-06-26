import UserRepository from "../repository/create-user.js";
import { Authorization } from "../auth.js";
const userRepository = new UserRepository();
const authorization = new Authorization();

export class Login {
  async execute(httpResquest) {
    const { email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: "senha e email não podem estar em branco",
      };
    }
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      return {
        statusCode: 400,
        body: "Usuario não existe",
      };
    }
    const userToken = await authorization.comparer(user, password);
    return {
      statusCode: 200,
      body: userToken,
    };
  }
}