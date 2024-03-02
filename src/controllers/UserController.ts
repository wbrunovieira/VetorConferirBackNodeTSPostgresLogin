import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { User } from '../entity/User';

export async function createUser(req: Request, res: Response): Promise<void> {
  const userRepository = AppDataSource.getRepository(User);
  const { name, email } = req.body;

  // Verificar se o usuário já existe
  const userExists = await userRepository.findOneBy({ email });

  if (userExists) {
    res.status(409).send('Usuário já existe.');
    return;
  }

  try {
    // Criar uma nova instância do usuário
    const newUser = userRepository.create({
      name,
      email,
    });

    // Salvar o usuário no banco de dados
    const user = await userRepository.save(newUser);

    // Retornar o usuário criado
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
