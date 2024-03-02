import 'reflect-metadata';
import { AppDataSource } from './database/data-source';
import express from 'express';

AppDataSource.initialize()
  .then(async () => {
    // Aqui sua conexão com o banco de dados foi estabelecida
    const app = express();
    app.use(express.json());

    // Defina suas rotas aqui

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
