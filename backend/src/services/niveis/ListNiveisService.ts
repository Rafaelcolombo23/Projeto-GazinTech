import prismaClient from "../../prisma";

class ListNiveisService{
    async execute(){

        const niveis = await prismaClient.niveis.findMany({
            select:{
                id_nivel: true,
                name: true,
            }
        })

        return niveis;
    }
}

export {ListNiveisService}