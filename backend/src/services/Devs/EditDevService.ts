import prismaClient from "../../prisma";

interface DevsRequest {
  id_devs: string;
  nome: string;
  sexo: string;
  datanascimento: string;
  idade: string;
  hobby: string;
  nivel_id: string;
}

class EditDevServices {
  async execute({
    nome,
    sexo,
    datanascimento,
    idade,
    hobby,
    nivel_id,
    id_devs,
  }: DevsRequest) {
    const devs = await prismaClient.devs.update({
      where: {
        id_devs: id_devs,
      },
      data: {
        nome: nome,
        sexo: sexo,
        datanascimento: datanascimento,
        idade: idade,
        hobby: hobby,
        nivel_id: nivel_id,
      },
    });

    return devs
  }
}

export { EditDevServices };
