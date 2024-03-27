import prismaClient from "../../prisma";

interface DevsRequest {
  id_devs: string;
}

class RemoveDevService {
  async execute({ id_devs }: DevsRequest) {
    const devs = await prismaClient.devs.delete({
      where: {
        id_devs: id_devs,
      },
    });

    return devs;
  }
}

export { RemoveDevService };
