// src/useCases/CreateUser/CreateUserUseCase.ts
import { AppDataSource } from '../database/data-source';
import { User } from '../entity/User';
import { CreateUserDTO } from '../dto/CreateUserDTO';

export class CreateUserUseCase {
  async execute(data: CreateUserDTO) {
    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExists = await userRepository.findOneBy({
      email: data.email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = userRepository.create(data);
    await userRepository.save(user);

    return user;
  }
}
