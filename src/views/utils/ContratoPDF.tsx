import React, { useEffect, useState } from "react";
import { Imovel, Endereco, Contrato, Cliente, Tipo } from "@prisma/client";
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
  tipo: Tipo;
  imovel: Imovel;
  contrato: Contrato;
  cliente: Cliente;
};

export const DefaultPDF = ({
  endereco,
  tipo,
  imovel,
  contrato,
  cliente,
}: ContractProps) => {
  const tipoEnum = {
    v: "vender",
    a: "alugar",
  };

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
            O Proprietário concorda em {tipoEnum[tipo.nome]} o imóvel localizado
            em:
          </Text>
          <Text style={styles.enderecoBody}>
            {endereco.logradouro}, {endereco.numero}, {endereco.complemento}.{" "}
            {endereco.cidade} - {endereco.estado}.{endereco.cep}.{" "}
            {endereco.pais}
          </Text>
          <Text style={styles.contractTerms}>
            A data de vencimento deste contrato é{" "}
            {contrato.vencimento.getDate()} de {contrato.vencimento.getMonth()}{" "}
            de {contrato.vencimento.getFullYear()}, começando{" "}
            {new Date().getDate()} de {new Date().getMonth()} de{" "}
            {new Date().getFullYear()} e deverá terminar ou a ser renovado em 3
            depois disso, no valor acordado de R$
            {contrato.valor} a ser pago mensalmente, o valor de R$
            {contrato.valor} a ser pago na execução desse contrato e o valor de
            R${imovel.iptu} como IPTU do imóvel.
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
              4. Reconhecimento
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              As partes reconhecem e entendem os termos aqui estabelecidos neste
              Contrato.
            </Text>
          </View>
          <Text style={styles.signTitle}>
            Assinado em {contrato.dataAssinatura.getDate()} de{" "}
            {contrato.dataAssinatura.getMonth()} de{" "}
            {contrato.dataAssinatura.getFullYear()}
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
          fileName={`contrato-${"sua-tia"}.pdf`}
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
