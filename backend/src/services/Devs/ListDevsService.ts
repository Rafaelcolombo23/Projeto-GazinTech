import prismaClient from "../../prisma";

class ListDevsService {
  async execute() {
    const devs = await prismaClient.devs.findMany({
      select: {
        nome: true,
        id_devs: true,
        nivel_id: true,
        sexo: true,
        datanascimento: true,
        idade: true,
        hobby: true,
        niveis: true
      },
    });

    return devs;
  }
}

export { ListDevsService };
