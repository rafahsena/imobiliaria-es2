import { Imovel, Anuncio, Interessado } from "src/models";
const mock = () => {
  const listaDeImoveis: Imovel[] = [
    {
      id: 0,
      disponivel: true,
      area: 100,
      iptu: 900,
      endereco: {
        logradouro: "Rua 57",
        cidade: "Aracaju",
        estado: "Sergipe",
        pais: "Brasil",
        cep: "49000-000",
        numero: "111",
        complemento: "bloco 2, apartamento 103",
      },
      tipo: "apartamento",
    },
    {
      id: 1,
      disponivel: true,
      area: 100,
      iptu: 900,
      endereco: {
        logradouro: "Avenida 7",
        cidade: "Aracaju",
        estado: "Sergipe",
        pais: "Brasil",
        cep: "49000-000",
        numero: "111",
      },
      tipo: "casa",
    },
    {
      id: 2,
      disponivel: true,
      area: 100,
      iptu: 900,
      endereco: {
        logradouro: "Travessa AB",
        cidade: "Aracaju",
        estado: "Sergipe",
        pais: "Brasil",
        cep: "49000-000",
        numero: "125",
      },
      tipo: "casa",
    },
    {
      id: 3,
      disponivel: true,
      area: 100,
      iptu: 900,
      endereco: {
        logradouro: "Rua 13",
        cidade: "Aracaju",
        estado: "Sergipe",
        pais: "Brasil",
        cep: "49000-000",
        numero: "120",
      },
      tipo: "casa",
    },
  ];

  const listaDeAnuncios: Anuncio[] = [
    {
      id: 0,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[0]
    },
    {
      id: 1,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[1]
    },
    {
      id: 2,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[2]
    },
    {
      id: 3,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 4,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 5,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 6,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 7,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },

        {
      id: 8,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 9,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date().toDateString(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
    {
      id: 10,
      titulo: "Casa de praia Jaboti",
      descricao:
        "Uma ótima casa familiar para você e seus filhos! Aproveite a oportunidade para iniciar seu próprio negócio!",
      tipo: "R",
      valor: 800000,
      dataDeCriacao: new Date().toDateString(),
      imovel: listaDeImoveis[0]
    },
  ];

  const listaDeInteressados: Interessado[] = [
    {
      id: 1,
      nome: "Zezinho",
      telefone: "(75)99999-9999",
      email: "zezinho@zezinho.ze"
    },
    {
      id: 2,
      nome: "Seninha",
      telefone: "(79)98888-0000",
      email: "seninha@seninha.se"
    },
    {
      id: 3,
      nome: "Doguinha",
      telefone: "(79)91111-3333",
      email: "doguinha@doguinha.do"
    },
  ];

  return{
    listaDeAnuncios, listaDeImoveis, listaDeInteressados
  }
}

export default mock;