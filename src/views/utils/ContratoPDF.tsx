import React, { useEffect, useState } from "react";
import {
  Imovel,
  Endereco,
  Contrato,
  Cliente,
  Tipo,
  Funcionario,
} from "@prisma/client";
import Button from "@mui/material/Button";
import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

type ContractProps = {
  endereco: Endereco;
  funcionario: Funcionario;
  imovel: Imovel;
  contrato: Contrato;
  cliente: Cliente;
};

export const DefaultPDF = ({
  endereco,
  funcionario,
  imovel,
  contrato,
  cliente,
}: ContractProps) => {
  const tipoEnum = {
    v: "vender",
    a: "alugar",
  };

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return (
    <Document>
      <Page>
        <View style={styles.header}>
          <Text style={styles.title}>Contrato de locação</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.contractHeaderTitle}>
            Este contrato é acordado entre:
          </Text>
          <View style={styles.contractHeader}>
            <View>
              <Text style={styles.contractTitle}>Responsável</Text>
              <Text style={styles.contractPerson}>Kit In Net LTDA.</Text>
            </View>
            <View>
              <Text style={styles.contractTitle}>Inquilino</Text>
              <Text style={styles.contractPerson}>{cliente.nome}</Text>
            </View>
          </View>
          <Text style={styles.enderecoHeader}>
            O Proprietário concorda em {tipoEnum[contrato.tipo.trim()]} o imóvel
            localizado em:
          </Text>
          <Text style={styles.enderecoBody}>
            {endereco.logradouro}, {endereco.numero}, {endereco.complemento}.{" "}
            {endereco.cidade} - {endereco.estado}.{endereco.cep}.{" "}
            {endereco.pais}
          </Text>
          <Text style={styles.contractTerms}>
            A data de vencimento deste contrato é{" "}
            {new Date(contrato.vencimento).getDate()} de{" "}
            {meses[new Date(contrato.vencimento).getMonth()]} de{" "}
            {new Date(contrato.vencimento).getFullYear()}, começando{" "}
            {new Date().getDate()} de {meses[new Date().getMonth()]} de{" "}
            {new Date().getFullYear()} no valor acordado de R$
            {Number(contrato.valor).toFixed(2)} a ser pago mensalmente, o valor
            de R$
            {Number(contrato.valor).toFixed(2)} a ser pago na execução desse
            contrato e o valor de R${Number(imovel.iptu).toFixed(2)} como IPTU
            do imóvel.
          </Text>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsAndConditionsTitle}>
              Termos e condições
            </Text>
            <Text style={styles.termsAndConditionsSubTitle}>
              1. Uso da propriedade
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              A propriedade alugada deverá ser utilizando somente como
              residência.
            </Text>
            <Text style={styles.termsAndConditionsSubTitle}>
              2. Do pagamento dos Serviços de utilidade pública
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              Durante o tempo de contrato, o locatário concordo em pagar os
              serviços de utilidade pública como luz, água, gás e outros
              serviços utilizados na propriedade.
            </Text>
            <Text style={styles.termsAndConditionsSubTitle}>
              3. Reconhecimento
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              As partes reconhecem e entendem os termos aqui estabelecidos neste
              Contrato.
            </Text>
          </View>
          <Text style={styles.signTitle}>
            Assinado em {new Date(contrato.dataAssinatura).getDate()} de{" "}
            {meses[new Date(contrato.dataAssinatura).getMonth()]} de{" "}
            {new Date(contrato.dataAssinatura).getFullYear()}
          </Text>
          <View style={styles.signContainer}>
            <View style={styles.signWrapper}>
              <Text style={styles.signSubTitle}>Responsável</Text>
            </View>
            <View style={styles.signWrapper}>
              <Text style={styles.signSubTitle}>Inquilino</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#9155fd",
    padding: 16,
    fontSize: 24,
    color: "#FFF",
    width: 400,
    textAlign: "center",
  },
  header: {
    alignSelf: "center",
  },
  body: {
    margin: 10,
    padding: 10,
  },
  contractHeaderTitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  contractHeader: {
    paddingHorizontal: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  contractTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  enderecoHeader: {
    fontSize: 18,
    marginBottom: 4,
  },
  enderecoBody: {
    fontSize: 14,
    marginBottom: 20,
  },
  contractTerms: {
    fontSize: 16,
  },
  contractPerson: {
    fontSize: 14,
  },
  termsAndConditions: {},
  termsAndConditionsTitle: {
    fontSize: 22,
    alignSelf: "center",
    marginTop: 20,
  },
  termsAndConditionsSubTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  termsAndConditionsDescription: {
    fontSize: 14,
    marginTop: 4,
  },
  signTitle: {
    fontSize: 14,
    marginTop: 24,
  },
  signContainer: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  signWrapper: {
    paddingBottom: 50,
    borderBottom: "2 solid black",
    width: 200,
    alignItems: "center",
  },
  signSubTitle: {},
});

export const PDFReader = (contrato: ContractProps) => {
  const [component, setComponent] = useState<any>();

  useEffect(() => {
    setComponent(
      <Button variant="contained">
        <PDFDownloadLink
          document={<DefaultPDF {...contrato} />}
          fileName={`contrato-${contrato.contrato.id}.pdf`}
          style={{ textDecoration: "none", color: "#fff", width: "100%" }}
        >
          {({ blob, url, loading, error }) =>
            loading
              ? "Carregando seu contrato..."
              : "Clique aqui para visualizar seu contrato!"
          }
        </PDFDownloadLink>
      </Button>
    );
  }, []);

  return <div>{component}</div>;
};
