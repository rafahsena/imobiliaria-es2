import { anuncio, imovel } from "../../../models";
const ListaDeAnuncios = () => {
  const listaDeImoveis: imovel[] = [
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
        logradouro: "Rua 1",
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
        logradouro: "Rua 1",
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
        logradouro: "Rua 1",
        cidade: "Aracaju",
        estado: "Sergipe",
        pais: "Brasil",
        cep: "49000-000",
        numero: "120",
      },
      tipo: "casa",
    },
  ];

  const listaDeAnuncios: anuncio[] = [
    {
      id: 0,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[0]
    },
    {
      id: 1,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[1]
    },
    {
      id: 2,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[2]
    },
    {
      id: 3,
      titulo: "Apartamento bonito",
      descricao: "Apartamento com vista pro mar",
      dataDeCriacao: new Date(),
      valor: 100,
      tipo: 'A',
      imovel: listaDeImoveis[3]
    },
  ];

  return (
    <div className="m-4 flex justify-between font-mono">
      {listaDeAnuncios.map((anuncio) => (
        <div className="border shadow p-2 rounded-lg" key={anuncio.id}>
          <strong className="text-xl">{anuncio.titulo}</strong>
        </div>
      ))}
    </div>
  );
};

export default ListaDeAnuncios;
