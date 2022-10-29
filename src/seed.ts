const bcrypt = require('bcryptjs')
import prisma from './lib/prisma.js'

async function main() {
    // reset db
    resetDB()
    .then(
        // insert records
        () => populateDB()
    )
}

async function resetDB() {
    await prisma.anuncio.deleteMany({})
    await prisma.cliente.deleteMany({})
    await prisma.imovel.deleteMany({})
    await prisma.funcionario.deleteMany({})
    await prisma.tipo.deleteMany({})
    await prisma.endereco.deleteMany({})
    await prisma.contrato.deleteMany({})
    await prisma.interessado.deleteMany({})
    await prisma.interessadosOnAnuncios.deleteMany({})
}

async function populateDB() {
    const funcionario = await prisma.funcionario.create({
        data: {
            nome: 'Ze pezão',
            email: 'ze@email.com',
            password: bcrypt.hashSync('password', 10)
        }
    })
    const endereco = await prisma.endereco.create({
        data: {
            logradouro: 'Rua dos Bobos',
            cidade: 'Aracaju',
            estado: 'Sergipe',
            cep: '49100-000',
            pais: 'Brasil',
            numero: '0'
        }
    })
    const tipo = await prisma.tipo.create({
        data: {
            nome: 'Urbano'
        }
    })
    const imovel = await prisma.imovel.create({
        data: {
            disponivel: true,
            area: 90.56,
            iptu: 200,
            tipo: {
                connect: {
                    id: tipo.id
                }
            },
            endereco: {
                connect: {
                    id: endereco.id
                }
            },
            funcionario: {
                connect: {
                    id: funcionario.id
                }
            }
        },
    })
    const anuncio = await prisma.anuncio.create({
        data: {
            titulo: 'Residencial do Complexo',
            descricao: '',
            dataDeCriacao: new Date(Date.now()).toISOString(),
            valor: 500_000,
            tipo: 'Compra',
            imovel: {
                connect: {
                    id: imovel.id
                }
            }
        }
    })
    const cliente = await prisma.cliente.create({
        data: {
            nome: "Antedeguemon Vascaino",
            cpf: "13165931003",
            rg: "171840550",
            dataNascimento: new Date("01/01/2000").toISOString(),
            telefone: "79998887777",
            email: "antedeguemon@email.com",
            endereco: {
                create: {
                    logradouro: 'Travessa Agamenon Osiris',
                    cidade: 'Aracaju',
                    estado: 'Sergipe',
                    cep: '49100-000',
                    pais: 'Brasil',
                    numero: '1337'
                }
            }
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
