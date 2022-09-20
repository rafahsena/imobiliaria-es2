export interface Endereco {
  logradouro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
  complemento?: string;
  numero: string;
}

export interface Imovel {
  id: number;
  disponivel: boolean;
  area: number;
  iptu: number;
  endereco: Endereco;
  tipo: string;
}

export interface Anuncio {
  id: number;
  titulo: string;
  descricao: string;
  dataDeCriacao: Date;
  valor: number;
  tipo: string;
  imovel: Imovel | undefined;
}