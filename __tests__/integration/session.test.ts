import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')
const axios = require('axios')

afterAll(async () => {
    const deleteAnuncio = prisma.anuncio.deleteMany()
    const deleteCliente = prisma.cliente.deleteMany()
    const deleteImovel = prisma.imovel.deleteMany()
    const deleteFuncionario = prisma.funcionario.deleteMany()
    const deleteTipo = prisma.tipo.deleteMany()
    const deleteEndereco = prisma.endereco.deleteMany()
    const deleteContrato = prisma.contrato.deleteMany()
    const deleteInteressado = prisma.interessado.deleteMany()

    await prisma.$transaction([
    deleteAnuncio,
    deleteCliente,
    deleteImovel,
    deleteFuncionario,
    deleteTipo,
    deleteEndereco,
    deleteContrato,
    deleteInteressado,
    ])
    await prisma.$disconnect()
})

describe("Authentication", () => {
    it("should login an employee", async () => {
        
    })

    it("should log out an employee", () => {
        
    })
})

describe("Routes", () => {
    it("should create an employee", async () => {
        const url = 'http://localhost:3000'
        const data = {
            nome: 'Ze pezão',
            email: 'zezao@email.com',
            password: bcrypt.hashSync('password', 10)
        }
        const response = await axios(url+'/funcionario', 'post', data)

        

        const funcionario = await prisma.funcionario.create({data})

        console.log(funcionario);

        expect(funcionario.nome).toBe('Ze pezão')
    })

    it("should create a contract", () => {
        
    })
})