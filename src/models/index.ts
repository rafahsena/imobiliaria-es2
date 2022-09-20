export interface endereco{
  logradouro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
  complemento?: string;
  numero: string;
}

export interface imovel {
  id: number;
  disponivel: boolean;
  area: number;
  iptu: number;
  endereco: endereco;
  tipo: string;
}

export interface anuncio {
  id: number;
  titulo: string;
  descricao: string;
  dataDeCriacao: Date;
  valor: number;
  tipo: string;
  imovel: imovel | undefined;
}