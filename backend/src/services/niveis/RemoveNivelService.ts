import prismaClient from "../../prisma";

interface NivelRequest {
  id_nivel: string;
}

class RemoveNivelService {
  async execute({ id_nivel }: NivelRequest) {
    const nivel = await prismaClient.niveis.delete({
      where: {
        id_nivel: id_nivel,
      },
    });

    return nivel;
  }
}

export { RemoveNivelService };
