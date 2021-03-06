// import CreateUserRepository from '../repository/user/create-user-repository.js';
import CreateUserRepository from '../../repository/user/create-user-repository.js';
import LoadByEmailRepository from '../../repository/user/load-by-email-repository.js';
const loadByEmailRepository = new LoadByEmailRepository();
const createUserRepository = new CreateUserRepository();

export class Signup {
  async execute(httpResquest) {
    // não estou fazenodo uso do name, depois excluir
    const { name, email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: 'senha e email não podem estar em branco',
      };
    }

    const userExists = await loadByEmailRepository.findUser(email);
    if (userExists) {
      return {
        statusCode: 400,
        body: 'Usuario ja existe',
      };
    }

    const newUser = await createUserRepository.createUser({
      name,
      email,
      password,
    });
    return {
      statusCode: 200,
      body: newUser,
    };
  }
}
