import prismaClient from "../../prisma";

interface DevsRequest {
  nome: string;
  sexo: string;
  datanascimento: string;
  idade: string;
  hobby: string;
  nivel_id: string;
}

class CreateDevsService {
  async execute({
    nome,
    sexo,
    datanascimento,
    idade,
    hobby,
    nivel_id,
  }: DevsRequest) {
    
    if (nome === "") {
      throw new Error("Nivel invalido");
    }

    const devs = await prismaClient.devs.create({
      data: {
        nome: nome,
        sexo: sexo,
        datanascimento: datanascimento,
        idade: idade,
        hobby: hobby,
        nivel_id: nivel_id,
      },
    });

    return devs;
  }
}

export { CreateDevsService };
