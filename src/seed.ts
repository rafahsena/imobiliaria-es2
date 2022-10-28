import { PrismaClient } from '@prisma/client'
import { add } from 'date-fns'
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    // reset db
    await prisma.anuncio.deleteMany({})
    await prisma.cliente.deleteMany({})
    await prisma.imovel.deleteMany({})
    await prisma.funcionario.deleteMany({})
    await prisma.tipo.deleteMany({})
    await prisma.endereco.deleteMany({})
    await prisma.contrato.deleteMany({})
    await prisma.interessado.deleteMany({})
    await prisma.interessadosOnAnuncios.deleteMany({})

    // insert records
    const funcionario = await prisma.funcionario.create({
        data: {
            nome: 'Ze pezão',
            email: 'ze@email.com',
            password: bcrypt.hashSync('password', 10)
        }
    })
    
}

main ()
    .catch((e: Error) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        // Disconnect Prisma Client
        await prisma.$disconnect()
    })
