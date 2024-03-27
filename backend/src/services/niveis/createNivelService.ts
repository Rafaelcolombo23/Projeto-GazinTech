import prismaClient from "../../prisma";

interface NivelRequest {
  name: string;
}

class CreateNivelService {
  async execute({ name }: NivelRequest) {
    if (name === "") {
      throw new Error("Nivel invalido");
    }

    const niveis = await prismaClient.niveis.create({
      data: {
        name: name,
      },
      select: {
        id_nivel: true,
        name: true,
      },
    });

    return niveis;
  }
}

export { CreateNivelService };
