-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "logradouro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "complemento" TEXT,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imovel" (
    "id" SERIAL NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "area" TEXT NOT NULL,
    "iptu" MONEY NOT NULL,
    "tipo" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "Imovel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anuncio" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataDeCriacao" TIMESTAMP(3) NOT NULL,
    "valor" MONEY NOT NULL,
    "tipo" TEXT NOT NULL,
    "imovelId" INTEGER NOT NULL,

    CONSTRAINT "Anuncio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interessado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Interessado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contrato" (
    "id" SERIAL NOT NULL,
    "valor" MONEY NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "tipo" CHAR(2) NOT NULL,
    "dataAssinatura" TIMESTAMP(3) NOT NULL,
    "imovelId" INTEGER,

    CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "enderecoId" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnuncioToInteressado" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Anuncio_imovelId_key" ON "Anuncio"("imovelId");

-- CreateIndex
CREATE UNIQUE INDEX "_AnuncioToInteressado_AB_unique" ON "_AnuncioToInteressado"("A", "B");

-- CreateIndex
CREATE INDEX "_AnuncioToInteressado_B_index" ON "_AnuncioToInteressado"("B");

-- AddForeignKey
ALTER TABLE "Imovel" ADD CONSTRAINT "Imovel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anuncio" ADD CONSTRAINT "Anuncio_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnuncioToInteressado" ADD CONSTRAINT "_AnuncioToInteressado_A_fkey" FOREIGN KEY ("A") REFERENCES "Anuncio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnuncioToInteressado" ADD CONSTRAINT "_AnuncioToInteressado_B_fkey" FOREIGN KEY ("B") REFERENCES "Interessado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
