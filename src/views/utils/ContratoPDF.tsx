import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

export const DefaultPDF = () => {
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
              <Text style={styles.contractTitle}>Locatário</Text>
              <Text style={styles.contractPerson}>Pessoa 1</Text>
            </View>
            <View>
              <Text style={styles.contractTitle}>Inquilino</Text>
              <Text style={styles.contractPerson}>Pessoa 2</Text>
            </View>
          </View>
          <Text style={styles.enderecoHeader}>
            O Proprietário concorda em alugar o imóvel localizado em:
          </Text>
          <Text style={styles.enderecoBody}>
            Av. Cel. Sizino da Rocha, 22, Jabotiana, Aracaju, Sergipe
          </Text>
          <Text style={styles.contractTerms}>
            O período do aluguel é de 1, começando 2 e deverá terminar ou a ser
            renovado em 3 depois disso, no valor acordado de 4 a ser pago
            mensalmente, e o valor de 5 a ser pago na execução desse contrato.
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
            <Text style={styles.termsAndConditionsSubTitle}>3. Móveis</Text>
            <Text style={styles.termsAndConditionsDescription}>
              O imóvel conta com os seguintes eletrodomésticos: geladeira de 2,5
              metros cúbicos, fogão a gás, forno micro-ondas, lava louças,
              máquina de lavar roupa automática e telefone. Danos e reparos
              deverão ser de responsabilidade do inquilino.
            </Text>
            <Text style={styles.termsAndConditionsSubTitle}>
              4. Reconhecimento
            </Text>
            <Text style={styles.termsAndConditionsDescription}>
              As partes reconhecem e entendem os termos aqui estabelecidos neste
              Contrato.
            </Text>
          </View>
          <Text style={styles.signTitle}>Assinado em 1 de 2, 3.</Text>
          <View style={styles.signContainer}>
            <View style={styles.signWrapper}>
              <Text style={styles.signSubTitle}>Proprietário</Text>
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

export const PDFReader = () => {
  const [component, setComponent] = useState<any>();

  useEffect(() => {
    setComponent(
      <Button variant="contained">
        <PDFDownloadLink
          document={<DefaultPDF />}
          fileName={`contrato-${"sua-tia"}.pdf`}
          style={{ textDecoration: "none", color: "#fff" }}
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
