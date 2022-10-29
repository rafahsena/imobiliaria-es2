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
  id?: number;
  disponivel: boolean;
  area: number;
  iptu: number;
  endereco: Endereco;
  tipoId: number;
}

export interface Tipo {
  id: number;
  nome: string;
}

export interface Anuncio {
  id: number;
  titulo: string;
  descricao: string;
  dataDeCriacao: string;
  valor: number;
  tipo: string;
  imovel: Imovel | undefined;
}

export interface Funcionario {
  id: Number;
  nome: String;
  email: String;
  password: String;
}

export interface Interessado {
  id: number;
  nome: string;
  telefone: string;
  email: string;
}
