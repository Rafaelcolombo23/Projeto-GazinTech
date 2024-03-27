import prismaClient from "../../prisma";

interface NivelRequest {
  name: string;
  id_nivel: string;
}

class EditNivelService {
  async execute({ name, id_nivel }: NivelRequest) {
    const devs = prismaClient.niveis.update({
      where: {
        id_nivel: id_nivel,
      },
      data: {
        name: name,
      },
    });

    return devs;
  }
}

export { EditNivelService };
