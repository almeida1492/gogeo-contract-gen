import {
  Document,
  Font,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { IData } from "./types";

interface IProps {
  data: IData | undefined;
}

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

const rates = {
  A: 10.3,
  B: 14.5,
  C: 18.32,
  D: 20.12,
};

const getContractValue = (
  total: number,
  discountPackage: keyof typeof rates
) => {
  return total - (total / 100) * rates[discountPackage];
};

export const DocumentPreview: FC<IProps> = ({ data }) => {
  return (
    <>
      {data ? (
        <PDFViewer style={{ width: "100%", height: "inherit" }}>
          <Document>
            <Page size="A4" style={styles.body}>
              <Text style={styles.title}>Contrato</Text>
              <Text style={styles.text}>
                Pelo presente instrumento particular de CONTRATO DE PRESTAÇÃO DE
                SERVIÇOS EDUCACIONAIS, o XXX, associação civil, nos termos do
                artigo 44, IV, do Código Civil Brasileiro e Decreto 7.107/2010,
                devidamente inscrita no CNPJ/MF sob nº XXX, mantenedora do XXX
                com endereço na XXX, na cidade XXX, doravante denominado
                CONTRATADO, neste ato, por sua representante legal, XXX, e de
                outro lado, o Sr. {data.name} {data.surname}, residente em{" "}
                {data.address}, neste instrumento qualificado e doravante
                denominado CONTRATANTE, tem justo e contratado o que segue:
              </Text>

              <Text style={styles.text}>
                O valor real do contrato é de R$ {data.total.toLocaleString()}
                .00, com a subtração de{" "}
                {rates[data.discount as keyof typeof rates]}% desse, referente
                ao disconto do plano {data.discount}.
              </Text>
              <Text style={styles.text}>
                Valor calculado: R${" "}
                {getContractValue(
                  data.total,
                  data.discount as keyof typeof rates
                ).toLocaleString()}
                .00
              </Text>
            </Page>
          </Document>
        </PDFViewer>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
